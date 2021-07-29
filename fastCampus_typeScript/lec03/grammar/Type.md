## 타입

값의 유형을 나타내는 것.

- JS와 TS의 타입은 어떻게 다를까?

  - **JS**

  ```javascript
  function addAge(age) {
  	return age + 1;
  }
  let age = addAge("30");
  console.log(age); // 301
  ```

  - 위 실행 결과를 보면 알겠지만 JS의 경우는 데이터가 변수에 들어가는 순간 타입을 결정하게 되는 메커니즘이다(느슨한 관리체계)

  - 하지만 이 유연함이 편리할 때도 있는데 일장일단이라고 버그를 발생시키기 쉬운 상황도 만들 수 있다.

  ```javascript
  // 그래서 JS개발자는 방어코드를 항상 짜넣어야하기도 함
  function addAge(age) {
  	if (typeof age === "number") {
  		return age + 1;
  	} else {
  		throw "ERROR!!";
  	}
  }
  ```

  _신경써야할 부분이 많다는거~_

    <br>

  - **TS**

  ```typescript
  function addAge(age: number): number {
  	return age + 1;
  }
  let age: number = addAge(30);
  console.log(age); // 31
  ```

  - TS는 addAge('30'); 라고 선언한다면 바로 에러라고 표시해준다  
    JS로 인한 불안정성을 TS가 해결!
