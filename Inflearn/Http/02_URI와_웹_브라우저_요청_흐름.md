## URI와 웹 브라우저 요청 흐름

- **URI(Uniform Resource Identifier)**

  소스 식별의 혼합된 방법  
  locator, name 또는 둘 다 추가로 분류될 수 있다  
  locator : 리소스의 위치를 지정  
  name: 리소스에 이름을 부여

  - 위치는 변할 수 있다, 이름은 그렇지 않고
  - URN만으로 실제 리소스를 찾는 방법이 보편화 되어있지 않다
  - 향후 URI와 URL과 같은 의미로 이야기 할 것임

  > URI = URL(locator) + URN(name)

  단어 뜻을 보쟈~  
   Uniform: 리소스 식별하는 통일된 방식  
   Resource: 자원, URI로 식별할 수 있는 모든 것  
   Identifier: 다른 항목과 구분하는데 필요한 정보

- **URL 분석**

  - 대강 요러한 구성!
    `scheme://[userinfo@]host[:port][/path][?query][#fragment]`

  - 실제 예시
    `https://www.google.com/search?q=hello&hi=ko`

    - 프로토콜: https
      어느 방식으로 자원에 접근할지 약속된 규칙, like http~

    - 호스트명: `www.google.com`  
      도메인이나 IP주소 직접 사용 가능

    - 포트번호: 443  
      일반적으로 생략이 가능!

    - 경로: /search  
      리소스의 경로, 계층적인 구조를 가지고 있똬

    - 쿼리 파라미터: q=hello&hi=ko  
      key=value 형태  
      ?로 시작하며 &로 추가  
      query parameter, query string 이라고도 함, 웹서버에 제공하는 파라미터나 문자 형태

    - fragment라는 것은 서버로 가진 않지만 웹상에서 추가적인 정보를 담아

- **웹 브라우저 요청 흐름**

  - HTTP 메시지 전송

    1. 웹 브라우저가 HTTP 메시지 생성
    2. SOCKET 라이브러리를 통한 전달  
       a. TCP/IP 연결(IP, PORT)  
       b. 데이터 전달
    3. TCP/IP 패킷 생성, HTTP 메시지 포함
    4. 기타 LAN드라이버, LAN장비를 통한 통신
