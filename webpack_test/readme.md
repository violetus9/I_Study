## WeBpAcK!

웹팩!   
**Module Bundler**   
* 작업할 때 모듈이 여러개로 나뉘는데.. 브라우저 입장에서 이 모든 시스템을 이용하기엔 네트워크 비용 낭비가 심함둥
* 번들러는 그 모듈들을 묶어주는 친구임, 여러 번들러가 있지만 여기선 웹팩을 사용하겠어
* 웹팩의 속성들
  * **Entry:** 웹 자원을 변환하기 위한 최초 진입점이자 JS파일 경로, 웹팩은 entry를 통해 모듈을 로딩하고 하나로 묶는돠
  * **Output:** entry에서 묶은 결과물 반환할 위치
  * **Loader:** 웹팩은 기본적으로 JS와 JSON만 빌드한대 그래서 Loader는 다른 자원(HTML, CSS, Img)들을 빌드할 수 있게 도와준댜
  * **Plugin:** 웹팩 기본적인 동작 외 추가 기능 제공하는 속성, Loader가 파일 해석과 변환 과정에 관여한다면 plugin은 결과물의 형태를 바꿔쥼
<br>

바벨!   
**transpiler**
* ES6 > ES5 변환, 브라우저 호환이 react랑 안맞으면 안되니까 맞춰주는 듯!

- - -
<br>

## 설정 단계
<br>

### 1. 의존성 초기화   
  ```
  npm init -y
  ```
  * *package.json 만들어서 초기화 시킴*

### 2. 바벨 설정
  ```
  npm i -D @babel/core @babel/preset-env @babel/preset-react
  ```
  * *보통 개발단계에서 사용한대*   

* *.babelrc*
  ```
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
  ```
  근데 왜 봐봴은 골뷍이 붙여서 설치하는거쥅?
  
### 3. 웹팩 설정
  ```
  npm i -D webpack webpack-cli webpack-dev-server
  ```
  * webpack-cli: 웹팩 커맨드 라인 인터페이스   
  * webpack-dev-server: 개발 서버 제공~

> 요정도로 하고 다음을 따라가세요~   
webpack.config.js 만들었습니다   
(주석위주로 따라가면 됨, 하다가 이상한 코드같은거 나오면 길 잃어버린거임 처음부터 다시가세요 ^^)
