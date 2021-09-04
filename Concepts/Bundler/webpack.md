## Webpack

Module Bundler.

개발 작업 시 모듈이 여러개로 나뉜다. 프로젝트 규모가 클 수록 그럴 수 밖에 없다. 그러면 브라우저는 이 모든 시스템을 이용하기엔 네트워크 비용 낭비가 심해지게 된다.

그래서 번들러란 개념이 생겼다. 번들러는 모듈들을 하나로 묶어준다.

<br>

웹팩에서 사용하는 대표적 속성은 다음과 같다.

- 웹팩의 속성들
  - **Entry:** 웹 자원을 변환하기 위한 최초 진입점이자 JS파일 경로, 웹팩은 entry를 통해 모듈을 로딩하고 하나로 묶는다
  - **Output:** entry에서 묶은 결과물을 반환할 위치
  - **Loader:** 웹팩은 기본적으로 JS와 JSON만 빌드한다. 그래서 Loader는 다른 자원(HTML, CSS, Img)들을 빌드할 수 있게 도와준댜
  - **Plugin:** 웹팩 기본적인 동작 외 추가 기능 제공하는 속성, Loader가 파일 해석과 변환 과정에 관여한다면 plugin은 결과물의 형태를 바꿔쥼

추가적으로 봐야 할 것은 `babel`이란 트랜스 파일러이다.  
말 그대로 transpiler로 개발에 쓰인 프로그램들의 버전을 관리하여 브라우저 호환성을 맞추기 위해 사용한다. 시중에 나와있는 여러 브라우저들에 개발된 프로젝트를 배포하기 위해선 해당 브라우저들간 호환성을 맞춰줘야 개발 비용 손실이 나지 않는다.(그래서 다들 IE를 싫어한다. 다른 브라우저는 지원 하는 기능들을 얘만 지원 안하는 경우가 많기 때문..)

<br>

### 설정 단계

<br>

1. 의존성 초기화

   `npm init -y`

- _package.json 만들어서 초기화 시킴_

2. 바벨 설정

   `npm i -D @babel/core @babel/preset-env @babel/preset-react`

- _보통 개발단계에서 사용한다_

- *.babelrc*생성 후 아래 내용 기술
  ```
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
  ```

3. 웹팩 설정

   `npm i -D webpack webpack-cli webpack-dev-server`

- webpack-cli: 웹팩 커맨드 라인 인터페이스
- webpack-dev-server: 개발 서버 제공

<br>

대략적인 내용은 이러하다. 디테일은 직접 프로젝트를 구성하면서 다음 공식 문서를 참고하여 만들자.

https://webpack.js.org/
