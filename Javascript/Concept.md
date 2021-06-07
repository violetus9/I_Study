# 자바스크립트의 필수 개념들

1. [변수, 호이스팅, TDZ](#변수,-호이스팅,-TDZ)   
2. [생성자함수](#생성자-함수)   
3. [Object methods, Computed property](#Object-methods,-Computed-property)   
4. [Symbol](#Symbol)   
5. [Number, Math](#Number,-Math-method)   
6. [Destructuring assignment](#Destructuring-assignment)   
7. [Closure](#Closure)   
8. [Rest parameters, Spread syntax](#Rest-parameters,-Spread-syntax)   
9. [call, apply, bind](#call,-apply,-bind)   
10. [상속, prototype](#상속,-prototype)   
11. [Class](#Class)   


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

## Rest parameters, Spread syntax

* 인자 전달 & Rest parameter
  ```javaScript
  function showName(name){
    console.log(name);
  }
  showName('A');  // 'A'
  showName('A', 'B');  // 
  showName();  // undefined
  ```
  name이 인자를 받음에 있어 기본적으로 갯수의 제한이 없다. 통상 다음의 두가지 방법이 있다
  * arguments
    * 함수로 넘어 온 모든 인수에 접근
    * 함수내에서 이용 가능한 지역변수
    * length/ index
    * 배열의 내장 메서드 없음 (forEach, map)
  ```javaScript
  function showName(name){
    console.log(arguments.length);
    console.log(arguments[1]);
  }
  showName('A', 'B'); // 2 \n 'B'
  ```
<br>

  * rest parameters를 사용한다(ES6이상 환경에서 권장)   
    * 정해지지 않은 갯수에 대한 입력시
  ```javaScript
  function add(...nums){
    let result = nums.reduce((pre, cur) => pre + cur);
  }
  console(1, 2, 3, 4, 5);   // 15  
  ```

    * 다른 예(생성자 함수를 만들것, 생성자 함수 첫글자 대문자는 국룰)
  ```javaScript
  function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
  }
  
  cosnt user1 = new User('A', 30, 'html', 'css');
  cosnt user2 = new User('B', 20, 'JS', 'React');
  cosnt user3 = new User('C', 10, 'css');
  ```
  *나머지 매개변수는 항상 파라미터 맨 뒤에 위치해야 한다(당연)*
<br>

* Spread syntax : 배열, 복제
  ```javaScript
  let arr = [1, 2, 3];
  let result = [0, ...arr, 4, 5];   // [0, 1, 2, 3, 4, 5]
  ```

  * 실용 예
  ```javaScript
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  arr2.reverse().forEach((num) => {
    arr1.unshift(num);
  })
  console.log(arr1);    // [4, 5, 6, 1, 2, 3]
  arr1 = [...arr2, ...arr1] // [4, 5, 6, 1, 2, 3] 간편!
  ```
  * Spread syntax는 객체에도 적용이 가능하다

##### [목록보기](#자바스크립트의-필수-개념들)
----------------------

## call, apply, bind

함수 호출 방식과 관계없이 this 지정 가능   

* call : 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정 가능
  ```javaScript
  const mike = { name: 'Mike' };
  const tom = { name: 'Tom' };
  function showThisName(){
    console.log(this.name);
  }
  showThisName(); // this > window, 그렇기에 빈 문자열 출력
  showThisName.call(mike);  // 'Mike'
  ```
  * .call(this로 사용할 객체) : 해당 함수가 주어진 객체의 메서드인것양 사용 가능
<br>

  * update
  ```javaScript
  function update(birth, occupation){
    this.birth = birth;
    this.occupation = occupation;
  }
  update.call(mike, 1999, "singer");
  console.log(mike);    // 결과를 보면 두개의 정보가 업데이트 되었씀
  ```
<br>

* apply : 매개변수를 배열로 받는다는 점을 제외하면 call과 동일
  ```javaScript
  update.apply(mike, [1999, 'bagger']);

  // 차이를 보자
  const nums = [3, 10, 1, 6, 4];
  const minN = Math.min.apply(null, nums);
  // = Math.min.apply(null, [3, 10, 1, 6, 4]);
  const maxN = Math.max.call(null, ...nums);
  // = Math.max.apply(null, 3, 10, 1, 6, 4);
  ```
<br>

* bind : 함수의 this값을 영구히 바꿀 수 있음
  ```javaScript
  const user = {
    name: 'A'
    showName: function(){
      console.log(`hihi, ${this.name}!!`);
    },
  };
  user.showName();  // hihi A!!

  let fn = user.showName;
  fn(); // hihi, !!
  // user.showName 에서 user가 this가 된다.
  // 호출 시 메서드만 호출하기에 this는 부재하게 되므로 hihi, !!

  fn.call(user);    // hihi, A!!
  fn.apply(user);   // hihi, A!!

  let boundFn = fn.bind(user);
  boundFn();        // hihi, A!!
  ```
  
##### [목록보기](#자바스크립트의-필수-개념들)
----------------------

## 상속, prototype

```javaScript
const car = {   // 공통인 부분을 따로 뺐다.
  wheels: 4,
  drive(){
    console.log('drive..');
  },
}
const bmw = {
  color: 'red',
  navigation: 1,
};
const benz = {
  color: 'black',
};

bmw.__proto__ = car;
benz.__proto__ = car; // car가 각 객체의 프로토 타입이 된다.
// bmw, benz는 car의 상속을 받는다 라고 할 수 있다.
```
*property에 값이 없다면 prototype을 확인한다*
<br>

* 상속은 계속 이어질 수 있다.(prototype chain)
```javaScript
const x5 = {
  color: 'white',
  name: 'x5',
};
x5.__proto__ = bmw;
/*
  x5 {color: 'white', name: 'x5'}
    __proto__ > bmw {color: 'red', navigation: 1}
      __proto__ >> car {wheels: 4, drive()}

  이런 방식으로 상속이 이루어진다. : prototype chain
*/
```
<br>

* 생성자 함수
```javaScript
const Bmw = function(color) {
  this.color = color;
};
const x5 = new Bmw('red');
const z4 = new Bmw('blue');

x5.__proto__ = car;
z4.__proto__ = car;
```
*위처럼 만들어도 되지만 매번 이렇게 만들기엔 귀찮다*
<br>

생성자 함수의 장점이 간편함임을 이용하자
```javaScript
const Bmw = function(color) {
  this.color = color;
};
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function(){
  console.log('drive...');
};
x5.wheels; // 4, 잘 나온다.
```
*한번만 작업 해놓으면 생성자로 만들어진 함수를 일일히 작업하지 않아도 된다*

* instanceof
```javaScript
z4 instanceof Bmw;    // true, z4는 Bmw로 생성되었다.(bmw의 instance)

z4.constructor === Bmw;   // true, z4의 생성자는 Bmw이다.
```
<br>

* closure
```javaScript
x5.color = 'silver';    // 임의로 누군가 바꿔버릴 수 있다
```
*바람직하게 바꿔보자*
  ```javaScript
  const Bmw = function (color) {
    const c = color;
    this.getColor = function() {
      console.log(c);
    };
  };
  const x5 = new Bmw('red');

  x5.getColor();    // red, 생성 당시의 context를 기억하게 된다
  ```
  
##### [목록보기](#자바스크립트의-필수-개념들)
----------------------

## Class   
ES6에 추가된 스펙

```javaScript
class User {
  constructor(name, age) {  // 객체를 만들어주는 생성자메서드
    this.name = name;
    this.age = age;
  }
  showName() {  // 클래스 내부 메서드는 prototype에 정의된다
    console.log(this.name);
  }
}
const A = new User('A', 20);  // new 없이 실행될 수 없다(TypeError)
```
<br>

* 상속(extends)

```javaScript
class Car {
  constructor(color){
    this.color = color;
    this.wheels = 4;
  }
  drive(){
    console.log('brrr...');
  }
  stop(){
    console.log('sToP');
  }
}
class Bmw extends Car {
  park(){
    console.log('PaRk');
  }
}
const z4 = new Bmw('blue');
```
<br>

* method overriding   
보통의 overriding처럼 덮어씌우게 된다, 부모클래스의 메서드를 사용코자 한다면 super.method()를 이용하자   

* constructor overriding   
부모 생성자를 반드시 먼저 호출해야한다.   
이유인즉, Class의 생성자는 빈객체로 this를 통해 가르킨다. 반면 상속받는 클래스는 이 작업을 건너뛰게 된다.   
super();로 부모의 생성자를 먼저 실행해줘야 한다.
  ```javaScript
  class Bmw extends Car {
    constructor(color){
      super(color);
      this.navigation = 1;
    }
  }

  // 만약 Bmw에 constructor 없다면, 내부적으로 동작은 아래와 같다
  class Bmw extends Car {
    constructor(...args){
      super(...args);
    }
  } // 항상 부모의 것을 물려받아야 한다는 것.
  ```
<br>

##### [목록보기](#자바스크립트의-필수-개념들)
----------------------



T0D0!
함수, 객체
JS> single thread
비동기 개념, event driven programming
callback, promise, async/await
call stack, event loop, **실행 context(this...)
JS는 class아닌 prototype 기반!

+a (하다보면 되는 것들! 달달 금지)
DOM
class(보단 prototype 우선)
design pattern(책같은거 읽어보면 되는거임)
functional programming > 선택적!
배열(실무서 2차원 많이 쓴대 + map, filter, reduce)


<br><br><br><br><br>
--------------------------

