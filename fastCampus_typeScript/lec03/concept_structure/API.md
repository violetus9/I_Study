## API

웹 어플리케이션을 개발할 때 필요한 모든 도구모음이라 할 수 있음.  
모든것을 알 필요는 없는데 찾아서 쓰는 정도는 할 줄 알아야함 ㅎ

- 자주 쓰는 API

  - Storage API

    브라우저 측에서 브라우저에 데이터를 저장하기 위한 용도의 저장소  
    여러가지 종류가 있는데 Storage탭을 보면 로컬, 세션, 등... 있음

    - Window.{ localStorage & sessionStorage }

      sessionStorage와 기본적으로 사용법은 동일하다.  
      localStorage는 JS코드로 clear하거나 remove하기 전엔 삭제되지 않는다.  
      sessionStorage는 브라우저 세션을 기반으로만 저장을 유지한다. 브라우저 종료시 세션에 있는 정보가 날아간다는 것.  
      둘다 데이터 저장엔 문자열로 저장됨

  - History API

    브라우저에서 사용자가 페이지를 이동안 내용을 기록한 API  
    SPA를 만들 때 화면전환같은거 처리하기 위함!  
    추후 framework를 다루면 직접쓰진 않아도 내부적으로 다루고 있기 때문에 알아둬야하는 API중 하나

  - Clipboard API

    공유하고자 하는 정보를 담는 API

  - Canvas API

    광범위한 2D 그래픽을 다루는 그래픽 시스템  
    저수준 시스템이다. css나 html로 도저히 구현할 수 없는 픽셀 단위의 그래픽을 다룰 수 있음  
    그래픽 시스템에 관심이 있다면(차트, 2d그래픽, 게임 등..) 배워볼만하다~
