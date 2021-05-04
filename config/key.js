if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
// key.js는 배포와 로컬, 환경변수를 어떻게 가져올지를 말함