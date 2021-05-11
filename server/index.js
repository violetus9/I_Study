const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
// 쿠키파써 불러오기
const cookieParser = require('cookie-parser');
// 몽고디비 키 가져오는부분, mongoose.connect부분을 보삼
const config = require('./config/key');
const { auth } = require('./middleware/auth');
const { User } = require("./models/User");

// application/x-www-form-urlencoded 를 분석해서 가져올 수 있게
app.use(bodyParser.urlencoded({ extended: true })); // 신버전부터 바디파서 필요없대
// application/json 을 분석해서 가져올 수 있게
app.use(bodyParser.json());
// 쿠키파서 이렇게 해주고 사용할 수 있게
app.use(cookieParser());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  // 이 아래거 써줘야 오류같은게 좀 안뜨게 댐
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log(`MongoDB Connected....`))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World 노드몬 추가했써 hihihi'))


// 임의로 보내보는 req를 받는 라우터
app.get('/api/hello', (req, res) => {
  res.send('안녕하세요 ~ ! 보냈는데 받았나 보자~')
})


// 포스트를 사용합, 라우트 엔드포인트는 /register
app.post('/api/users/register', (req, res) => {
  // 회원가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 DB에 넣어줌
  // 저번에 만든 유저모델 가져와야대

  const user = new User(req.body) // 인스턴스생성

  // save는 몽고디비서오는 메서드
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

// 로그인 추가함니다
app.post('/api/users/login', (req, res) => {

  // 요청된 이메일을 db에서 있는지 찾는다
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.'
      })
    }

    // 요청된 이메일이 db에 있다면 비번 맞는 비번인지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      // 메서드는 유저모델에서 만들고 왔슴

      if (!isMatch)
        return res.json({ loginSuccess: false, message: '비번 틀려씀니다' })

      // 비번까지 맞으면 토큰 생성(메서드 만들거 generate~~)
      // (토큰 생성 위해 라이브러리 다운해야해(JSONWEBTOKEN))
      user.generateToken((err, user) => { // 유저를 받아온것
        // 에러가 있다면 > status400이면 에러가 있단거고 > 클라에 전해준다 send(에러메세지도)
        if (err) return res.status(400).send(err);

        // 토큰을 저장한다 > 어디에? 쿠키, 로컬스토리지, 등 여러군데 가능
        // 쿠키라고 치면 application탭에서 쿠키 보임 거기 저장되고
        // 로컬스토리지, 세션도 거기 탭에 있어, 어디에 저장할진 논란이 많지만 현재는 쿠키에 하겠어 (각기 장단이 이써)

        // 쿠키할라믄 라이브러리 또 깔아야댐 ㅋ(저번에 깐거 바디파서 말고 쿠키파서가 또 있슴)
        // 받았으면 상단가서 또 쿠키파서 가져와 주고 const cookiePar~
        // 암튼, 토큰을 쿠키에 저장할거다
        res.cookie('x_auth', user.token)  // x_auth는 쿠키창에서 나오는 이름
          .status(200)  // 대충 성공했다는 얘기
          .json({ loginSuccess: true, userId: user._id }) // 데이터 보내줌
        // 뭐 이렇게 로그인 설정이 끝났으니 postman으로 로그인 해봐
        // 서버 켜진거 확인하고 send 하는건 교양이쥬?
      })
    })
  })
})

// 여기 auth 미들웨어 콜백실행 전 무언가 해줌 middleware 폴더생성한거
app.get('/api/users/auth', auth, (req, res) => {

  // 여기까지 미들웨어를 통과했다는 얘기는 Authentication 이 True라는 말
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,  // 이부분은 역할의 부여에 따라 바꿀 수 있음
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })  // 이렇게 정보를 주면 어떤 페이지든 유저 정보를 이용할 수 있기에 편해진다
})

// 로그아웃
app.get('/api/users/logout', auth, (req, res) => {  // 미들웨어, 로그인될 상태일테니 auth넣어준것
  User.findOneAndUpdate({ _id: req.user._id },
    { token: "" },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
      })
    })
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// npm i -S mongoose 이따위로 설치해야돼