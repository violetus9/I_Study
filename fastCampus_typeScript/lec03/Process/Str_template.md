## 문자열 변환 고급 기법, 템플릿

<br>

```js
const userName = "Kim mintae";
const bolder = (text) => `<b>${text}</b>`;

console.log(`
  Hi, ${userName}
`);

console.log(`
  Hi, ${border(userName)}
`);

function div(strings, ...fns) {
	const flat = (s) => s.split("\n").join("");

	return function (props) {
		return `<div style="${
			flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])
		}"></div>`;
	};
}

// Tagged Template
const Div = div`
  font-size: 20px;
  color: ${(props) => (props.active ? "white" : "gray")};
  border: none;
`;

console.log(Div({ active: true }));
```

<br>

- 템플릿 리터럴의 `${}`내부에는 값이 들어간다. 값으로만 수렴할 수 있는 모든 것이 들어갈 수 있다는 소리.

- Tagged Template: 위의 예시 코드에서 Div 함수부분을 보면 구동은 이렇다.

  1.  템플릿 리터럴에 넘어간 데이터 문자열이 해당 함수 div의 첫 인자로 전달된다.

  2.  `${}`의 갯수만큼 div함수의 가변 인자로 뒤에 전달이 된다.

  3.  div 함수의 첫 리턴은 props를 인자로 받게 되어있다.

  4.  위에서 `3.`의 props 는 { active: true }란 인자를 받게 된다.

  5.  `${}`는 템플릿에서 문자열을 자르고 배열로 만드는 성질이 있다.

      즉, 첫 인자로 넘어간 strings는

      string[0]: 'font-size: 20px; color: '
      fns[0]: ${(props) => (props.active ? "white" : "gray")}
      string[1]: '; border: none;'

      이런식의 배열을 만든다는 것.

  6.  결과적으로 color는 'white'가 된다.
