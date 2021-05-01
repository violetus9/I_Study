const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kh:kh@boilerplate.68hjg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  // 이 아래거 써줘야 오류같은게 좀 안뜨게 댐
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log(`MongoDB Connected....`))
  .catch(err => console.log(err))


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// npm i -S mongoose 이따위로 설치해야돼