// console.log(18);
// npm start 해봥
// 해보니까 dist폴더랑 bundle.[hash].js가 생겼어요~
// 다음은 로더를 볼까
// npm i -D babel-loader html-loader

// babel-loader: ES6 to ES5, 인 바벨을 웹팩에서 쓸수있게 해쥬
// html-loader: 웹팩이 html을 읽을 수 있게 해쥬

// loader는 module과 rules라는 키워드를 사용한대요
// rule 정의시엔 아래와 같이 한대

/*
  module: {
    rules: [
      {
        test: '빌드할 파일 확장자 정규식',
        exclude: '제외할 파일 정규식',
        use: {
          loader: '사용할 로더 이름',
          option: '로더 옵션'
        }
      }
    ]
  }
*/

// webpack.config.js에서 코드를 추가할거야 31A라는 위치에 코드 추가해놨어 그거 확인하고 이리 다시 돌아와
// plugin 볼거다
// npm i -D html-webpack-plugin
// html-webpack-plugin은 html관련 plugin이다, 템플릿을 지정하거나 favicon을 설정할 수 있엉
// webpack.config.js에 코드 또 추가함 21T를 찾아보고 이리 다시 오세요

// npm i -D webpack-dev-server
// 다깔구 package.json의 script변경할거야
// "start": "webpack-dev-server"
// 그리고 webpack.config.js 서 개발 서버 설정할거임 72G ㄱㄱ 그리고 다시 오렴

// 이제 react 코드 작성할것 react 패키지 받자
// npm i react react-dom

// 그리고 아래의 코드와 app.js 만듬

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));

// 마지막으로 public/index.html 템플릿을 만듬
// npm start해보고 웹에서 developer tools > sources 가면 번들된 파일을 볼 수 있단다