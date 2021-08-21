## REST API

프론트 엔드 개발시 서버와 통신을 하게 되는데 이 때 가장 많이 쓰이는 방식이 RESTful API이다.

HTTP 프로토콜을 사용한다.  
HTTP(Hyper Text Trans Protocol): 인터넷에서 html, 이미지, 비디오등의 것들을 송수신할 수 있는 통신 규약.

여러 특징이 있지만 우리가 이번에 주목할 부분은 `HTTP는 상태가 없지만 세션은 있다`라는 특징이다.

<br>

**상태가 없다는 것**

HTTP는 전형적인 비동기 프로토콜이다. 데이터를 요청하고 응답을 주면 연결을 끊는다는 것이다.

한 예를 들어보자  
클라이언트 앱에서 로그인을 구현한다면, 로그인 API를 통해 HTTP연결을 하게 된다. 이 때, 그 다음 페이지는 전달된 ID, PW에 대해 특별한 처리를 하지 않으면 로그인 한 사용자인지 알 방법이 없다. 상태를 가지고 있지 않기 때문이다. (리액트 할때 useState 쓰던것과 비슷함)

<br>

**REST API?**

RESTful API(Representational state transfer)

- Semantics of HTTP methods

  - GET
  - POST
  - PUT
  - DELETE
  - 외에도 더 있긴 함

한마디로 REST API의 핵심은, 위의 동사들과 url을 가지고 의미를 만들어내는 프로토콜이라는 것이다.

동사와 연결된 url이란 것은 서버의 데이터가 드러난 형태라고 할 수 있다. 이 데이터는 자원(리소스)라고 불리며 자원을 기준으로 클라이언트와 서버가 데이터를 상호 교환하게 된다.

이 때 Clean URL이라는 개념이 있는데 참고하도록 하자.

<br>

**Clean URL**

"자원 관점에서만 기술해도 된다"라는 일종의 가이드 라인.

예를들면 서버가 user라는 정보를 갖고 있다고 해보자. 이 경우 user는 자원이 되고 이를 기준으로 서버와 클라이언트는 소통을 한다. 하지만 클라이언트 관점에서 서버가 자원을 어떻게 관리하는지 디테일하게 알 필요가 없다. 핵심적인 내용에 대해서만 관심을 가지라는 것이다.

아래의 표에서 Original-URL은 서버의 상황을 너무 과하게 노출하게 되므로, 오른쪽의 Clean-URL처럼 표현을 한다.

| **Original-URL**                 | **Clean-URL**             |
| -------------------------------- | ------------------------- |
| http://example.com/about.html    | http://example.com/about  |
| http://example.com/user.php?id=1 | http://example.com/user/1 |

<br>

- 정리

  HTTP 기반에서 API를 만들 때 위의 형식으로, 기반으로 만들라는 가이드라인이 RESTful API라고 하는 것이다.

  RESTful API의 개념이 잘 잡혀있다면 서버 개발자가 RESTful API 방식으로 개발했다고 했을 때, 대략 어떤식으로 url이 나올지 어느 패턴으로 만들어질지를 예측할 수 있게 된다.  
  API 연동을 하지 않는 클라이언트 앱은 거의 없기에 충분한 학습을 할 필요가 있다.

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- _Reference_

  - https://developer.mozilla.org/ko/docs/Web/HTTP/Overview
  - https://en.wikipedia.org/wiki/Representational_state_transfer
  - https://en.wikipedia.org/wiki/Clean_URL
