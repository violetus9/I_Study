## 배열

일반적으로 배열이라 함은 메모리 공간에 순차적으로 나열된 자료 구조를 뜻한다. 하지만 Javascript의 배열은 일반적으로 알고 있는 순차적 배열과는 다르다.

Javascript의 배열은 해시 테이블을 구현한 것으로 무작위 메모리 공간에 담겨 서로의 위치를 참조한다. 즉, 각각의 메모리 공간에 동일한 크기를 갖지 않아도 되고 연속적이지 않을 수 있다는 것이다.

이러한 배열을 `Sparse Array`라고 부른다.

엄연히 Javascript의 배열은 인덱스를 키로하는 length 속성을 갖는 특수 객체인 것이다. Javascript서 사용할 수 있는 모든 값은 객체의 속성값이 될 수 있으므로 어떠한 타입의 값도 배열의 요소가 될 수 있다.  
즉, 진짜 "흔한 배열"이 아니라 배열을 흉내낸 객체의 일종이라고 본다.

```js
const arr = Array(5);
console.log(typeof arr); // object
```

이렇게 구현된 배열은 다음의 장점을 갖는다.

<br>

### 장점 & 단점

일반적인 배열은 요소의 삭제와 탐색에 효율적이지 않다(요소에 접근은 빠르다).

Javascript의 배열은 해시 테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우 일반 배열보다 성능이 좋지 못하다. 하지만 탐색과 요소 삽입, 삭제함에 있어 일반적인 배열보다 빠른 성능을 보인다는 장점이 있다.

반면 JS가 인덱스로 요소에 접근하는 경우 일반 배열보다 다소 느리다는 단점은, 대부분의 모던 Javascript 엔진이 배열을 일반 객체와 구분하여 일반 배열에 근접하게끔 최적화를 해놓으면서 보완하려고 했다.

```js
const arr = [];

console.time("Arr Performance Test");

for (let i = 0; i < 10000000; i++) {
	arr[i] = i;
}

console.timeEnd("Arr Performance Test");
// 대략 340ms

const obj = {};

console.time("Obj Performance Test");

for (let i = 0; i < 10000000; i++) {
	obj[i] = i;
}

console.timeEnd("Obj Performance Test");
// 대략 600ms
```

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

참고

https://poiemaweb.com/js-array-is-not-arrray
