## Closure

독립적인 변수를 가리키는 함수

클로저 내부에 정의된 함수는 만들어진 환경을 기억한대

```jsx
function getClosure() {
	var text = "variable 1";
	return function () {
		return text;
	};
}

var closure = getClosure();
console.log(closure()); // 'variable 1'
```

보시다시피 내부변수 text에 대한 환경을 기억합니다

### 은닉화

일반적으로 JS의 OOP를 얘기한다면 prototype을 통한 객체 핸들링을 말함니다 ES6이후 Class가 도입됐지만 이건 넘어갑시다

어찌됐든 은닉화는 객체 내부 변수에 접근할 수 있는 권한에 대한 내용을 다룹니다

```jsx
function Hi(name) {
	this._name = name; // 일반적으로 private로 다루고 싶은 내용은
} // 변수명 앞 '_'를 붙임둥

Hi.prototype.say = function () {
	console.log(`Hi!! ${this._name}`);
};

var hi = new Hi("안넝");
hi.say(); // 'Hi!! 안넝'
hi._name = "해위";
hi.say(); // 'Hi!! 해위'
```

이러면 안되는데?

클로저를 활용해봅시당

```jsx
function hi(name) {
	var _name = name;
	return function () {
		console.log(`${_name} ㄷㄷ`);
	};
}
```

특별히 인터페이스를 구성하지 않는 한 외부에서 private \_name 변수에 접근할 방법은 없을겁니다 ㅎ

### 반복문

이상한거 하나 보자

```jsx
var i;
for (i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}
```

이러면 0에서 9까지를 바랬겠지만 10만 열번 출력이 됩니다

setTimeout()이 0.1초 뒤 호출이 될텐데 그동안 반복문은 순회를 마쳐 i는 10이 되었기 때문이에여, 그후 익명함수를 호출하며 i를 불러오기에 10이 열번 나옵니다~

클로저를 써봅시다

```jsx
var i;
for (i = 0; i < 10; i++) {
	(function (j) {
		setTimeout(function () {
			console.log(j);
		}, 100);
	})(i);
}
```

IIFE를 이용ㅎ setTimeout()에 엮인 익명함수를 클로저로 만들었습니다.

i는 생성즉시 IIFE의 j인자로 전달이 됩니다. 클로저로 인해 10개의 다른 환경이 생성되며 다른 j들이 평행우주에 살고있게 되는겁니다.

_(IIFE 자체를 콜백으로 하면 내부함수가 즉시실행되어 setTimeout()이 제기능을 못해요)_

### 성능

앞서 말했듯 클로저는 각자의 환경을 기억합니다. 그말인즉슨 각자 메모리를 사용하고 있다는 거에요

그동안은 당연히 사용중인, 사용 가능성이 있는 친구들이니까 GC는 회수를 하지 않습니다

따라서 클로저 사용이 끝나면 참조를 제거해 주는 편이 좋답니다 ^^

~~보면 좋은거 **^^**~~

[How do JavaScript closures work?](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
