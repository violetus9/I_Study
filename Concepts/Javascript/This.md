## this

자바스크립트는 스크립트 언어. 인터프리터에 의해 줄 단위로 읽혀 해석당하고 실행된다. 이 때, 인터프리터에 의해 현재 실행되는 자바스크립트의 환경을 실행 컨텍스트라고 한다. 이 실행 컨텍스트는 스택으로 관리되며 실행 시점에 자주 변경되는 실행 컨텍스트를 this가 가리키게 된다.

그러니까 this라는 것은 실행 컨텍스트를 가리키는 것.

Function.prototype 객체의 메서드인 call, apply, bind를 통해 명시적으로 this를 바인딩할 수도 있다.

<br>

**전역 context**

전역 실행 컨텍스트에서 this는 엄격 여부에 상관 없이 전역 객체를 참조한다.

```js
/* 웹 브라우저상 window 객체는 전역 객체 */
console.log(this === window); // true

a = 20;
console.log(window.a); // 20

this.b = "bbb";
console.log(`${window.b} and ${b}`); // bbb and bbb
```

<br>

**함수 context**

함수 내부 this의 값은 함수를 호출한 방법에 의해 좌우된다.

- 단순 호출

  엄격 모드가 아니며 this의 값이 호출에 의해 설정되지 않는다.

  ```js
  function f1() {
  	return this;
  }

  // browser
  f1() === window; // true

  // node.js
  f1() === global; // true
  ```

  하지만 엄격 모드상 this는 실행 컨텍스트에 진입하여 설정되는 값을 유지한다. 따라서 다음 예시에서 this는 undefined 인 것..

  ```js
  function f2() {
  	"use strict";
  	return this;
  }

  f2() === undefined; // true
  ```

  <br>

- call, apply

  this 값을 다른 문맥으로 넘기고 싶다면 call, apply 메서드를 사용한다.

  _ex1_

  ```js
  // call, apply의 첫 인자로 객체가 전달될 수 있고 this는 그 객체에 묶이게 된다.
  const obj = { a: "Custom" };

  // 변수를 선언하고 변수에 프로퍼티로 전역 window를 할당
  const a = "Global";

  function whatsThis() {
  	return this.a; // 함수 호출 방식에 따라 달라지게 된다.
  }

  whatsThis(); // this는 'Global, 함수 내 설정된 것이 아니므로 global/window 객체로 초기값을 설정한다.
  whatsThis.call(obj); // this는 'Custom', 함수 내에서 obj로 설정된다.
  whatsThis.apply(obj); // this는 'Custom', 위와 같다.
  ```

  _ex2_

  ```js
  function add(c, d) {
  	return this.a + this.b + c + d;
  }

  const o = { a: 1, b: 3 };

  // o 는 this로 사용할 객체, 이어지는 인자는 함수 호출 시 인수로 전달.
  add.call(o, 5, 7); // 16

  // 마찬가지로 첫 인자 o는 this로 쓸 객체, 두 번째 인자는 함수 호출 시 인수로 사용될 배열.
  add.apply(o, [10, 20]); // 34
  ```

<br>

**bind method**

```js
function f() {
	return this.a;
}

const g = f.bind({ a: "azerty" });
console.log(g()); // azerty

const h = g.bind({ a: "yoo" }); // bind는 한 번만 동작한다.
console.log(h()); // azerty

const o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

ES5에서 `Function.prototype.bind`가 도입되었다. f.bind(someObject)를 호출하면 위 함수 f와 같은 코드와 범위를 가지고, this는 원본 함수를 가진 새로운 함수를 생성한다. 새 함수의 this는 호출 방식과 상관 없이 영구적으로 bind()의 첫 매개변수로 고정된다.

<br>

**화살표 함수**

this는 자신을 감싼 정적인 범위이며 전역 코드에선 전역 객체를 가리킨다.

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

주의할 점은 화살표 함수를 call, bind, apply를 사용해 호출할 때, this의 값을 정해주더라도 무시한다는 것이다.

사용할 매개변수를 정해주는 것은 상관 없으나 첫 매개변수(thisArg)는 null을 지정해야 한다.

<br>

한 예를 들어봄

```js
// 객체로서 메서드 호출
const obj = { func: foo };
console.log(obj.func() === globalObject); // true

// call 쓴 this 설정 시도
console.log(foo.call(obj) === globalObject); // true

// bind 쓴 this 설정 시도
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

위에서 어떤 방법을 쓰더라도 foo의 this는 생성 시점의 것으로 설정된다. 다른 함수 내에서 생성된 화살표 함수도 동일하게 적용된다.

this는 싸여진 렉시컬 컨텍스트로 유지된다.

