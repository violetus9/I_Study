## JS 이벤트 전달 방식

JS에서 이벤트 객체는 DOM 내부에 위치하고 사용자의 액션에 대한 상세 정보를 담고 있다.

사용자 입력을 처리하기 위해 이벤트 등록을 하게되면 이벤트 발생 시 브라우저가 이를 감시한다.

DOM은 트리 구조를 가지고 있다. 이벤트는 트리의 노드를 타고 전파되며 이러한 이벤트 전파는 두가지 방식으로 진행된다.

- bubbling: 이벤트 발생 시 상위 노드로 이벤트를 전달한다.

  하위 div > 그 위 div > ... > 최상위 body 이런식.

- capturing: 버블링과 반대개념.

  body > 하위 요소

  > 이벤트 리스너 api에서 옵션 객체의 capture 속성으로 탐색 방식을 바꿔줄 수 있다.

<br>

### 이벤트 등록

```html
<button>add one item</button>

<script>
	const button = document.querySelector("button");
	button.addEventListener("click", addItem);

	function addItem(e) {
		console.log(e); // 이벤트 관련 정보 출력
	}
</script>
```

위처럼 `addEventListener()`란 웹 API는 화면에 동적인 기능을 추가하기 위한 이벤트 등록 기능이다.

> 이벤트 'click'과 같은 인자에 더 알아보고싶다면 아래를 참고  
> https://developer.mozilla.org/ko/docs/Web/Events

> 이벤트 자체의 속성과 메서드에대해 보고싶다면 아래를 참고  
> https://developer.mozilla.org/ko/docs/Web/API/Event

<br>

### Event Delegation

이벤트 위임이라고 한다. vanilla JS에서 많이 쓰이는 코딩 패턴이며 하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트를 제어할 수 있게 하는 방법이다.

```html
<ul class="itemList">
	<li>
		<input type="checkbox" id="item1" />
		<label for="item1">bubbling item</label>
	</li>
	<li>
		<input type="checkbox" id="item2" />
		<label for="item2">capturing item</label>
	</li>
</ul>
```

보통의 경우 리스트 내부 인풋 박스에 일일히 걸어주려 하는데.. 아래처럼...

```js
const inputs = document.querySelectorAll("input");

inputs.forEach(function (input) {
	input.addEventListener("click", function (event) {
		alert("clicked");
	});
});

const itemList = document.querySelector(".itemList");
```

하지만 문제가 있다. 리스트 내부 인풋 박스가 추가 생성되는 경우 해당 인풋박스에 대한 이벤트는 감지할 수가 없기 때문이다.

<br>

문제가 되는 상황을 직접 보자

버튼 하나 더 필요해져서 추가하려고 한다.

```js
const itemList = document.querySelector(".itemList");

const li = document.createElement("li");
const input = document.createElement("input");
const label = document.createElement("label");
const labelText = document.createTextNode("delegation ~");

input.setAttribute("type", "checkbox");
input.setAttribute("id", "item3");
label.setAttribute("for", "item3");
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);
```

하지만 동작하진 않는다. 인풋 박스에 이벤트를 추가하는 시점에서 리스트 아이템은 두개이기 때문. 이런 상황이 반복된다고 하면 매번 같은 이벤트를 새로 달아줘야 하는것도 일이다...

바람직하게 변경해보자..

<br>

```js
const itemList = document.querySelector(".itemList");
itemList.addEventListener("click", function (e) {
	alert("clicked~!");
});
```

위임을 이용해 상위요소 ul태그에 이벤트를 걸어주면서 상황을 해결할 수 있다.

_하지만 이 코드는 label과 같은 하위 요소 모든 태그에 이벤트를 등록함ㅎ 코딩 많이 해서 연구해보세요~_
