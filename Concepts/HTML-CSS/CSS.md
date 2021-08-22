## CSS

Cascading Style Sheets  
HTML이나 XML로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어.

<br>

**페이지 레이아웃을 구성할 때 알아야 하는 것들**

- display

  페이지의 레이아웃을 결정하는 속성, 모든 HTML 요소는 display값을 가지며 대부분 block이나 inline이다.

  자주 사용되는 display 속성은 다음과 같다

  1. block: 하나의 줄을 차지하며 가능한 가로 넓이를 최대로 가진다. 대표적 태그로는 `div`, `p`, `form`, `header`, `section`등이 있다.

  2. inline: 특정 텍스트를 감싸는 형태의 속성. `span`, `a`등이 있다.

  3. inline-block: 줄 바꿈 없이 다른 인라인 요소와 나란히 배치되는 속성. `button`등이 있다.

  4. flex: 화면의 비율을 기준으로 레이아웃을 구성하는 최신 속성. 직관적으로 복잡한 레이아웃을 쉽게 구성할 수 있다.

  5. none: 화면에 표시되지 않는 속성. `script`태그가 대표적이며 `visibility`속성과는 다르게 해당 요소의 공간을 차지하지 않는다.

<br>

- 수평 중앙 정렬

  특정 요소를 가로 방향으로 중앙에 놓고 싶다면

  ```html
  <style>
  	.wrapper {
  		width: 600px;
  		margin: 0 auto; /* 위 아래 0 좌 우 auto */
  	}
  </style>

  <div id="wrapper"></div>
  ```

  다만 이 경우 브라우저 가로 넓이가 width보다 작을 때, 가로로 스크롤이 생기게 되므로 width 대신 max-width 로 해결하자

  ```css
  .wrapper {
  	max-width: 600px;
  	margin: 0 auto;
  }
  ```

<br>

- 박스 레이아웃

  박스의 최종 넓이는 `padding`, `border`등의 속성이 추가되어 최종 넓이를 계산하기 어렵다. 이럴 때 아래와 같이 박스 레이아웃을 쉽게 지정할 수 있다.

  ```css
  .strange {
  	width: 500px;
  	padding: 20px;
  	box-sizing: border-box;
  }
  ```

  `border-box`속성은 다른 속성의 값을 넓이에 반영하지 않으므로 순전히 500px의 요소를 만들어낼 수 있게 된다.

  그 때문에 css코드 작성 도입부에 아래와 같이 코드를 추가하고 시작하는 경우가 많다.

  ```css
  * {
  	box-sizing: border-box;
  }
  ```

<br>

- position

  해당 요소가 페이지에 어떻게 위치하게 되는지를 지정하는 속성.

  1. static: 기본값, 위치가 지정되지 않음, 요소에 따로 값을 지정하지 않았다면 이 값으로 설정된다.

  2. relative: `top`, `right`, `left`, `bottom`과 같은 속성을 주지 않으면 기본값과 동일하게 위치한다. 만약 위 속성에 값을 지정한다고 하더라도 다른 요소에 영향을 미치지 않는다.

  3. fixed: 화면에 비춰지는 기준으로 위치가 지정된다. 만일 우측하단에 고정하고자 하는 요소가 있다면 다음과 같이 작성하면 된다.

  ```css
  .fixed-btn {
  	position: fixed;
  	bottom: 0;
  	right: 0;
  	width: 50px;
  	height: 50px;
  }
  ```

  4. absolute: 포지션이 설정된 가장 근접한 요소를 기준으로 `fixed`와 같은 방법으로 위치를 설정한다. 만일 그러한 요소가 없다면 document.body를 기준으로 위치가 지정된다.  
     _참고로 `absolute`를 사용하려면 근처에 꼭 `relative`를 지정하도록 하자_

<br>

- float

  텍스트 영역에 인라인 이미지를 표시할 수 있게 고안된 속성.  
  right, left를 통해 위치를 지정할 수 있다.

  만약 뒤에 따라오는 요소에 `float`의 영향을 주고싶지 않다면 `clear`속성을 이용한다

  ```html
  <style>
  	.main {
  		float: left;
  		width: 400px;
  		height: 200px;
  		margin: 1rem;
  	}
  	.next-main {
  		clear: left;
  	}
  </style>

  <div class="main">ele1</div>
  <section class="next-main">ele2</section>
  ```

  위 코드의 실행 결과는 좌측으로 플로팅 된 div의 다음 줄에 section태그가 나타난다.

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

- 참고

  https://joshua1988.github.io/web-development/css/layout-basic/

  https://developer.mozilla.org/ko/docs/Web/CSS
