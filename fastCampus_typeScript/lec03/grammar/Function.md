## 함수

코드의 묶음이라고 볼 수 이씀

일반적으로 JS에서 함수 호출은 세가지가 있다.

1. 일반적 괄호 호출
2. call method
3. apply method

<br>

- **익명 함수**

  ```ts
  function () {
    console.log('이 함수는 익명함수, 호출할 수 없다');
  }

  const myFn = function () {
  	return 100;
  };
  ```

  반드시 변수에 넣어야 사용할 수 있다. 함수는 값이기 때문 = `식`

<br>

- **IIFE**

  ```ts
  (function () {
  	console.log("IIFE");
  })();
  ```

  한번만 실행해야하는 경우 쓴다.

<br>

- **함수의 인자**

  js에서 함수는 생성시 1개의 인자를 받도록 설계되어도 전달하는 쪽에선 여러개의 인자를 보낼 수 있다.  
  받는 쪽에선 두가지의 상황을 예측해 볼 수 있겠다.

  1. 인자가 넘어오지 않는 경우

  2. 인자가 더 많이 넘어온 경우(가변 인자)

  - 가변 인자를 이용한 유연한 함수(arguments: 유사 배열)

    호출 당시의 인자가 모두 들어있는 유사배열 arguments가 있다.

    ```js
    function sum() {
    	let s = 0;
    	for (let i = 0; i < arguments.length; i++) {
    		s = s + arguments[i];
    	}
    	return s;
    }
    ```

    하지만 문제가 있다. 내부코드는 외부에서 보이지 않는 다는 것. 단순히 사용자는 함수의 시그니처(겉모습)을 보고 정보를 충분히 읽어낼 수 없다. _일일히 까봐야 한다는 것..퇴근은 해야지.._

    <br>

    **전개 연산자**  
    arguments의 모호성을 개선하려고 나왔다고 생각하자

    ```js
    function sum(...args) {
    	let s = 0;
    	for (let i = 0; i < args.length; i++) {
    		s = s + args[i];
    	}
    	return s;
    }
    ```

    추가로 필수 전달 정보를 명시할 수도 있다. 다음은 a, b는 필수라고 명시한 것.

    ```js
    function sum(a, b, ...args) {
    	// same
    }
    ```

<br>

- **call, apply**

  공통점은 첫 번째 인자로 context 객체를 받는다. context라는 것은 뒤에 다루기 때문에 우선 null을 넘겨줄 것임.  
  그 다음으로 인자를 넘겨주는데 여기서 두 메서드의 차이가 있다.

  ```js
  sum.call(null, 10, 20, 30);
  sum.apply(null, [10, 20, 30]);
  ```

  그렇다면 두 인자(그냥 넘김 or 배열 넘김)는 무슨 차이가 있을까?  
  여러 다른 테크닉이 있겠지만 여기선 코드와 데이터의 차이라고 볼 수 있음. call같은 경우 10, 20, 30 에서 추가한다면 직접 40을 추가하지만 apply는 배열 자체를 데이터로 취급해 변수에 할당하는 방식으로 조작이 가능하다.

  _따로 찾아서 공부할것_

<br>

- **Generator**

  최초 호출시 실행되지 않고 실행 준비상태, 객체를 반환한다.  
  해당 객체는 함수를 실행할 도구를 담은 객체이다.

  ```js
  function* gen() {
  	yield 10;
  	yield 20;
  	return 30;
  }

  const g = gen();

  // 호출
  g.next(); // 10
  g.next(); // 20
  g.next(); // 30
  ```

  이런게 있다~ 정도만 알아두자

<br>

- **비동기 함수**

  Promise, async, await
