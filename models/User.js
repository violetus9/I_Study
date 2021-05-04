// 몽구스 모듈 가져와여
const mongoose = require('mongoose');

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

// 스키마를 모델로 감싼다고 햇죠
const User = mongoose.model('User', userSchema)

// 다른곳에서도 쓸 수있게 익스포트를 함니다
module.exports = { User }

