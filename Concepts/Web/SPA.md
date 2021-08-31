## SPA

Single Page Application

<br>

### 기존의 웹 서비스

기존 웹 서비스는 앵커 태그(a 태그요)로 페이지를 새로고침 하는 방식이었다. 앵커에 표시된 자원(html)을 서버로 요청하여 응답 받는 내용을 브라우저에 표현하는 방식.

```html
...
<a href="/">main</a>
<a href="other.html">ann-main</a>
<a href="page404.html">lost...</a>
...
```

이러한 방식을 서버사이드 렌더링이라 한다. 기본적으로 요청에 대한 응답을 보내주기 때문.

브라우저가 응답을 받자마자 렌더링을 할 수 있기에 빠르고, 별도의 Javascript 코드가 없어도 쉽게 작성이 가능하다는 장점이 있지만...

중복 데이터가 네트웤으로 넘어온다는 점은 서버의 낭비가 된다는 점에서 단점이 될 수 있다.(예를들면 헤더, 네이게이션 영역은 같은 뷰를 보이는데 매번 같은 요청을 주고받고x100)

<br>

### Ajax

기존 웹 서비스의 단점 보완으로 튀어나온 개념이다. 서버에서 첫 화면을 그려주는 것은 같지만 그 이후 ajax를 통해 데이터만 받아와 렌더링하는 방식이다.

이 방식은 추가적으로 Javascript 코드가 작성 되는데 다음과 같다.

```html
...
<a href="/">main</a>
<a id="other" href="">ann-main</a>
<div>
	<h1>내용들ㅋㅎ</h1>
</div>
...

<script>
	(function () {
		document.getElementById("other").addEventListener("click", function (e) {
			e.preventDefault();
			render("/other.json");
		});

		function render(url) {
			ajaxGet(url, function (res) {
				const data = JSON.parse(res);
				document.querySelector("div").innerHTML = `<b>${data}</b>`;
			});
		}

		function ajaxGet(url, cb) {
			url = ur || "";
			cb = cb || function () {};
			const xhr = new XMLHttpRequest();
			xhr.open("get", url, true);
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			const that = this;
			xhr.onload = function () {
				cb.apply(that, [xhr.response]);
			};
			xhr.send(null);
		}
	})();
</script>
```

앵커를 클릭하면 데이터를 요청하여 받는 응답으로 html을 구성하며 div의 내부로 넣어주는 방식이다.

이 방법은 필요한 부분만 새로 그리기에 불필요한 낭비가 없고 사용자 경험 측면에서도 좀 더 부드러운 감각을 제공한다.

하지만 history 관리가 되지 않는다. 뒤로 가기나 앞으로 가기를 선택하면 브라우저는 앵커를 눌렀을 때의 상태와 다른 행동을 보이게 된다.

또 앵커를 눌렀을 때, 어느 액션을 취하는지 추적이 어렵다. 기존의 방식은 href로 가야할 주소가 있었지만 현재는 빈 문자열만 있다.

마지막으로 Javascript 코드가 길어졌다.

사실상 ajax 방법도 하나의 페이지를 제공한다는 점에서 SPA라고 부를 수는 있지만.. 뭔가 나사가 하나 빠져있는 느낌을 지울 수 없다.

<br>

### SPA

모든 단점을 보완한 새로운 개념이다.

history API를 통해 이전 웹처럼 논리적인 페이지 구분을 하고 그 사이를 왔다리갔다리 할 수 있다. 여기서 등장하는 hash란 개념은 URI에서 `#`로 시작하는 문자열을 의미한다. `Fragment Identifier`라고 함.

구현

```html
...
<a href="#">main</a>
<a href="#other1">other1</a>
<a href="#other2">other2</a>
<section>
	<h1>main-page</h1>
</section>
...

<script>
	(function () {
		const section = document.querySelector("section");
		const mainHtml = section.innerHTML;
		const routerMap = {
			"": function () {
				section.innerHTML = mainHtml;
			},
			other1: function () {
				render("other1.json");
			},
			other2: function () {
				render("other2.json");
			},
		};

		function pageNotFound() {
			section.innerHTML = "nope!";
		}

		function router() {
			const hashValue = location.hash.replace("#", "");
			(routerMap[hashValue] ?? pageNotFound)();
		}

		function render(url) {
			// 이 하 동 문
		}

		function ajaxGet(url, cb) {
			// 마 찬 가 지
		}

		window.addEventListener("hashChange", router);
		window.addEventListener("DOMContentLoaded", router);
	})();
</script>
```

