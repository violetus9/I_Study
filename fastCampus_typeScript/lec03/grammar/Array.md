## 배열

하나 이상의 값을 변수에 담고 싶은경우가 있다면, javascript가 제공하는 두가지 구조중 하나를 사용하면 된다. 객체와 배열이다.

이번에 볼 것은 배열임

객체와 배열은 여러 값을 담는다는 공통점이 있지만, 객체의 경우 이름과 값이 대응되어야 하고 배열은 그냥 이름 없이 위치값을 가지고 여러 값을 담기만 하면 된다.

<br>

```js
const books = [];

books[0] = "헨리 6세 제1부";
books[1] = "헨리 6세 제2부";
books[2] = "헨리 6세 제3부";

// 여러번 써본것, 패스함
/*
  push, pop
  shift, unshift
  length
*/

const oneBooks = books.slice(1, 2);
// 1인덱스부터 2의 전까지를 뽑는다. 여기선 인덱스 1 한개만을 뽑겠지
// 주의할 점은 원본을 훼손시키지 않는다.

const twoBooks = books.splice(1, 2, "햄릿", "오셀로", "리어왕");
// splice는 꺼내온 자리에 데이터를 추가할 수도 있다.

const allBooks = books.join();
// 배열을 주어진 조건으로 합쳐 문자열로 반환한다.
// default는 ',' 임

const newBooks = allBooks.split(",");
// 문자열을 조건 기준으로 잘라 배열로 반환한다~

const nextBooks = oneBooks.concat(twoBooks);
// 원본과 인자로 넘어온 배열 두개를 순서대로 합친다.
const spreadBooks = [...oneBooks, ...twoBooks];
// 전개 연산으로 합칠 수도 있다.
```

- 주의할 점은 전개연산자는 풀어 헤칠 대상이 풀어질 대상과 타입이 맞아야 한다는 점

<br>

## 배열 연산

```ts
type Book = {
	title: string;
	copyright?: string;
	author?: string;
};

const books: string[] = [
	"헨리 6세",
	"리처드 3세",
	"실수 연발",
	"말괄량이 길들이기",
	"헨리 8세",
];
```

<br>

- 순회

  - forEach

    for문 보다는 성능이 다소 떨어진다는 점

    ```ts
    // 식을 이용한 배열 순회 방법
    books.forEach((book: string, idx: number, books: string[]) => {
    	console.log(book, idx);
    });
    ```

    <br>

  - map

    forEach와 다른 점은 map은 리턴이 있다는것, map은 원본 배열에서 데이터를 전달받아 함수가 리턴한 데이터로 새로운 배열을 만들어 배열을 반환하는 함수

    ```ts
    const bookObjects: Book[] = books.map((book: string) => {
    	return {
    		title: book,
    		author: undefined,
    	};
    });

    console.log(bookObjects);
    ```

    - map 심화

      많이 쓰이는 패턴임, 메서드 체이닝

      ```ts
      const ShakespeareOneBooks: Book[] = books
      	// 괄호로 값을 리턴, 객체도 값임
      	.map((book: string) => ({
      		title: book,
      	}))
      	.map((book: Book) => ({
      		...book,
      		author: "William Shakespeare",
      	}));

      console.log(ShakespeareOneBooks);
      ```

      **왜 map 두개를 연결해서 썼는지는 다음 예제를 보면 알 수 있음**

      <br>

      ```ts
      const bookTitleToBookObject = (book: string) => ({ title: book });
      // curring 기법
      const makeAuthor = (name: string) => (book: Book) => ({
      	...book,
      	author: name,
      });

      const ShakespeareTwoBooks: Book[] = books
      	.map(bookTitleToBookObject)
      	.map(makeAuthor("William Shakespeare"));

      console.log(ShakespeareTwoBooks);
      ```

      전 코드와 비교했을때 코드 가독성이나 표현력, 재활용성도 높아진다는 점~

<br>

- 필터링

  - filter

    인자로 전달 된 함수의 리턴 값이 true인 경우만 모아서 반환

    ```ts
    const henry: Book[] = ShakespeareTwoBooks.filter((book: Book) =>
    	book.title.includes("헨리")
    );

    console.log(henry);
    ```

<br>

- 누적

  - reduce

    마찬가지로 인자를 함수로 받는다.  
    근데 인자가 2개씩 넘어옴

    ```ts
    const someNumbers: number[] = [10, 5, 3, 14, 56];

    const sumNumber = someNumbers.reduce((a: number, b: number) => a + b, 0);

    console.log(sumNumber);
    ```

    0은 초기값, 처음 인자로 10과 5가 넘어오면 15를 리턴, 이것이 다시 인자가 되어 15 + 3을 연산, 18 리턴, 18 + 14 이런식으로 누적된 값을 최종 반환한다

    **배열 내부에 여러 객체를 하나로 합치는 예제를 보자**

    ```ts
    type SomeObject = {
    	[key: string]: string | number;
    };

    const someObjects: SomeObject[] = [
    	{ border: "none" },
    	{ fontSize: 24 },
    	{ className: "box sm-box" },
    ];

    const someObject: SomeObject = someObjects.reduce(
    	(a: SomeObject, b: SomeObject) => ({ ...a, ...b }),
    	{}
    );

    console.log(someObject);
    ```

<br>

- 유사 배열

  배열이지만 데이터를 여러개 갖고 있고, 순서와 몇개가 들어있는지 알 수 있는 형태로 배열과 같다. 하지만 배열에서 제공하는 도구(메서드)는 사용할 수 없는 개념

  ```ts
  function sumNumbers(): number {
  	return Array.from(arguments).reduce((a: number, b: number) => a + b, 0);
  }

  console.log(sumNumbers(10, 20, 30, 40, 50));

  // 위 문법보다 아래처럼 코딩하는 편이 바람직~
  function sumNumbersForTypeScript(...args: numbers[]): number {
  	return args.reduce((a: number, b: number) => a + b, 0);
  }

  console.log(sumNumbersForTypeScript(10, 20, 30, 40, 50));
  ```

  `Array.from`: 유사배열에 배열로 바꾸는 방법

  참고로 `arguments`는 웬만하면 지양해야 하는 코드스타일임
