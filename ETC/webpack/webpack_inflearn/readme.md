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