해시 값이 변경되는 시점에 `on hashchange`로 해시 값에 매핑된 함수를 실행토록 하여 라우팅이 되는 방식이다. 물론 앵커에도 해시를 넣어 명시적으로 확인이 가능하다.

이렇게 되므로 히스토리를 관리할 수 있게 되고 논리적인 페이지 분리가 가능해서 훨~~씬 SPA스럽다.

Javascript 코드는 많아지긴 했다..만 육안으로 봐도 관리하기 쉽게 구성되어 있기에 관리에 큰 어려움은 없다.

- **DOMContentLoaded 이벤트 발생 시점서 router 실행 이유?**

  해시 값을 가진 URL을 브라우저에서 요청하는 경우 라우팅이 되도록 하기 위함.

  예를 들면 `http://localhost:3000/#other1`를 브라우저 주소창에 입력하고 엔터를 입력하거나 새로고침을 수행하면 서버로 `http://localhost:3000`을 요청하게 된다.  
  그리고 페이지의 dom content가 로딩된 시점에 라우팅을 실행하여 해당 해시 값에 맞는 페이지를 클라이언트 사이드에서 렌더링하게 된다.  
  한마디로 기능의 일관성을 지키기 위한 방법.

<br>

### SPA 라우팅 원리

URI는 다음으로 구성된다.

- URI Scheme
- 사용자 정보
- hostname
- port
- path
- query parameter(string)
- fragment identifier

fragment identifier가 `#`라고 했었다. 리소스에 대한 좀 더 자세한 부분을 특정할 때 이용한다.

이 성격을 기억해서 다음 사항들을 잘 기억해두자

<br>

**hash는 변경해도 서버에 페이지가 갱신되지 않음**

브라우저에서 URI의 hostname, path, query string을 변경하면 해당 주소로 서버에 요청을 보내 응답을 받고 화면을 갱신한다. 하지만 fragment identifier는 변경되어도 화면을 갱신하지 않는다.  
hash는 문서에서 부가적인 자원에 대한 참조를 가리키기 위해 만들어졌기 때문이다. 어디까지나 문서 내의 참조이기 때문.

이 규칙을 이용해 SPA는 라우팅을 수행한다.

<br>

**hash는 변경 시 history에 기록된다**

hash를 변경하면 history에 쌓인다.

뒤로 가기나 앞으로 가기를 누르면 기억된 이전 상태에 접근하는 것이다.

이 규칙은 SPA의 history를 관리하는데 이용된다.

<br>

**hashchange & popstate event**

브라우저서 hash 변경 시 hashchange, popstate 이벤트가 발생한다.  
hashchange는 말 그대로의 의미이고 popstate는 history entry가 변경된 경우 발생하는 이벤트이다.

참고로 popstate는 HTML5 스펙이기에 하위 브라우저에선 작동하지 않고 hashchange는 ie8 이상 브라우저에서 동작한다.

사용 방법은 간단하다. 앞선 SPA 예시 코드의 `window.addEventListener('hashchange', router);` 처럼 이벤트 핸들러를 붙여 사용하면 된다.

<br>

**_왜 여기선 if else로 라우팅을 하지 않았을까?_**

if else는 자체만으로 복잡도가 높고 자유도가 높다. 이 말은 코드가 점점 관리되기 힘든 형태로 발전할 여지가 있다는 것.

한번 체감해봐라

```js
function router() {
	if (location.hash === "other1") {
		render("other1.json");
	} else if (location.hash === "other2") {
		render("other2.json");
	} else {
		pageNotFound();
	}
}
```

물론 지금이야 괜찮아 보이지만 추후 render 부분은 템플릿을 만들며 데이터와 이벤트를 바인딩해야 할 수 있는데 그 경우를 생각해보면 벌써부터 아찔하다.

그래서 이 예제에선 Map이란 자료구조를 사용했다. hash와 그에 대한 값으로 수행할 일을 매핑하여 필요할 때 가져와서 쓰게끔.

코드는 항상 유지보수를 생각해서 짜여져야 좋다. if else는 그런 부분에 대한 고려가 전혀 안돼있다. 모든 기능을 한번에 퉁쳐버리니까

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

https://www.reimaginer.me/entry/spa-and-spa-routing

https://developer.mozilla.org/en-US/docs/Glossary/SPA
