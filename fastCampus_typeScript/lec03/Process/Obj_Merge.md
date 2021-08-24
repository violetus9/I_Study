## 객체의 병합

객체는 항상 참조형이다, 원본 데이터의 위치 값만 이동하기에 복사했다고 착각하지 말것.

<br>

```js
const sourceObject = {
	traits: {
		first_name: {
			value: "Bob",
			source_id: 1,
			updated_at: 123123123123,
		},
		emails_opened_last_30_days: {
			value: 33,
			soutce_id: 2,
			updated_at: 123123123124,
		},
	},
	cursor: {
		url: "/v1/spaces/lgJ4AAjFN4",
		has_more: false,
		next: "",
	},
};

// 깊은 복사 (depth at least lev2)
const newObject1 = JSON.parse(stringify(sourceObject));

// 얕은 복사 (depth lev1)
const newObject2 = Object.assign({}, sourceObject);
const newObject3 = { ...sourceObject };
```

객체의 데이터가 큰 경우 JSON변환을 통한 복사는 큰 도움이 못된다, 오히려 독이 될 수도 있음. 성능이 매우 안좋아짐

<br>

**깊은 복사**

```js
function deepCopyObject(obj) {
	const clone = {};
	for (const key in obj) {
		if (typeof obj[key] == "object" && obj[key] != null) {
			clone[key] = deepCopyObject(obj[key]);
		} else {
			clone[key] = obj[key];
		}
	}
	return clone;
}

const newObject4 = deepCopyObject(sourceObject);
```

객체는 항상 참조를 끊는 것이 중요하다..

<br>

**조금은 다른 몇 패턴들**

```js
const store = {
	user: null,
	cart: [],
	config: {
		multiDevice: false,
		lastLoginDate: "Wed Jun 09 2021 20:46:55 GMT+0900",
	},
};

// store 일부를 유지하되, 다른 정보를 대체할 것임
const newObject5 = {
	...deepCopyObject(store),
	config: {
		...store.config,
		lastLoginDate: new Date(),
	},
};

console.log(newObject5);

// default 설정하는 패턴
const DefaultStyle = {
	color: "#fff",
	fontColor: "#999",
	fontSize: 14,
	fontWeight: 200,
};

function createParagraph(config) {
	config = { ...DefaultStyle, ...config };
	// Do sth
	console.log(config);
}

createParagraph({ fontSize: 12 });
```
