## Prototype

Javascript는 프로토타입 기반 언어라 불린다.

모든 객체들이 메서드와 속성을 상속받기 위한 템플릿으로, 프로토타입 객체를 가진다는 뜻이다.

물론 이렇게 생성된 프로토타입 객체는 상위 프로토타입 객체로부터 메서드와 속성을 상속 받을 수 있으며 이 개념을 프로토타입 체인이라 부른다.

즉, 객체 본인이 상위 객체를 상속받는다는 개념이 아닌 각 객체가 가진 프로토타입이란 속성에 정의된 그것들을 상속받는 개념이다.

예시를 통해 이해해보자.

<br>

```js
function Person(first, last, age, gender, interests) {
	// 속성, 메서드 정의
	this.first = first;
	this.last = last;
	// ...
}

const person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
```

위 예시에서 `person1.`을 입력하면 브라우저는 해당 객체의 멤버 이름을 자동완성 시켜줄 것이다.

Person()에 정의된 멤버(name, age, gender, ...)가 잘 보인다면 프로토타입 체인이 동작한다는 것.

```js
// create로 객체를 생성해도 마찬가지
const person2 = Object.create(person1);
console.log(person2.__proto__); // person1이 출력된다.
```

<br>

그렇다면 Object에 정의된 메서드를 person1에서 호출한다면?

```js
person1.valueOf();
```

실행해보면 브라우저는 person1 객체가 valueOf() 메서드를 가진지 탐색한다.

없다...

상위 객체를 탐색한다. 여기선 Person() 생성자의 프로토타입이 되겠지

없다........

Person() 생성자 프로토타입 객체의 상위 Object() 생성자의 프로토타입을 탐색한다.

있다! 있으니까 해당 메서드를 호출하며 종료된다.

_주의할 점은 이 체인에서 한 객체의 메서드와 속성이 다른 객체로 복사되는 개념이 아니며 타고 오르는 접근일 뿐이라는 것._

<br>

```
특정 객체의 프로토타입 객체에 바로 접근하는 공식적인 방법은 없지만... 대다수 브라우저는 __proto__로 특정 객체의 프로토타입 객체에 접근할 수는 있다.

person1.__proto__ >> Person()
person1.__proto__.__proto__ >> Object()

* ES6부턴 Object.getPrototypeOf(obj) 함수로 객체의 프로토타입 객체에 바로 접근할 수 있다.
```

<br>

### 프로토타입 속성: 상속 받은 멤버들이 정의된 곳

Object는 person1이 상속받은 멤버들보다 훨씬 많은 속성과 메서드를 내포하고 있다. 그렇다면 일부는 어디로 사라진걸까?

그 이유는 상속받는 멤버들은 prototype 속성에 정의되어있기 때문이다.  
"Object.prototype."으로 시작하는 모습을 보면 알 수 있다.

prototype 속성도 결국 하나의 객체이며 체인을 통해 상속하려고 하는 속성과 메서드를 담아두는 저장소용으로 사용된다. 그렇기에 Object.prototype.valueOf() 등의 메서드를 새로 생성되는 인스턴스는 물론 Object.prototype를 상속받는 객체라면 어디서든 접근할 수 있게 되는 것이다.

하지만 오해해선 안되는게 Object 자체가 가진 Object.keys() 등의 prototype에 정의되지 않은 멤버는 상속되지 않는 다는 것.

<br>

> 생성자도 결국 함수인데 거기에 멤버를 정의한다는게 이상하다면 함수 또한 객체의 하나라는 사실을 알면 된다.

<br>

결과적으로 우리가 간단한 String, Date, Number, Array를 정의해 사용했을 때, 편리한 메서드들을 이용할 수 있는 이유는 이 프로토타입 체인을 통해 해당 메서드가 제공되기 때문이다.

```js
const myString = "string e yo~";
myString.split(" ");
```

<br>

### 생성자 속성

모든 생성자 함수는 constructor 속성을 지닌 객체를 프로토타입 객체로 가지고 있다.

```js
console.log(person1.constructor);
console.log(person2.constructor);
```

_둘 다 Person() 생성자 함수를 반환하게 된다._

이를 이용해 새 인스턴스를 생성할 수도 있다.

```js
const person3 = new person1.constructor("K", "H", 26, "female", "null");

console.log(person3);
```

<br>

constructor 속성은 여러 사용법이 있는데 한 예로 인스턴스 생성자의 이름이 필요한 경우 `person1.constructor.name`을 통해 알아낼 수 있다.

**주의할 점은 Object.Prototype.method = {} 를 통해 메서드를 수정할 수도 있는데 이런 사용은 권장하지 않는다. 중요한 요소를 수정해버릴 여지가 있기 때문**

<br>

_일반적으로 속성은 생성자에서, 메서드는 프로토타입에서 정의한다.  
생성자는 속성에 대한 정의만 있고 메서드는 별도의 블럭으로 구분할 수 있으니 코드의 가독성이 훨씬 좋아진다.. 이점을 참고하여 코딩하자_
