## Class

class: template  
object: instance of a class

함수와 마찬가지로 class표현식과 class선언 두가지 방법이 있다.

<br>

- **Class 선언**

  ```js
  class Rectangle {
  	constructor(h, w) {
  		this.height = height;
  		this.width = width;
  	}
  }
  ```

  주의할 점은 클래스는 함수와같이 호이스팅이 일어나지 않기에 반드시 선언을 먼저 해줘야 한다는 것.

<br>

- **Class 표현식**

  Class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있다. 이름을 가진 class 표현식의 이름은 body의 local scope에 한해 유효하다. 선언과 마찬가지로 호이스팅을 제한한다.  
  (클래스의 name 속성을 사용해 찾을 수 있다. `Class.name`)

<br>

- **Class body와 메서드 정의**

  - strict mode

    클래스의 본문은 strict mode에서 실행된다.

  - Constructor(생성자)

    클래스로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드.  
    클래스 내부에 한개만 존재할 수 있으며 여러개 존재시 SyntaxError를 발생시킨다.  
    부모 클래스의 생성자를 호출하기 위해 super 키워드를 사용할 수 있다.

  - prototype method

    ```js
    class Rectangle {
    	constructor(height, width) {
    		this.height = height;
    		this.width = width;
    	}
    	// Getter
    	get area() {
    		return this.calcArea();
    	}
    	// 메서드
    	calcArea() {
    		return this.height * this.width;
    	}
    }

    const square = new Rectangle(10, 10);

    console.log(square.area); // 100
    ```

- static method

  static 키워드는 클래스를 위한 정적 메서드를 정의한다. 정적 메서드는 클래스의 인스턴스화 없이 호출되고 클래스의 인스턴스에서는 호출할 수 없다.  
  주로 어플리케이션을 위한 유틸리티 함수를 생성하는데 사용된다.  
  반면 정적 속성은 캐시, 고정 환경설정, 인스턴스간 복제 필요가 없는 기타 데이터에 유용하다.

  ```js
  class Point {
  	constructor(x, y) {
  		this.x = x;
  		this.y = y;
  	}

  	static displayName = "Point😀";
  	static distance(a, b) {
  		const dx = a.x - b.x;
  		const dy = a.y - b.y;

  		return Math.hypot(dx, dy);
  	}
  }

  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.displayName; // undefined
  p1.distance; // undefined
  p2.displayName; // undefined
  p2.distance; // undefined

  console.log(Point.displayName); // "Point😀"
  console.log(Point.distance(p1, p2)); // 7.0710678118654755
  ```

<br>

- 프로토타입 및 정적 메서드를 사용한 this 바인딩

  정적 메서드나 프로토타입 메서드가 this값 없이 호출될 때, this값은 메서드 내부에서 undefined가 된다. class 문법 내부의 코드는 항상 strict mode로 실행되기 때문.

  ```js
  class Animal {
  	speak() {
  		return this;
  	}
  	static eat() {
  		return this;
  	}
  }

  let obj = new Animal();
  obj.speak(); // the Animal object
  let speak = obj.speak;
  speak(); // undefined

  Animal.eat(); // class Animal
  let eat = Animal.eat;
  eat(); // undefined
  ```

  해당 코드에서 전통 방식 함수 기반의 non-strict mode 구문으로 재작성 하면, this 메서드 호출은 기본적으로 전역 객체인 초기 this값에 자동으로 바인딩된다. strict mode선 당연히 자동 바인딩이 발생하지 않는다. this값은 전달된 채로 유지된다.

  ```js
  function Animal() {}

  Animal.prototype.speak = function () {
  	return this;
  };
  Animal.eat = function () {
  	return this;
  };

  let obj = new Animal();
  let speak = obj.speak;
  speak(); // global object (in non-strict mode)

  let eat = Animal.eat;
  eat(); // global object (in non-strict mode)
  ```

<br>

- 인스턴스 속성

  인스턴스 속성은 반드시 클래스 메서드 내에 정의되어야 한다.

  ```js
  class Rectangle {
  	constructor(height, width) {
  		this.height = height;
  		this.width = width;
  	}
  }
  ```

    <br>
  정적 속성과 프로토타입 데이터 속성은 반드시 클래스 선언부 바깥쪽에서 정의되어야 한다.

  ```js
  Rectangle.staticWidth = 20;
  Rectangle.prototype.prototypeWidth = 22;
  ```

<br>

