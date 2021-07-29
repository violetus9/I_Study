## 값

기본 자료형이 있다, 코드가 아닌 데이터로의 규격

- JS 기본 자료형 (Primitive)

  - Boolean
  - Null
  - Undefined
  - Number
  - String
  - Symbol (ES6)

  > 기본 자료형 외 거의 모든 데이터 타입은 Object라고 보면 돼

<br>

- TS 기본 자료형

  - Boolean
  - Number
  - String
  - Array
  - Tuple
  - Enum
  - Any
  - Void
  - Null & Undefined
  - Never
  - Object (객체도 값으로 취급한다는거~)

<br>

- Enum?

  - JS

  ```javascript
  const Color = {
  	Red: 1,
  	Blue: 2,
  	Green: 3,
  };
  Color.Red;
  ```

  - TS

  ```typescript
  enum Color {
  	Red,
  	Blue,
  	Green,
  }
  Color.Red;
  ```

  - 무슨 차이가 있을까

    JS는 객체이고 TS의 Enum은 코드이기에 데이터 통신하는 부분에 있어서 변환이 까다로울 수 있음. 그렇기에 Enum이라는 타입이 코드상 존재하는지 통신이 이루어지는지를 잘 판단해서 Enum쓸지 Object쓸지 판단하자

<br>

- JS에서 웬만한 것들은 값이라 불린다. 값은 변수에 넣을 수 있다. 향후 공부에서 이 개념을 확장시켜 여러 테크닉을 다루게 될 테니 반복학습!
