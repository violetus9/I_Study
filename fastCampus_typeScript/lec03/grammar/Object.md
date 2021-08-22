## Object-Data

- **데이터로서의 객체**

    <br>

  **객체 리터럴**

  ```ts
  type Box = {
  	width: number;
  	height: number;
  	borderRadius: number;
  	backgroundColor: string;
  	borderWidth?: number;
  	["className"]?: string;
  };

  let box: Box = {
  	width: 200,
  	height: 200,
  	borderRadius: 5,
  	backgroundColor: "red",
  };

  // 객체 생성 함수(객체 리터럴의 일종)
  function makeBox(
    width: number,
  	height: number,
  	borderRadius: number,
  	backgroundColor: string
  ): Box {
    return (
      width,  // 변수명과 속성명이 같은 경우 축약이 가능하다.
      height,
      borderRadius,
      backgroundColor,
    );
  }

  makeBox(100, 100, 0, 'green');
  ```

  객체를 만드는 함수라는 테크닉은 객체의 생성이 수없이 늘어나야 하는 경우 유용한 코드 패턴을 가진다. 유지보수 측면에서도 뛰어난 성능을 가진다. 하지만 언어, 문법적으로 객체를 더 쉽게 만들어주는 것이 있는데 class라고 한다.

    <br>

  **class**

  ```ts
  class Shape implements Box {
  	width: number;
  	height: number;
  	borderRadius: number;
  	backgroundColor: string;

  	// 클래스는 항상 생성자가 있어야한다.
  	constructor(
  		width: number,
  		height: number,
  		borderRadius: number,
  		backgroundColor: string
  	) {
  		this.width = width;
  		this.height = height;
  		this.borderRadius = borderRadius;
  		this.backgroundColor = backgroundColor;
  	}
  }

  // 인스턴스 객체 생성
  const boxShape = new Shape(10, 10, 0, "blue");
  ```

  클래스는 구성 정보를 가지고 있으며 그것을 실체화하는 객체라는 의미라고 생각할 수 있다. 실체화된 객체는 인스턴스 객체라고 부르며 어느 클래스로 만든 객체인가를 확인할 수 있다.

  ```ts
  // Shape 클래스로 만든 인스턴스 객체인가?
  console.log(boxShape instanceof Shape); // true
  ```

  <br>

  - 객체의 복사

    _객체는 아무리 옮겨다녀도 참조타입이기에 절대 원본이 바뀌지 않는다._

    ```ts
    // assign: 1번 인자에 2번을 덮어쓴다. 그 후 결합체를 리턴
    const box1 = Object.assign({}, box);

    // spread Operator, 재구성 후 다시 넣기(많이 쓰이는 방법)
    const box2 = { ...box, borderRadius: 10 };

    // 문자열 변환 후 다시 객체로 바꾸는 방법(원시적)
    const box3 = JSON.parse(JSON.stringify(box));
    ```

<br>

---

<br>

- **프로그래밍 도구로서의 객체**

  대상을 객체화 하여 표현하는 경우가 많이 있다.  
  데이터 뿐만 아니라 행위, 동작에 대한 요소를 가진 경우에 대해 어떻게 객체를 통해 프로그래밍 할 수 있는지 알아보자.

    <br>

  ```ts
  function calcCircleA(rad) {
  	return rad * rad * Math.PI;
  }

  function calcRectA(rad) {
  	return width * height;
  }

  class Circle {
  	#radius;

  	constructor(radius) {
  		this.#radius = radius;
  	}

  	area = () => this.#radius * this.#radius * Math.PI;
  }

  class Rect {
  	#width;
  	#height;

  	constructor(width, height) {
  		this.#width = width;
  		this.#height = height;
  	}

  	get width() {
  		return this.#width;
  	}

  	get height() {
  		return this.#height;
  	}

  	area = () => this.#width * this.#height;
  }
  ```

  함수로 면적을 구하는 것과 객체 메서드로 구하는 면적은 같다.

  ```js
  const circle = new Circle(50);
  const rect = new Rect(50);

  console.log(calcCircleA(circle.radius));
  console.log(calcRectA(rect.width, rect.height));

  console.log(circle.area());
  console.log(rect.area());
  ```

  calc 방식은 사용하는 쪽에서 도형에 대한 정보가 충분히 있어야 면적을 구할 수 있다(원의 경우 반지름을 넘겨 줘야한다~ 이런식)  
  하지만 객체가 스스로 행위를 포함한다면 사용자 측에서 단순히 메서드만을 호출하면 원하는 값을 얻어낼 수 있다.
