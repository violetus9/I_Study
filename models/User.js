// 몽구스 모듈 가져와여
const mongoose = require('mongoose');
// 비크립트 가져와요
const bcrypt = require('bcrypt');
const saltRounds = 10
// 토큰
const jwt = require('jsonwebtoken');

// 스키마를 생성할게요
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

// 모델을 저장하기 전에 암호화를 넣어줄것이다
userSchema.pre('save', function (next) {
  // 비번 가져오기위해서 객체가져오기
  let user = this;
  // 다른 정보 들어와도 비번바뀔때만 암호화가 동작하게끔
  if (user.isModified('password')) {
    // 비밀번호를 암호화 시킨다.(bcrypt npm 가서 떠오삼)
    bcrypt.genSalt(saltRounds, function (err, salt) {
      // next하면 레지스트라우터로 바로간댔지 > 에러나면 바로 보내자
      if (err) return next(err)
      bcrypt.hash(user.password, salt, function (err, hash) { // hash가 암호화된 비번임
        // Store hash in your password DB.
        if (err) return next(err)
        user.password = hash
        next()
      });
    });
  } else {
    next()
  }
})

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // plainPassword 123123   암호화된 비밀번호 ~~ 랑 같은지 체크해야
  // 암호화된 것을 복호화 할 수는 없어!
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch) // 비번이 같으니 isMatch가 true겠지
  })
}

// 토큰
userSchema.methods.generateToken = function (cb) {

  var user = this;

  // jsonwebtoken을 이용해서 token 생성하기(위에 전역변수 설정함)
  var token = jwt.sign(user._id.toHexString(), 'secretToken')
  // 두개를 합쳐 토큰을 만들었어, 시크릿 토큰으로 아이디를 불러올 수 있으니까 기억을 해줘야해
  // user._id + 'secretToken' = token
  // ->
  // 'secretToken' -> user._id
  user.token = token
  user.save(function (err, user) {
    if (err) return cb(err)
    cb(null, user)  // 이제 이 정보들이 index로 간다(generate~부분)
  })

}

// 스키마를 모델로 감싼다고 햇죠
const User = mongoose.model('User', userSchema)

// 다른곳에서도 쓸 수있게 익스포트를 함니다
module.exports = { User }

