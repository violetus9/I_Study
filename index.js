const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

// 몽고디비 키 가져오는부분, mongoose.connect부분을 보삼
const config = require('./config/key');

const { User } = require("./models/User");

// application/x-www-form-urlencoded 를 분석해서 가져올 수 있게
app.use(bodyParser.urlencoded({ extended: true })); // 신버전부터 바디파서 필요없대
// application/json 을 분석해서 가져올 수 있게
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  // 이 아래거 써줘야 오류같은게 좀 안뜨게 댐
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log(`MongoDB Connected....`))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World 노드몬 추가했써 hihihi'))

// 포스트를 사용합, 라우트 엔드포인트는 /register
app.post('/register', (req, res) => {
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


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// npm i -S mongoose 이따위로 설치해야돼