- Field 선언

  - public

    필드 선언 문법을 사용해 위 예시를 다시 아래처럼 쓸 수 있다.

    ```js
    class Rectangle {
    	height = 0;
    	width;
    	constructor(height, width) {
    		this.height = height;
    		this.width = width;
    	}
    }
    ```

      <br>

  - private

    ```js
    class Rectangle {
    	#height = 0;
    	#width;
    	constructor(height, width) {
    		this.#height = height;
    		this.#width = width;
    	}
    }
    ```

    일반적인 프로퍼티와 다르게 private필드는 값을 할당하며 만들어질 수 없다.

<br>

- 클래스 상속(subclassing)

  extend 키워드를 사용하며 this 사용 전 반드시 super() 호출을 통해 상위 생성자를 호출해야한다.

  ```js
  class Animal {
  	constructor(name) {
  		this.name = name;
  	}

  	speak() {
  		console.log(`${this.name} WWWWW`);
  	}
  }

  class Dog extends Animal {
  	constructor(name) {
  		super(name); // super class 생성자를 호출, name에 매개변수 전달
  	}

  	speak() {
  		console.log(`doge ${this.name}`);
  	}
  }

  let d = new Dog("DD");
  d.speak(); // 'doge DD'
  ```

    <br>

  ES5 전통의 함수 기반 클래스를 통해 확장할 수도 있다.

  ```js
  function Animal(name) {
  	this.name = name;
  }

  Animal.prototype.speak = function () {
  	console.log(`${this.name} makes a noise`);
  };

  class Dog extends Animal {
  	speak() {
  		console.log(`doge ${this.name}`);
  	}
  }

  let d = new Dog("DD");
  d.speak(); // 'doge DD'
  ```

  앞서 확인했듯, 유사 메서드의 경우 자식의 메서드를 우선시한다.

    <br>

  또한 클래스는 생성자가 없는 객체를 확장할 수 없다. 그런경우 다음의 메서드를 활용한다.

  ```js
  const Animal = {
  	speak() {
  		console.log(`noisy ${this.name}`);
  	},
  };

  class Dog {
  	constructor(name) {
  		this.name = name;
  	}
  }

  /* 이 작업을 수행하지 않으면 speak 호출시 TypeError */
  Object.setPrototypeOf(Dog.prototype, Animal);

  let d = new Dog("Doge");
  d.speak(); // 'noisy Doge'
  ```

<br>

- Species

  배열 상속을 받은 MyArr 클래스에서 Array Object를 반환하고 싶을때 Sepcies 패턴은 기본 생성자를 덮어쓰도록 해준다.

  `Symbol.species`, 심볼을 이용하면 된다.

  ```js
  class MyArr extends Array {
  	// 부모 Array 생성자로 species 덮어쓰기
  	static get [Symbol.species]() {
  		return Array;
  	}
  }
  let a = new MyArr(1, 2, 3);
  let mapped = a.map((x) => x * x);

  console.log(mapped instanceof MyArr); // false
  console.log(mapped instanceof Array); // true
  ```

<br>

- super, 상위 클래스 호출

  객체의 부모가 가진 메서드를 호출키 위해 사용

  ```js
  class Cat {
  	constructor(name) {
  		this.name = name;
  	}

  	speak() {
  		console.log(`${this.name} makes a noise`);
  	}
  }

  class Lion extends Cat {
  	speak() {
  		super.speak();
  		console.log(`${this.name} roars`);
  	}
  }

  let l = new Lion("Fuzzy");
  l.speak();
  // Fuzzy makes a noise
  // Fuzzy roars
  ```

<br>

- Mix-ins

  추상 서브 클래스(Mix-in)는 클래스를 위한 템플릿이다. ECMAScript 클래스는 하나의 단일 super class만을 가질 수 잇으며 다중 상속은 불가능하다. 기능은 반드시 super class에서 제공되어야 한다.

  super class를 인자로 받고, 이 것을 확장하는 subclass를 생성하여 반환하는 함수를 사용, ECMAScript에서 Mix-in을 구현할 수 있다.

  ```js
  var calculatorMixin = (Base) =>
  	class extends Base {
  		calc() {}
  	};

  var randomizerMixin = (Base) =>
  	class extends Base {
  		randomize() {}
  	};
  ```

  해당 믹스인을 사용하는 클래스는 아래와 같이 작성할 수 있다.

  ```js
  class Foo {}
  class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
  ```

<br>

- 클래스 재정의

  클래스 재정의를 시도하면 SyntaxError가 발생한다.  
  하지말라고 하니까 하지말자.
