## 인프런 - 프론트엔드 개발환경의 이해와 실습 (webpack, babel, eslint..)

<br>

- - -

<br>

## Node.js   

* 장점

  * 최신 스펙으로 개발할 수 있다
  * 빌드 자동화
  * 개발 환경 커스터마이징

* 프로젝트를 생성: npm init

  * package.json에 정보를 기록하고 프로젝트를 초기화

* 패키지 내려받기: npm i(install)

<br>

## npm

* Sementic Version

  * Major Version: 기존 버전과 호환되지 않게 변경한 경우
  * Minor Version: 기존 버전과 호환되며, 기능이 추가된 경우
  * Patch Version: 기존 버전과 호환되며, 버그를 수정한 경우

  > v16.12.0 : Major 16, Minor 12, Patch 0

  * ~ : 마이너 버전이 명시되어 있으면 패치버전을 변경   
    ex) ~0: 0.0.0부터 1.0.0미만까지 포함
  * ^ : 정식 버전에서 마이너와 패치 버전을 변경
    ex) ^1.2.3: 1.2.3부터 2.0.0미만까지 포함

<!-- https://github.com/jeonghwan-kim/lecture-frontend-dev-env -->

<br>

## babel   

일반적으로 쓰던 방식으로 코딩하되, 여러 브라우저의 호환성을 맞춰준다

* 여러 개의 플러그인들을 모은 세트를 preset이라 하며 ECMAScript 환경은 env preset을 사용

* core: 파싱과 출력을 담당

* plugin: 변환을 처리

* babel이 변환할 수 없는 코드는 폴리필이라 하는 코드 조각을 불러와 결과물에 로딩하여 해결

* 웹팩과 통합하여 사용하는 것이 일반적, loader 형태로 제공된다
  > babel-loader를 통해 단순하고 자동화된 프론트엔드 개발 환경을 갖추자