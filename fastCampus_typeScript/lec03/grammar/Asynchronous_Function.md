## 비동기 함수

**async, await**

```ts
function delay(ns: number): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.floor(Math.random() * 10) % 2 === 0) {
				resolve("success");
			} else {
				reject("failure");
			}
		}, ms);
	});
}

// 상황1
delay(3000)
	.then((result: string) => {
		console.log("done primise" + result);
	})
	.catch((error: string) => {
		console.error("fail primise" + error);
	});

// 상황2
async function main() {
	try {
		console.log("started");
		const result = await delay(3000);
		console.error("done async" + result);
	} catch (e) {
		console.error("fail async" + e);
	}
}

main();
```

비동기 함수는 함수 앞에 async만 붙여주면 된다. 기존에 Promise 객체를 반환하는 함수가 있다면 그 함수 앞에 await이란 operator를 붙여주면 된다.

상황1과 똑같은 delay 함수지만 상황2는 then을 쓰지 않았다. 콜백 함수가 아님에도 콜백함수와 비슷한 상황이 벌어지게 된다.
