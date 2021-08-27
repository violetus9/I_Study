## HTTP 메서드 활용

- **클라이언트에서 서버로 데이터 전송**

  데이터 전달 방식은 크게 두가지!

  1. 쿼리 파라미터를 통한 데이터 전송  
     GET(주로 조회)  
     주로 정렬 필터(검색어)
  2. 메시지 바디를 통한 데이터 전송  
     POST, PUT, PATCH  
     회원 가입, 상품 주문, 리소스 등록, 리소스 변경

<br>

- 클라 to 서버 data전송은 크게 4가지 상황이 있어

  - 정적 데이터 조회  
    이미지, 정적 텍스트 문서

  - 동적 데이터 조회  
    주로 검색, 게시판 목록에서 정렬 필터(검색어)

  - HTML Form을 통한 데이터 전송  
    회원 가입, 상품 주문, 데이터 변경  
    GET, POST만 지원

  - HTTP API를 통한 데이터 전송  
    회원 가입, 상품 주문, 데이터 변경  
    서버 to 서버, 앱 클라이언트, 웹 클라이언트(Ajax)

<br>

---

- **HTTP API 설계 예시**

  - HTTP API - 컬렉션

    - POST 기반 등록  
      예) 회원 관리 API 제공

  - HTTP API - 스토어

    - PUT 기반 등록  
      예) 정적 컨텐츠 관리, 원격 파일 관리

  - HTTP FORM 사용

    - 웹 페이지 회원 관리
    - GET, POST만 지원
    - Controll URI 필요

<br>

- 참고하면 좋은 URI 설계 개념

  - 문서(document)

    - 단일 개념(파일 하나, 객체 인스턴스, DB row)  
      예) /members/100, /files/star.jpg

  - 컬렉션(collection)
    - 서버가 관리하는 리소스 디렉터리
    - 서버가 리소스의 URI를 생성하고 관리  
      예) /members
  - 스토어(store)

    - 클라이언트가 관리하는 자원 저장소
    - 클라이언트가 리소스의 URI를 알고 관리  
      예) /files

  - 컨트롤러(controller), 컨트롤 URI
    - 문서, 컬렉션, 스토어로 해결하기 어려운 추가 프로세스 실행
    - 동사를 직접 사용  
      예)/members/{id}/delete

_참고:[ https://restfulapi.net/resource-naming ]_
