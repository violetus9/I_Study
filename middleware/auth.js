const { User } = require.apply('../models/User');

let auth = (req, res, next) => {

  // 인증 처리를 하는 곳

  // 1. 클라이언트 쿠키에서 토큰을 가져온다(쿠키파서이용)
  let token = req.cookies.x_auth;

  // 2. 토큰을 복호화하고 유저를 찾는다(유저모델서 메소드 생성해서)
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true })

    // 유저가 있으면
    req.token = token;
    req.user = user;  // 정보를 쓰려고 req에 넣어준것
    next(); // next가 없으면 미들웨어에 갇힘, 다하고 다음으로 갈 수 있게 하는거

  })

  // 3. 유저 있으면 인증 O


  // 4. 유저 없으면 인증 X

}


// 다른데서도 쓸 수 ㅣㅇㅆ게

module.exports = { auth };