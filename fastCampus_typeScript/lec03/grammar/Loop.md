## 반복문

반복문이라는 형태와 식을 이용한 반복패턴(뒤에서 다루자) 두가지가 있다.

<br>

```javascript
const arr = ["a", "b", "c", "d"];

// for
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// while
let i = 0;
while (i < arr.length) {
	console.log(arr[i]);
	i++;
}

// do while
i = 0;
do {
	console.log(arr[i]);
	i++;
} while (i < arr.length);

// for of
for (const item of arr) {
	console.log(item);
}

// for in
for (const index in arr) {
	console.log(arr[index]);
}
```

- for in은 객체 순회에 적합하다

  ```javascript
  const obj = {
  	color: "red",
  	width: 200,
  	height: 200,
  };

  for (const key in obj) {
  	console.log(key);
  }
  ```
