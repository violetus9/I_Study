## 'new' operator

사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스 생성을 돕는다.

```js
function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}
// 설마 const Car = () => {} 이렇게 안했는지 모른다면 this를 공부하고 옵시다

const car1 = new Car("Eagle", "Talon TSI", 1993);

console.log(car1.make); // 'Eagle'
```

new Car(..) 을 써서 함수를 실행하면 다음과 같은 알고리즘이 동작한다.

1. 빈 객체를 만들어 this에 할당
2. 함수 본문을 실행하며, this에 새로운 속성(property)를 추가하여 this를 수정
3. this를 반환

그렇기에 new로 만들어진 인스턴스 내부는 return으로 반환을 명시하지 않아도 알아서 잘 반환을 딱 깔끔하게 시켜준다.  
new Car('spark'), new Car('sonata').. 처럼 손쉽게 객체를 만들 수 있는 것이다.

여기서 주의할 점은 new 연산자는 그 자체만으로 어떤 함수든 위의 알고리즘으로 생성자 함수를 만들어 버릴 수가 있다는 것.

<br>

### new.target

`new.target` 속성을 사용하면 항수가 new를 통해 호출 되었나를 판별할 수 있다. 일반적인 방법의 함수 호출이라면 undefined를 반환하지만 그게 아니라면 함수 자체를 반환한다.

```js
function User() {
	console.log(new.target);
}

User(); // undefined
new User(); // function User { ... }
```

잘 쓰이는 문법은 아니라지만 이를 활용해 new를 붙여 호출한 것과 같은 효과를 낼 수 있다.

```js
function User() {
	if (!new.target) {
		return new User();
	}
}
```

하지만 범용적으로 봤을 때를 가정하면, 코드가 정확히 무엇을 의미하는지 알아차리기 힘들다. 주의하자!

<br>
<br>

### :)

- Javascript에서 생성자는 함수로 구현된다. 현재는 class 문법이 생겼지만 이전엔 그렇지 않았다.

- Array() 같은 경우는 내부에 new Array()를 한 것처럼 배열 인스턴스를 반환하게끔 구현되어 있다.

- 아래의 기능들을 활용해 알아볼 수도 있다.

  - typeof Array
  - Array instanceof Function
  - Array.constructor.name

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

참고

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new

https://ko.javascript.info/constructor-new
