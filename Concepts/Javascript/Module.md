## Module

프로그램의 필요에 따라 가져올 수 있는 기능 묶음
모듈 사용을 가능케 하는 많은 라이브러리와 프레임워크가 있다
Webpack, Babel 또한 모듈 기반 시스템이라고 볼 수 있다

<br>

### 모듈의 핵심 기능

- 항상 엄격 모드로 실행 (use strict)
- 모듈 레벨 스코프
- 최초 호출시 단 한번만 평가

모듈 기능을 사용하려면 먼저 모듈을 export 해야한다.

**function, var, let, const, class를 export 할 수 있다.**

최상위 항목에서 실행되며 하위 요소(함수 내부)에선 실행할 수 없다

```jsx
/* 단일 항목 export */
export const name = "square";

export function draw(sth) {}

/* 다중 항목 export */
export { name, draw };
```

<br>

모듈을 사용할 스크립트는 다음과 같이 import를 해줘야 한다

```jsx
import { name, draw } from "./modules.js";
```

_여기서 주의할 점은 다른 몇몇 모듈 시스템과 달리 확장명을 생략할 수 없다는 것, 앞 슬래시를 빼먹어선 안된다는 것._

<br>

별칭을 지정할 수도 있다.

```jsx
import { default as randomSth } from "./modules.js";
import randomSth from "./modules.js";
```

_아래는 위 코드를 단축한 것_

<br>

만약 import 해온 모듈들에 이름이 겹치는 부분이 있다면 사용될 명칭들에 대해 고유한 별칭을 지정하자

위와같이 모듈을 가져오는 것은 문제를 발생시키지는 않는다. 하지만 규모가 커질수록 지저분하고 길어질 수 있다.

**모듈 객체를 생성해보자**

해당 모듈은 module.js 내의 사용할 수 있는 모든 export를 가져온다. 또한 그것들을 Module객체의 멤버로 만들어준다.

```jsx
import * as Module from "./module.js";
import * as Circle from "./circle.js";

Module.function1();
Module.function2();
```

<br>

### Applying the module to HTML

모든 모듈의 상속을 받은 메인 모듈을 HTML에 적용해야한다.

```html
<script type="module" src="main.js"></script>
```

일반적인 스크립트 적용과 유사하나 타입에 모듈임을 명시해주자, 그러므로인해 가져온 스크립트를 최상위 모듈로 작동시키게 된다.

가령 html의 script내용으로 import, export를 사용하게 된다면 반드시 타입을 지정해줘야한다.

<br>

**nomodule**

모듈 타입을 지원하지 않는 브라우저에서 예외 비슷하게 처리해 줄 수 있다.

```html
<script type="module">
	alert("modern");
</script>

<script nomodule>
	alert("pass");
	alert("old");
</script>
```

type=module을 해석할 수 있는 브라우저는 nomodule 타입의 스크립트는 넘어간다. 오래된 브라우저를 사용하고 있다면 type=module이 붙은 스크립트는 무시한다. 대신 nomodule이 선언된 스크립트의 "old"라는 경고창을 보여준다.

<br>

### Modules and classes

코드에서 충돌을 피하기 위한 수단으로, 모듈이 이미 객체 지향적으로 작성된 경우 유용하다.

```jsx
/* Circle.js */
class Circle {
	constructor(sth.....) {

	}
	draw() {

	}
	...
}

export { Circle };
```

```jsx
/* main.js */
import { Circle } from './Circle.js';

let circle1 = new Circle(sth..);
circle1.draw();
...
```

<br>

### Dynamic module loading

필요할 때만 모듈을 동적으로 불러올 수 있다.

```jsx
import("/modules/myModule.js").then((module) => {
	// code here
});
```

모듈 경로를 매개변수로 전달하면, 모듈 객체를 사용하여 promise를 반환한다. 그렇게 되면 해당 객체의 export에 접근이 가능하다.

Promise fulfillment는 모듈 객체를 반환하기에 클래스는 객체의 하위 기능으로 만들어진다. 따라서 Module.Square(sth...)과 같이 Module을 사용하여 생성자에 접근해야 한다.

```jsx
squareBtn.addEventListener("click", () => {
	import("/js-examples/modules/dynamic-module-imports/modules/square.js").then(
		(Module) => {
			let square1 = new Module.Square(
				myCanvas.ctx,
				myCanvas.listId,
				50,
				50,
				100,
				"blue"
			);
			square1.draw();
			square1.reportArea();
			square1.reportPerimeter();
		}
	);
});
```

_사용 예시_

<br>

<br>

<br>

<br>

<br>

### 용어

**CommonJS:**

Node.js 서버를 위해 만들어진 모듈 시스템
