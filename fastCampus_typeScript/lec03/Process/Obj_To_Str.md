## 객체를 문자열로 변환하기

단순히 JSON.stringify로 변환해도 되나, 이 것은 어디까지나 객체를 객체로 변환하기 위한 객체 형태로의 문자열 변환이기에 객체를 완전히 다른 형태의 문자열로 변환하려는 본 주제와는 맞지 않는다.  
예를들면 엑셀의 csv형태로의 변환같은 변환 과정을 다루려고 한다.

<br>

**두가지 방법을 이용할 생각이다**

1. 반복문

2. array 함수 이용

<br>

```js
const cartItems = [
	{ id: 1, item: "핸드밀", price: 40000, discount: 0 },
	{ id: 2, item: "A4용지", price: 4000, discount: 0 },
	{ id: 3, item: "수영복", price: 120000, discount: 0 },
	{ id: 4, item: "색연필72색", price: 150000, discount: 0 },
];

// 1. 반복문
const cartItemsArray = [];

for (const item of cartItems) {
	const row = [];

	for (const [, value] of Object.entries(item)) {
		row.push(value);
	}

	cartItemsArray.push(row.join());
}

console.log(cartItemsArray.join("==="));

// 2. array 함수 이용
const extractValueInObject = (obj) =>
	Object.entries(obj).map(([, value]) => String(value));

const cartItemsString = cartItems.map(extractValueInObject).join("===");

console.log(cartItemsString);
```
