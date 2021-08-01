## 라이프 사이클과 스코프

JS 스코프는 세가지: 전역, 함수, 블록 스코프 존재

- 스코프

  ```ts
  // 전역
  let hi = "Hi";

  // 함수
  function foo() {
  	let x = 10;

  	function bar() {
  		let y = 10;
  	}
  }

  // 블럭
  if (x === 10) {
  	let x = 100;

  	console.log(x);
  }

  foo();
  console.log(x); // x is not defined
  ```

  - 함수로 `진입`시 스코프가 생기며 변수등의 것들이 생을 같이한다
  - foo 함수 내부에선 전역 스코프에 접근이 가능하다: 스코프는 안에서 밖으로 중첩이 가능하다

<br>

- 호이스팅

  스코프 생성시 스코프 안에 만들어야 할 함수난 변수들을 미리 만들어 주는 것

  - 함수문은 호출이 가능하나 함수식은 호출이 불가능!

  ```ts
  bar();
  zoo(); // Cannot access 'zoo' before initialization

  function bar() {
  	console.log("bbaarr");
  }
  const zoo = function () {
  	console.log("yop");
  };
  ```

  웬만하면 변수나 함수는 최상단에 선언 후 사용하는 습관을 들이자
