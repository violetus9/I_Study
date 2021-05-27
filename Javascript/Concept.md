# 자바스크립트의 필수 개념들

1. [변수,호이스팅,TDZ](#변수,-호이스팅,-TDZ)   
2. [생성자함수](#생성자-함수)


<br>
<br>

------------
------------


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

##### [목록보기](#자바스크립트의-필수-개념들)
----------------------

## 생성자 함수

회원이나 상품같은 여러개의 객체를 생성하고자 할 때!

  ```javaScript

  function User(name, age){
    // this = {}
    this.name = name;
    this.age = age;
    // return this;

    // 주석 부분은 실제로 코드에 없어, new를 쓴 순간 내부적인 구동이 저렇다는거야
  }

  let user1 = new User('A', 30);
  let user2 = new User('B', 20);
  let user3 = new User('C', 10);

  ```
  * 첫 글자는 대문자로
  * new 를 이용한 호출
    - new를 붙이지 않으면 함수 실행뿐이고 그 값이 해당 변수로 들어가는 개념임
    
<br>
   
메서드를 추가해보자

  ```javaScript

  function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
      console.log(this.name);
    }
  }

  let user = new User('N', 30);
  user.sayName(); // 'N'

  ```

##### [목록보기](#자바스크립트의-필수-개념들)
----------------------




<br><br><br><br><br>
--------------------------

