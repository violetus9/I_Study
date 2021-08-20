## 동기와 비동기

```js
function double(x) {
	return x * 2;
}

const x = double(100);
const y = x;
```

위 코드는 동기 코드이다. x가 실행되기 전 y를 실행할 수 없기 때문이다. 순차적인 흐름을 따른다는 것. 동기적 상황이라고 한다.

비동기 코드는 반대의 상황이다. javascript는 코드를 중간에 멈추게 할 수 없기때문에 임의로 비동기 상황을 연출해보며 알아보자

```js
function calcValue() {
	setTimeout((a, b) => {
		return a + b;
	}, 100);
}

const r = calcValue(10, 20);
const z = r;
```

같은 상황이다. 하지만 undefined를 리턴한다. 순식간에 코드의 흐름은 setTimeout을 처리하기도 전에 리턴했기 때문이다. 반환값을 받을 대상이 없다는것. 이것이 비동기적 상황이다.

<br>

- **콜백함수**

  비동기와 순차 코드를 엮기 위한 방법

  ```js
  function calcValue(a, b, cb) {
  	setTimeout((a, b) => {
  		return a + b;
  	}, 100);
  }

  const r = calcValue(10, 20, (res) => {
  	console.log(res); // 30
  });
  const z = r;
  ```

  이렇게 비동기적 상황을 콜백함수로 해결할 수 있다. 하지만 앱의 규모가 커지면 굉장히 복잡해지게된다. 콜백함수가 여러개 엮인 상황, 그것을 콜백지옥이라고 부른다.

<br>

- **Promise**

  콜백지옥을 막기 위해 나타난 규격

  - Promise 객체

    ```js
    const p = new Promise((resolve, reject) => {
    	resolve("OK");
    	reject("fail");
    });

    p.then(function (ok) {
    	console.log(ok); // 'OK'
    }).catch(function (err) {
    	console.log(err); // 'fail'
    });
    ```

    Promise는 함수를 제공받는다. 함수의 성공은 resolve라는 함수로 전달하고 실패는 reject라는 함수가 받게 된다.  
     성공의 수신은 p객체의 .then이라는 메서드가 받게 되며 실패의 수신은 p객체의 .catch란 메서드가 받게 된다.

    사실상 위 예시는 설명을 위한 동기적 코드.

    이제 실제 적용을 해보자

    <br>

    ```js
    const p = new Promise((resolve, reject) => {
    	setTimeout(() => {
    		resolve("OK");
    	}, 2000);
    });

    p.then(function (ok) {
    	console.log(ok);
    	return new Promise((resolve, reject) => {
    		setTimeout(() => {
    			resolve("2 OK");
    		}, 1000);
    	});
    })
    	.then(function (ok) {
    		console.log(ok);
    	})
    	.catch(function (err) {
    		console.log(err);
    	});
    ```

    위처럼 비동기적 상황이 끊임없이 연출되는 경우 편하다

    뒤에 나올 async await은 이 then 체이닝 마저도 간편하게 만들어주므로 꼭 학습할것!
