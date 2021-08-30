## Tuple

JS는 지원하지 않지만 TS는 지원하는 타입 유형중 하나

JS 배열 기능의 확장이라고 보면 된다.  
다만 배열이 가지지 못하는 제약사항을 걸 수 있는데 코드를 보면서 보자

```ts
// [number, string, string] 이게 제약
const address: [number, string, string] = [14023, "서울시", "송파구"];

let [zipcode, address1] = address;

zipcode = "12345"; // 숫자형이 고정되어있어, 오류 발생

type BookInfo = [string, string, number];

// 바깥 배열은 일반 배열, 내부 배열은 튜플
const BookData: BookInfo[] = [
	["헨리 8세", "셰익스피어", 1004],
	["헨리 8세", "셰익스피어", 1004],
];

BookData.push(["a", "b", 23]); // 튜플 규격과 맞으므로 타입검사에서 걸리지 않고 잘 작동됨

function getArrayOne(): any[] {
	return [14023, "서울시", "송파구"];
}

type Address = [number, string, string];

// 튜플을 이용한 재작성
function getArrayTwo(): Address {
	return [14023, "서울시", "송파구"];
}

let address2 = getArrayTwo()[2];

address2 = 12; // 타입체크~
```

튜플은 배열과 다르게 크기를 제한한다.

왜?

간혹 상태에 대해 배열이 제한해야 하는 경우가 있다. 예를들면 주소같은건 '서울 송파구 ~~~' 이런식으로 규격이 정해져 있다. 이런 경우 튜플로 공간을 제한해버려 예기치못한 에러를 차단하는 것.

용법 자체는 간단하지만 활용이 무궁무진하므로 연구해볼것~
