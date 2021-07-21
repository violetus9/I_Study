## HTTP 기본

HTTP(HyperText Transfer Protocol)

- **모든 것이 HTTP**

  - HTTP 메시지에 모든 것을 전송

    - HTML, TEXT
    - IMG, 음성, 영상, 파일
    - JSON, XML
    - 거의 모든 형태 데이터 전송 가능
    - 서버간 데이터를 주고 받을 때도 대부분 HTTP 사용

  - HTTP 특징

    - 클라 - 서버 구조
    - 무상태 프로토콜(stateless), 비연결성
    - HTTP 메시지
    - 단순, 확장 가능

<br>

- **클라이언트 서버 구조**

  Request, Response 구조  
  클라는 서버에 요청을 보내고, 응답을 대기  
  서버가 요청에 대한 결과를 만들어서 응답

<br>

- **Stateful, Stateless**

  무상태 프로토콜(Stateless)

  - 서버가 클라이언트의 상태를 보존하지 않는다
  - 장점: 서버 확장성 높다(스케일 아웃)
  - 단점: 클라이언트가 추가 데이터 전송

  **Stateful, Stateless 차이**

  - 상태 유지: 고객과 점원으로 비교하자면, 중간에 다른 점원으로 바뀌어선 안된다. (혹여 그럴경우 상태 정보를 점원B에게 인수인계한다)
  - 무상태: 중간에 점원이 바뀌어도 된다  
     갑자기 고객이 증가해도 점원을 대거 투입할 수도 있다  
     = 갑자기 클라이언트 요청이 증가해도 서버를 대거 투입할 수 있다~
    > 무상태는 응답 서버를 쉽게 바꿀 수 있음  
    > 무한한 서버 증설 가능!

  **Stateless 실무상 한계**

  - 모든 것을 무상태로 설계할 수 있기도 하고 없기도 하다
    - 무상태  
      로그인이 필요 없는 단순 서비스 화면
    - 상태 유지  
      로그인
  - 로그인한 사용자의 경우 로그인 했다는 상태를 서버에 유지
  - 일반적으로 브라우저 쿠키, 서버 세션 등을 사용한 상태 유지
  - 상태 유지는 최소한을 사용

<br>

- **비 연결성(connectionless)**

  연결을 계속 유지한다면 그만한 비용이 계속 발생하게된다  
  연결을 유지하지 않는다면, 요청과 응답이 이뤄진 후 연결을 끊는다면 서버에 최소한의 자원을 사용하게 할 수 있다

  - HTTP는 기본적으로 연결을 유지하지 않는 모델
  - 일반적으로 초 단위 이하의 빠른 속도로 응답
  - 1시간동안 수천이 서비스를 사용해도 실제 서버상 동시 처리 요청은 수십개 이하로 매우 작다  
    (웹 브라우저에서 계속 연속해서 검색을 누르진 않잖아)
  - 서버 자원을 매우 효율적으로 사용할 수 있음

  **한계점&극복**

  - TCP/IP 연결을 새로 맺어야 한다..-3way handshake
  - 웹 브라우저로 요청하면, HTML을 비롯한 여타 다른 자원들 모두 다운로드가 ...
  - 지금은 HTTP 지속 연결(Persistent Connections)로 문제 해결
  - HTTP/2, HTTP/3에서 더 많이 최적화 되었슴

  **Stateless가 중요하다!**

  > 서버개발자 입장에서

  - 같은 시간에 딱 맞춰 발생하는 대용량 트래픽..  
    정시 선착순 이벤트, 수강신청~~ 이런것들!

<br>

- **HTTP 메시지**

  요청 메세지와 응답 메세지로 나뉜다 크게는  
  start-line  
  header  
  empty line (CRLF)  
  message body

  - 요청

    - start-line = request-line / status-line  
      request-line = method SP(공백) request-target SP HTTP-version CRLF(엔터)  
      HTTP 메서드 (GET: 조회)  
      요청 대상 (/search?q=hrllo&hi=ko)  
      HTTP Version

    - 요청 메시지 - HTTP 메서드  
      종류: GET, POST, PUT, DELETE  
      서버가 수행해야 할 동작 지정

    - 요청 메시지 - 요청 대상  
      absolute-path[?query] (절대경로[?쿼리])  
      절대경로 = '/'로 시작하는 경로  
      참고: `*,http://...?x=y` 와 같이 다른 유형의 경로 지정 방법도 이씀

    - 요청 메시지 - HTTP 버젼

  - 응답  
    start-line = request-line / status-line  
    status-line = HTTP-version SP status-code SP reason-phrase CRLF  
    HTTP 버전  
    HTTP 상태 코드: 요청 성공, 실패를 나타내는..
    (200: 성공
    400: 클라이언트 요청 오류
    500: 서버 내부 오류)  
    이유 문구: 사람이 이해할 수 있는 짧은 상태 코드 설명 글

    - HTTP 헤더  
      header-field = field-name ':' OWS field-value OWS (OWS: 띄어쓰기 허용)  
      field-name은 대소문 구문 없다

      - 헤더 용도  
        HTTP 전송에 필요한 모든 부가정보  
        (예: 메시지 바디의 내용, 메시지 바디의 크기, 압축, 인증, 요청 클라이언트(브라우저) 정보, 서버 애플리케이션 정보, 캐시 관리 정보...)  
        표준 헤더가 너무 많대  
        필요시 임의 헤더 추가 가능
        > helloworld: hihi

    - HTTP 메시지 바디 용도  
      실제 전송할 데이터  
      HTML 문서, 이미지, 영상, JSON 등 byte로 표현할 수 있는 모든 데이터 전송 가능

  - 단순함, 확장 가능

    HTTP는 단순하고 스펙도 읽어볼만 하대  
    메시지 또한 단순  
    크게 성공하는 표준 기술은 단순하지만 확장 가능한 기술이다

- **HTTP 정리**

  - HTTP 메시지에 모든 것을 전송
  - HTTP 역사 HTTP/1.1을 기준으로 학습
  - 클라이언트 서버 구조
  - 무상태 프로토콜(Stateless)
  - HTTP 메시지
  - 단순함, 확장 가능
  - _현재는 HTTP의 시대!_