```js
// this를 반환하는 메소드 bar를 갖는 obj를 생성합니다.
// 반환된 함수는 화살표 함수로 생성되었으므로,
// this는 감싸진 함수의 this로 영구적으로 묶입니다.
// bar의 값은 호출에서 설정될 수 있으며, 이는 반환된 함수의 값을 설정하는 것입니다.
const obj = {
	bar: function () {
		const x = () => this;
		return x;
	},
};

// obj의 메소드로써 bar를 호출하고, this를 obj로 설정
// 반환된 함수로의 참조를 fn에 할당
const fn = obj.bar();

// this 설정 없이 fn을 호출하면,
// 기본값으로 global 객체 또는 엄격 모드에서는 undefined
console.log(fn() === obj); // true

// 호출 없이 obj의 메소드를 참조한다면 주의하세요.
const fn2 = obj.bar;
// 화살표 함수의 this를 bar 메소드 내부에서 호출하면
// fn2의 this를 따르므로 window를 반환할것입니다.
console.log(fn2()() == window); // true
```

obj.bar에 할당된 익명 함수(A라 칭함)는 화살표 함수로 생성된 다른 함수(B라 칭함)를 반환한다.

결과로, 함수 B가 호출될 때 B의 this는 영구적으로 obj.bar(A의) this로 설정된다.

위 예시에선 B의 this는 A의 this인 obj로 설정된다. 그러므로 일반적으로 this를 undefined나 global 객체로 설정하는 방식으로 호출해도 obj의 설정은 유지된다.

<br>

**객체의 메서드**

함수를 어느 객체의 메서드로 호출 시 this의 값은 그 객체를 사용한다.

```js
const o = {
	prop: 30,
	f: function () {
		return this.prop;
	},
};

console.log(o.f()); // 30
```

o.f()를 실행할 때, o 객체가 함수 내부 this와 연결되는 모습

다음의 예시도 같은 말이다.

```js
const o = { prop: 30 };
function independent() {
	return this.prop;
}

o.f = independent;
console.log(o.f()); // 30
```

결국 하고싶은 말은, 함수가 o의 멤버 f로부터 호출 되었다는 사실만이 중요하다는 것.

<br>

**객체의 prototype chain**

위와 같다. 객체의 프로토타입 체인 어딘가서 정의한 메서드도 마찬가지이다. 메서드가 어느 객체의 프로토타입 체인에 존재하면 this의 값은 그 객체가 메서드를 가진 것 처럼 설정된다.

```js
const o = {
	f: function () {
		return this.a + this.b;
	},
};
const p = Object.create(o);
p.a = 1;
p.b = 3;

console.log(p.f()); // 4
```

f 속성을 가지지 않은 변수 p가 할당된 객체는 프로토타입으로 상속받는다. p.f를 찾아 참조하기 시작한다. 함수 내부의 this는 p처럼 나타나는 객체 값을 취한다.

즉, f는 p의 메서드로 호출된 이후 this는 p를 나타낸다.

<br>

**접근자, 설정자의 this**

함수를 접근자, 설정자에서 호출해도 동일하다. 접근자나 설정자로 사용하는 함수의 this는 접근하거나 설정하는 속성을 가진 객체로 묶인다.

```js
function sum() {
	return this.a + this.b + this.c;
}

const o = {
	a: 1,
	b: 2,
	c: 3,
	get average() {
		return (this.a + this.b + this.c) / 3;
	},
};

Object.defineProperty(o, "sum", {
	get: sum,
	enumerable: true,
	configurable: true,
});

console.log(o.average, o.sum); // 2, 6
```

<br>

**생성자**

함수를 new 키워드와 함께 생성자로 사용하면 this는 새로 생긴 객체에 묶인다.

```js
function C() {
	this.a = 20;
}

const o = new C();
console.log(o.a); // 20

function C2() {
	this.a = 22;
	return { a: 39 };
}

o = new C2();
console.log(o.a); // 39
```

<br>

**DOM Event**

함수를 이벤트 처리기로 사용 시 this는 이벤트를 발생한 요소로 설정된다.

_일부 브라우저는 addEventListener() 외의 다른 방법으로 추가한 부분에 대해선 이 규칙을 따르지 않는대_

```js
// 처리기로 호출하면 관련 객체를 파랗게 만듦
function bluify(e) {
	// 언제나 true
	console.log(this === e.currentTarget);
	// currentTarget과 target이 같은 객체면 true
	console.log(this === e.target);
	this.style.backgroundColor = "#A5D9F3";
}

// 문서 내 모든 요소의 목록
var elements = document.getElementsByTagName("*");

// 어떤 요소를 클릭하면 파랗게 변하도록
// bluify를 클릭 처리기로 등록
for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", bluify, false);
}
```

<br>

**inline event handler**

this는 배치된 DOM 요소로 설정된다.

```html
<button onclick="alert(this.tagName.toLowerCase());">this 표시</button>
```

위 alert는 button을 보여준다.

<br>

```html
<button onclick="alert((function() { return this; })())">내부 this 표시</button>
```

위의 경우, 내부 함수의 this는 정해지지 않았다. 전역 window를 반환한다.
