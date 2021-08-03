## babeljs

ES6 이후의 문법으로 JS를 쓸 수 있게 해주는 트랜스 파일러

- babel 적용 전

  ```ts
  function double(x) {
  	return x * 2;
  }

  const double2 = (x) => {
  	return x * 2;
  };

  class Double {
  	x;
  	constructor(x) {
  		this.x = x;
  	}

  	getValue() {
  		return this.x * 2;
  	}
  }
  ```

- babel 적용 후

  ```ts
  function double(x) {
  	return x * 2;
  }

  var double2 = function double2(x) {
  	return x * 2;
  };

  // Double 클래스의 경우.. 적용 후 대략 몇십줄로 변환됨(생략)
  ```

<br>

지원하는 여러 기능이 있으니 공식 문서를 읽어보자
