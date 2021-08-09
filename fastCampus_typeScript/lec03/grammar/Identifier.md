## 식별자

식별자는 코드의 일부이나 문자열은 데이터이기 때문에 엄연히 둘은 다르다.  
JS에서 식별자를 문자열로 변환할 수는 없지만 문자열을 분석해 식별자로 사용 가능하다.  
_(변수명, 함수명, 속성들을 데이터로 변환할 수는 없다는 것)_

- 문자열을 식별자로

  ```javascript
  const o = {
  	age: 10,
  	["myName"]: "김",
  	["123some info"]: "asdf",
  };

  o.myName;
  o["123some info"];
  ```

  이 경우 식별자 명명 규칙을 따르지 않아도 된다  
  <br>

- 몇가지 관습

  ```javascript
  // 상수는 대문자로 명명하자
  const AGE = 10;

  // 표기법을 따르도록 하고 일관성 있게 지어주자
  function cammelCase() {}
  function snake_case() {}
  ```
