## Page Load Event

DOMContentLoaded, load, beforeunload, unload 이벤트

<br>

HTML 문서 생명주기엔 다음의 주요 세 가지 이벤트가 관여한다.

- DOMContentLoaded: 브라우저가 HTML을 전부 읽고 DOM 트리를 완성 즉시 발생. img나 stylesheet 등의 기타 자원은 기다리지 않는다.

  > DOM 준비된 후 원하는 DOM 노드를 찾아 핸들러를 등록, 인터페이스를 초기화할 때 활용 가능

- load: HTML로 DOM 트리를 만드는 게 완성되었고 img, stylesheet 등의 외부 자원도 모두 불러왔을 때 발생한다.

  > img 크기를 확인할 때 등, 외부 자원이 로드된 후므로 화면에 뿌려진 실 요소들의 크기를 확인할 수 있다.

- beforeunload/unload: 사용자가 페이지를 떠날 때 발생한다.

  > beforeunload: 사용자가 사이트를 떠날 때, 변경되지 않은 사항을 저장했는지 확인시킬 때

  > unload: 사용자가 진짜 떠나기 전 분석 정보를 담은 통계자료를 전송코자 할 때

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

참고

https://ko.javascript.info/onload-ondomcontentloaded
