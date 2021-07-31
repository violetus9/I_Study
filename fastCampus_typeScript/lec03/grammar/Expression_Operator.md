## 식(연산)

문법이라는 개념은 식과 문으로 크게 나눌 수 있다.

- 식: 하나의 값으로 수렴, 식 = 값, 끝을 세미콜론으로 구분하자
- 문: 값으로 환원되지 않는 요소들, 세미콜론으로 끝내지 않는다  
  _(써도 되긴 함.. 근데 아무 의미 없음ㅎ)_

  <br>

- 구조 분해 할당(연산자)

  ```javascript
  const colors = ["red", "yellow", "black"];
  const Colors = {
  	blue: "blue",
  	green: "green",
  	white: "white",
  };

  const yellow = colors[1];

  // 매번 빼기 불편.. 그래서 나왔습니다~ ES6추가
  const [red, yellow, black] = colors;
  const { white, green } = Colors;
  ```

<br>

- 비교 연산자

  값으로 환원 되지만 그 값 자체가 특별한 값으로 수렴케끔 동작

  - 동등: ==
  - 일치: ===

    ```javascript
    let a = 10;
    let b = "10";

    console.log(a == b); // true, 지양합시다
    console.log(a === b); // false
    ```

<br>

- 삼항 연산자

  ```javascript
  a = a === b ? 0 : 1;
  ```

<br>

- typeof 연산자

  JS서 방어코드 작성시 많이 쓰임, TS는 굳이 쓰지 않음

<br>

- 연산자간 우선순위는 있다  
  _하지만 그것에 얽매이지말고 괄호로 명확하게 지정해주도록 하자, 그걸 일일히 외는 사람도 많이 없고 코드는 가독성이 좋아야 하니까_

<br>

- **괄호의 특별한 용법**

  값으로 만들고 싶은 것이 있을 떄 괄호로 감싸 만들 수 있다

  ```javascript
  function foo() {
  	console.log("이건 문이다, 세미콜론 없어");
  }

  (function Foo() {
  	console.log("이건 값이다, 변수에 넣을 수 있다");
  });
  ```

  하지만 모든 것이 괄호로 감싼다고 값이 되는 것은 아니다  
   if, for같은 애들 생각해보자
