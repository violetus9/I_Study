// 21T, 밑에 모듈에도 또 있엉
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 72G
const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',    // 1. 현재 모드를 개발 환경으로 설정
  entry: './src/index.js',    // 2. 엔트리 요기 나왔네효
  output: {   // 3. 아웃풋도 나왔네요~ 반갑다~
    filename: 'bundle.[hash].js'  // 4. 번들 된 파일 이름, [hash]가 앱 컴파일시 웹팩서 생성된 해시를 사용한대
  },
  // 31A
  module: {
    rules: [
      { // ES6 바벨 관련 로더, .js와 .jsx 확장자도 같이 번들한대, node_modules안의 파일은 번들서 제외
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { // html loader. monimize: true는 코드 최적화를 하는 옵션이래
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  // 21T
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })  // public/index.html을 템플릿으로 지정
  ],
  // 72G
  devServer: {
    host: 'localhost',  // 개발 서버의 url
    port: port,   // basically 3000
    open: true,   // 서버 실행시 브라우저 자동 실행할건지
  },
};

// 자 웹팩 설정이 잘 됐는지 보자구
// package.json
// "start": "webpack" 추가하고 만들었으면 src/index.js 만들고 가셍

