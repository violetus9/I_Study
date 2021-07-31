## 예외

오류를 어떻게 처리하느냐에 대한 방법은 아래의 두가지 방법이 있다.

1. 명확하게 오류를 반환한다
2. 오류가 발생할지 모르는 상황: 예외 처리

```javascript
function doException() {
	throw new Error("오류 나왔쓰");
}

function main() {
	doException();
}

main();
```

위를 실행해보면 바로 프로그램을 종료시킨다.  
 그렇다면 종료 시점은 언제일까?  
 throw: 예외를 던지겠다. 받아주지 않으면 종료한다.

- 예외를 받는다는 구문을 작성해보자

  ```javascript
  function doException() {
  	throw new Error("오류 나왔쓰");
  }

  // 예외가 안나는 함수
  function noException() {
  	return true;
  }

  function main() {
  	try {
  		doException();
  		noException();
  	} catch (e) {
  		console.log(e);
  	} finally {
  		console.log("성공, 실패여부 관계없이 실행하는 블럭");
  	}
  }

  main();
  ```

  **doException:** 실행해보면 app을 종료않고 오류를 처리한 것임, 피드백을 받을 수 있다는 것이다.  
   **noException:** 오류가 없으니 catch는 거르고 바로 finally로 진행

<br>

- 경우에 맞게 함수를 호출해보자

  ```javascript
  function doException() {
  	throw new Error("오류 나왔쓰");
  }

  // 예외가 안나는 함수
  function noException() {
  	return true;
  }

  function callException(type) {
  	if (type === "do") {
  		doException();
  	} else {
  		noException();
  	}
  }

  // 오류 처리를 최상단에서 이론화해서 처리하고 싶은 경우 아래처럼
  function main() {
  	try {
  		callException("do");
  	} catch (e) {
  		console.log(e);
  	} finally {
  		console.log("성공, 실패여부 관계없이 실행하는 블럭");
  	}
  }

  main();
  ```
