## 일급 함수

함수라는 코드의 묶음을 일반적인 값처럼 취급하겠다.

함수 자체를 변수에 넣는다는 것은 함수를 변수처럼 사용해 보다 유동적인 사용이 가능해진다.

- **인자로 함수(값)를 넘겨주는 경우**

  ```ts
  function ul(child: string): string {
  	return `<ul>${child}</ul>`;
  }

  function ol(child: string): string {
  	return `<ol>${child}</ol>`;
  }

  function makeLI(
  	container: (child: string) => string,
  	contents: string[]
  ): string {
  	const liList = [];

  	for (const content of contents) {
  		liList.push(`<li>${content}</li>`);
  	}

  	return container(liList.join(""));
  }

  const htmlUL = makeLi(ul, ["월", "화", "수", "목", "금", "토", "일"]);
  const htmlOL = makeLi(ol, ["봄", "여름", "가을", "겨울"]);

  console.log(htmlUl);
  console.log(htmlOl);
  ```

  makeLi에 함수 자체를 넘겨주고 있다(ul, ol). 그 후 본래 목적에 맞게 배열을 나누고 html태그에 하나씩 넣어주고있다.  
   makeLI의 리턴값을 보면 container에 그 li로 감싸진 요소들을 넘겨주고있다. container는 ul이면 ul, ol이면 ol을 불러와 리턴값을 결정짓는다.

<br>

- **반환 값으로의 함수(값)**

  ```js
  function salePrice(discountRate, price) {
  	return price - price * (discountRage * 0.01);
  }

  console.log("여름 세일 - " + salePrice(30, 567000));
  console.log("겨울 세일 - " + salePrice(10, 567000));

  function discountPrice(discountRate) {
  	return function (price) {
  		return price - price * (discountRate * 0.01);
  	};
  }

  console.log("여름 세일 - " + discountPrice(30)(567000));
  console.log("겨울 세일 - " + discountPrice(10)(567000));

  let summerPrice = discountPrice(30);
  let winterPrice = discountPrice(10);

  console.log("여름 세일 - " + summerPrice(567000));
  console.log("겨울 세일 - " + winterPrice(567000));
  ```

  세 예시 모두 같은 결과를 불러온다. 함수를 값으로 다룬다는 것은 엄연히 함수를 기능단위로 잘라 활용할 수 있게 한다는 것도 있다.

<br>

일급 함수의 활용은 이보다 훨씬 많으니 앞으로 차차 알아가자
