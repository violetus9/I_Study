## Immutability

객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴

객체는 참조형태로 전달하고 전달 받는다. 하지만 객체가 참조를 통해 공유되고 있다면 이 또한 객체의 상태가 언제든 변할 수 있다는 말이 된다.

이 경우를 막기 위해서 비용을 조금 더 투자하여 객체를 불변 객체로 만들면 참조하는 대상들은 객체를 방어적으로 복사(defensive copy)하여 새로운 객체를 생성하고 변경한다. 또는 Observer 패턴으로 객체의 변경에 대처할 수도 있다.

간혹 객체가 변경이 가능한 데이터를 많이 가진 경우는 부적절할 수도 있다.

<br>

### **Immutable or Mutable**

Javascript의 primitive data type은 immutable.

- Boolean
- null
- undefined
- Number
- String
- Symbol

이 이외의 모든 값은 객체타입이며 Mutable하다.

- 배열 또한 객체인 예

  ```js
  const arr = [];
  console.log(arr);
  const arr2 = arr.push(1);
  console.log(arr);
  ```

- Immutable data pattern이 필요한 이유

  ```js
  const user = {
  	name: "Lee",
  	address: {
  		city: "seoul",
  	},
  };
  const user2 = user1;

  user2["name"] = "Kim";

  console.log(user1.name); // Kim
  console.log(user2.name); // Kim
  ```

  _변경을 원치 않는 원본마저 변경돼버린 것._

<br>

### **Immutable data pattern**

바로 위 예시의 경우 실제 서비스에서 문제가 될 것이다. 그렇기 때문에 비용을 조금 더 투자하여 객체를 불변객체로 만들어 변경을 막을 수 밖에 없다.

만약 변경이 필요한 경우 참조를 하는게 아니라 객체의 방어적 복사(defensive copy)를 통해 새 객체를 생성하고 변경한다.

- **defensive copy: `Object.assign`**

  대상 객체로 소스 객체의 속성을 복사한다. 이 때, 소스 객체의 속성과 동일한 속성을 가진 대상 객체의 속성은 소스의 속성으로 덮어쓰기 된다.

  대상 객체를 반환하며 ES6 스펙이라 IE는 지원하지 않는다.

  ```js
  Object.assign(target, ...sources);

  // copy
  const obj = { a: 1 };
  const copy = Object.assign({}, obj);
  console.log(copy); // { a: 1 }
  console.log(obj == copy); // false

  // merge
  const o1 = { a: 1 };
  const o2 = { b: 2 };
  const o3 = { c: 3 };
  const merge1 = Object.assign(o1, o2, o3);
  console.log(merge1); // { a: 1, b: 2, c: 3 }
  console.log(o1); // { a: 1, b: 2, c: 3 }

  // merge
  const o4 = { a: 1 };
  const o5 = { b: 2 };
  const p6 = { c: 3 };
  const merge2 = Object.assign({}, o4, o5, o6);
  console.log(merge2); // { a: 1, b: 2, c: 3 }
  console.log(o4); // { a: 1 }
  ```

  _하지만 Object.assign은 deep copy를 지원하지는 않는다. 객체 내부의 객체는 shallow copy된다._

  _설령 원본 객체가 const로 재할당이 불가능하더라도 속성이 보호된다는 말은 아니다._

  <br>

- **불변 객체화: `Object.freeze`**

  ```js
  function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);

    props.forEach((name) => {
      const prop = obj[name];
      if (typeof prop === 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
    return Object.freeze(obj);
  }

  const user = {
    name: 'Lee'
    address: {
      city: 'seoul'
    }
  };

  deepFreeze(user);
  user.name = 'Kim';  // ignored
  user.address.city = 'Busan';  // ignored
  console.log(user);  // { name: 'Lee', address: { city: 'seoul' } }
  ```

<br>

- **Immutable.js**

  Object.assign, Object.freeze를 사용하여 불변 객체를 만드는 방법은 다소 번거롭기도 하고 성능상 이슈도 있기에 큰 객체에선 사용하지 않는 것을 권장한다.

  그럴 때 `Immutable.js`를 사용하는 방법이 있다.

  Immutable.js는 List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 데이터 구조를 제공한다.

  `npm i immutable`로 설치한다.

  ```js
  const { Map } = require("immutable");
  const map1 = Map({ a: 1, b: 2, c: 3 });
  const map2 = map1.set("b", 50); // 결과를 반영한 새 객체 반환
  map1.get("b"); // 2
  map2.get("b"); // 50
  ```
