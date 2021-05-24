## 변수, 호이스팅, TDZ(Temporal Dead Zone)   

* var   
  - 함수 스코프
  - 생성 과정
  1. 선언과 초기화
  2. 할당
  ```javaScript
  console.log(log); // undefined
  name = 'Someone';

  /*
  var name; 이 최상단에 선언된 것과 같이 행동한다(hoisting)   
  선언은 호이스팅되지만 할당은 되지 않음
  */
  ```
  
  *hoisting* : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동, 스코프 단위로 일어남


* let   
  - 블록 스코프
  - 생성 과정
  1. 선언   : 호이스팅 된다
  2. 초기화 : 선언될 때 된다(ReferenceError)
  3. 할당
  ```javaScript
  /*                    */
  /* Temporal Dead Zone */
  /*                    */
  console.log(name);  // ReferenceError
  let name = 'Someone';
  ```
  *TDZ* : 할당 되기 전에는 사용할 수 없음

* const   
  - 블록 스코프
  - 생성 과정
  1. 선언 + 초기화 + 할당 : (재할당 할 수 없음)
  ```javaScript
  const name;
  name = 'addName';
  /*
  Uncaught SyntaxError: Missing initializer in const declararion
  */
  ```

#### 결론 : 웬만하면 var 사용을 지양하쟈~^^

<br>

--------------------











<br><br><br><br><br>
--------------------------

