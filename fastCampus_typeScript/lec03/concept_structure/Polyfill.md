## 폴리필

웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드  
우리는 트랜스파일링이라는 개발 환경에서 작업을 하고 있다(babel, Typescript같은 트랜스 파일러를 이용).  
브라우저가 지원하지 않는 코드를 지원할 수 있게 돕는다.

- 예시

  map을 지원하지 않는 브라우저가 있다고 생각해보자..

  ```ts
  Array.prototype.MyMap = function (cb) {
  	let arr = [];

  	for (let i = 0; i < this.length; i++) {
  		arr.push(cb(this[i], i, this));
  	}

  	return arr;
  };

  console.log([1, 2, 3].MyMap((n) => n * 2));
  ```

  이런식으로 작동한다고 보면 됨

<br>

- core-js

  폴리필 대표 라이브러리(거의 표준)  
  babel 내부에 탑재됨  
  _여기서 자세히 볼 수 있어_: https://github.com/zloirock/core-js
