# 자바스크립트의 필수 개념들

1. [변수, 호이스팅, TDZ](#변수,-호이스팅,-TDZ)   
2. [생성자함수](#생성자-함수)   
3. [Object methods, Computed property](#Object-methods,-Computed-property)   
4. [Symbol](#Symbol)   
5. [Number, Math](#Number,-Math-method)   
6. [Destructuring assignment](#Destructuring-assignment)   
7. [Closure](#Closure)   


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

## Object methods, Computed property

* Computed property
  ```javaScript
  let a = 'age';
  const user = {
    name: 'ABC',
    [a]: 30,   // age : 30 (계산된 프로퍼티)
    [1 + 4]: 5,
    ['he'+'llo'] : 'hello'  // 이렇게 넣는 것도 가능
  }

  // 어느 것이 key가 될지 모르는 객체에 유용하다
  function makeObj(key, val){
    return {
      [key]: val
    };
  }
  const obj = makeObj('오', '굳~')  // {오: '굳~'}
  ```
* Object Methods
  * Object.assign() : 객체 복제
    ```javaScript
    const user = {
      name: 'Mike',
      age: 30
    }
    const clonUser = user;  // 참조일 뿐, 복제는 되지 않는다

    // 복제를 원한다면
    const newUser = Object.assign({기본객체}, user);  // 기본객체 + user
    Object.assign(user, 객체1, 객체2);  // user + 객체1, user + 객체2
    ```
  * Object.keys() : 키 **배열** 반환
  * Object.values() : 값 **배열** 반환
  * Object.entries() : 키/값 **배열**로 반환(배열 속 배열)
  * Object.fromEntries() : 키/값 배열을 객체로

##### [목록보기](#자바스크립트의-필수-개념들)
----------------------

## Symbol

* property key : 문자형   
또한 객체 property key는 문자형으로 접근이 가능
  ```javaScript
  const obj = {
    1: '1임',
    false: '거짓'
  }
  Object.keys(obj)  // ['1', 'false']
  obj['1']          // '1임'
  ```
  
* Symbol
  ```javaScript
  const a = Symbol(); // new를 붙이지 않고 생성, 유일한 식별자를 만들 때 사용
  ```

* 유일성을 보장한다
  ```javaScript
  const id = Symbol('id');
  const id2 = Symbol('id');

  id  // Symbol(id)
  id2 // Symbol(id)
  id === id2    // false
  id == id2     // false
  ```

* property key : 심볼형
  ```javaScript
  const id = Symbol('id');
  const user = {
    name: 'YS',
    [id]: 'myid'
  }
  // Symbol로 만든 property를 가진 key가 존재함
  user  // {name: 'YS', Symbol(id): 'myid'}
  user[id]  // 'myid'

  // Object method 접근은 Symbol을 감지하지 않는다
  Object.keys(user);  // ['name']
  ```   
  ##### 원본객체를 손상시키지 않는 선에서 개성을 부여코자 할 때 사용한다.
  ##### Symbol은 기본적으로 유일성을 보장받는다. 그렇기에 없으면 만들고, 있으면 가져온다.

* Symbol.for() : 전역 Symbol   
  하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
  ```javaScript
  const id1 = Symbol.for('id');
  const id2 = Symbol.for('id');
  id1 === id2;  // true, 코드 어디서든 사용 가능
  Symbol.keyFor(id1);   // 'id', 이름을 얻을 수도 있다
  
  // 만일 전역Symbol이 아닌 경우 keyFor는 사용할 수 없다.
  const id = Symbol('id 입니다');
  id.description;   // 'id 입니다', description을 이용하자.
  ```

* 활용
  ```javaScript
  // 타 개발자가 만든 객체
  const user = {
    name: 'Mike',
    age: 30
  };

  // 나의 작업
  user.showName = function(){};
  // user's showName is function(){}., 원치않는 문구가 사용자에게 보이게 된다.
  // Symbol을 활용하자
  const showName = Symbol('show name');
  user[showName] = function(){
    console.log(this.name);
  };  // for in문에 감지되지 않는다!, name과 age만 출력
  user[showName](); // 'Mike', 내 작업물도 확인 가능하다

  // 사용자 접속 시 보이는 문구(타 개발자의 작업물)
  for (let key in user) {
    console.log(`user's ${key} is ${user[key]}.`);
  }
  ```

##### [목록보기](#자바스크립트의-필수-개념들)
----------------------

## Destructuring assignment

배열이나 객체의 속성 분해 후 값을 변수에 담는 표현식

  ```javaScript
  let alp = ['a', 'b', 'c'];
  let [al1, al2, al3, al4, al5=5] = alp;
  console.log(al2);   // 'b'
  console.log(al4);   // undefined
  console.log(al5);   // 5
  ```

* 값의 바꿔치기도 가능하다
  ```javaScript
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  ```

* 객체 구조 분해   
기본적으로 배열 구조 분해와 활용이 같다
  * 다른점: 할당 변수(key)의 순서는 중요하지 않음

##### [목록보기](#자바스크립트의-필수-개념들)
----------------------

## Closure

* Lexical Environment
  ```javaScript
  // 코드가 실행되면 Lexical 환경에 one과 addOne이 등록
  // one: 초기화 X, 반면 addOne은 사용 가능한 상태
  let one;
  // one: undefined (사용은 가능)
  one = 1;
  // one: 1
  function addOne(n) {
    console.log(one + n);
  }
  addOne(5);
  // 새로운 Lexical 환경 생성, n: 5
  // 함수가 넘겨받은 매개변수와 지역변수가 저장된다(내부 Lexical)
  ```
  * 위의 상황에서 내부 Lexical 환경은 전역 Lexical에 대한 참조이다
  * one이 내부에 존재하지 않으니 외부로 가서 찾게된다

**Closure** : 함수와 렉시컬 환경의 조합, 함수가 생성될 당시의 외부 변수를 기억하여 생성 이후에도 계속 접근이 가능하다

-외부 함수의 실행이 끝나도 내부함수는 외부로의 접근이 가능-

##### [목록보기](#자바스크립트의-필수-개념들)
----------------------




<br><br><br><br><br>
--------------------------

