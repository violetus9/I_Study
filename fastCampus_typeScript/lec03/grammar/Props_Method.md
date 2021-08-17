## 속성과 메서드

**속성**: 실제 순수한 데이터  
**메서드**: 함수가 들어간 속성

```js
const obj = {
	name: "Min Tae",
	age: 40,
	getFamilyName: function () {
		return "Kim";
	},
	// arrow
	getLastName: () => "Kim",
	// 축약형
	getBloodType() {
		return "B";
	},
};

// property
obj.name;
obj.age;
// method
obj.getFamilyName();
obj.getLastName();
obj.getBloodType();
```

하지만 위 경우 `obj.age = -300;`라고 할당하면 실제로 말이 안되는 값임에도 이 할당을 막을 방법이 없다. 그래서 등장한 것이 Getter, Setter

<br>

- instance of Class

  ```ts
  class Person {
  	_bloodType: string;

  	constructor(bloodType: string) {
  		this._bloodType = bloodType;
  	}

  	set bloodType(btype: string) {
  		if (btype === "A" || btype === "B" || btype === "O" || btype === "AB") {
  			this._bloodType = btype;
  		}
  	}

  	get bloodType() {
  		return `${this._bloodType} 형`;
  	}
  }

  const p1 = new Person("B");
  p1.bloodType; // 'B'
  p1.bloodType = "C"; // 변경 안됨
  ```

  다만 Getter & Setter의 경우 클래스에서 만들 수 있는 스펙임.  
  객체를 보호하면서 외부 사용성을 증대시켜주는 좋은 친구임

<br>

- 객체의 속성이나 메서드를 구성할 수 있는 기능

  구성: 새로 추가하거나 삭제한다는 것

  ```js
  // js의 동적 바인딩 기능으로 인한 추가
  obj.bloodType = "A";

  // 삭제
  delete obj.bloodType;
  ```

  하지만 delete로 객체 속성을 삭제할 수 없게 하고싶다면..

  1. typescript

     ```ts
     // 이 경우 delete를 사용하면 옵셔널한 값이 아니라 삭제가 되지 않는다고 오류를 발생시킨다
     // age의 경우 옵셔널을 명시했기에 delete가 적용된다.
     type MyObject = {
     	name: string;
     	age?: number;
     	getFamilyName: () => string;
     	getLastName: () => string;
     	getBloodName: () => string;
     };

     const obj: MyObject = {
     	// contents
     };
     ```

  2. js

     객체를 만드는 세가지 방법 객체 리터럴, 클래스 인스턴스, 최상위 Object 객체의 create 메서드

     create를 써보자

     ```js
     // 1번 인자는 부모객체로 작동할 객체, 프로토타입에서 자세히 보자
     // 2번 인자는 구성 객체라는 객체를 받는다. 객체의 구성정보를 객체로 받는다는 것.
     const myObj = Object.create(null, {
     	name: {
     		value: "Kim min",
     		writable: true, // 새로운 값 할당 가능, false시 readonly
     		configurable: false, // 속성을 지울 수 없다, true시 삭제 가능
     	},
     });

     myObj.name;
     ```
