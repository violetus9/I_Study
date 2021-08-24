## 객체를 형태가 다른 객체로 변환하기

요 파트 중요하므로 많이많이 볼 것.

```js
const sourceObject = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
};

const targetObject = {
	aGroup: {
		a: 1,
		b: 2,
	},
	bGroup: {
		c: 3,
		d: 4,
		e: 5,
	},
};

const groupInfo = {
	aGroup: ["a", "b"],
	bGroup: ["c", "d", "e"],
};

function makeGroup(source, info) {
	const merge = (a, b) => ({ ...a, ...b });
	return Object.keys(info)
		.map((group) => ({
			[group]: info[group].map((k) => ({ [k]: source[k] })).reduce(merge, {}),
		}))
		.reduce(merge, {});
}

console.log(makeGroup(sourceObject, groupInfo));
```

이 코드의 목적은 sourceObject를 targetObject로 바꾸는 것이다.

merge는 인자를 받아 모두 펼쳐 객체로 반환하는 함수이다 (reduce 함수구나~ 하고 알아야 한다.)

Object.keys에 객체를 전달하면 객체의 키값만들 문자열로 변환한 배열을 리턴한다.

객체를 만들 때 **computed property**를 적극적으로 사용

<br>

- _computed property_

  표현식(expression)을 사용, 객체의 key값을 정의하는 문법.

  ```js
  const b = "bkey";
  const a = 12;

  const obj2 = {
  	[b]: "bValue",
  	[a]: "aValue",
  };

  console.log(obj2);
  // { "12": "aValue", "bkey": "bValue" }
  ```
