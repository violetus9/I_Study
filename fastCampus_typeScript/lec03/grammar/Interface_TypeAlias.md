## 인터페이스와 타입 별칭

TS에서 타입을 지정하는 두가지 방법이 있다

1. 인터페이스
2. 타입 별칭(type alias)

<br>

```javascript
let x: number = 10;
```

위처럼 선언했다고 하면 number라는 정보 외에 x가 의미하는 것이 좌표인지 크기인지 알 수 없다. 변수명을 `xPosition` 이라 생성해 의미를 부여하는 방법도 있지만 type alias를 이용할 수도 있다.

---

<br>

- **type alias 지정**

  ```javascript
  export type YesOrNo = "Y" | "N";
  ```

  이렇게 지정해준다면 YesOrNo라는 타입은 Y나 N 둘중 하나만 들어갈 수 있는 타입이 된다.

  - enum

    ```javascript
    export type YesOrNo = 'Y' | 'N';
    export enum yesOrNo = {'Y', 'N'};
    ```

    type은 컴파일시 해당하는 애들이 있나 확인하는 용도이고,  
     enum은 실제로 데이터이고 런타임시 값이 다 들어가게 된다(지정된 인덱스가)

  - 함수도 타입지정 가능

    ```javascript
    export type FooFunction = () => string;
    ```

<br>

- **Interface**

  type alias와 유사하나 문법이 조금 달라

  ```ts
  // type.ts
  export type Name = string;

  export interface IUser {
  	readonly id: number;
  	readonly name: Name; // type alias와 interface는 섞어쓰기 가능하단거
  	email: string;
  	receiveInfo: boolean;
  	active: YesOrNo;
  }

  export interface IUser {
  	address?: string;
  }
  ```

  _`address?`는 옵셔널이라고 값이 없어도 되는데 있으면 string이다란 뜻_

  이렇게 객체에 대한 형태를 지정해주고  
   사용은 다음과 같이

  ```ts
  // app.ts
  import * as allTypes from "./type";

  const iUser: allTypes.IUser = {
  	id: 1,
  	name: "홍길동",
  	email: "hong@mail.com",
  	receiveInfo: false,
  	active: "Y",
  };
  ```

<br>

- **type alias로 객체를 만들어보자**

  ```ts
  export type TUser = {
  	readonly id: number;
  	readonly name: Name;
  	email: string;
  	receiveInfo: boolean;
  	active: YesOrNo;
  };

  // export type TUser = {
  //  address?: string;
  // }
  ```

  문법적인 차이 말고는 뭐 없다  
  다만 주석처리한 부분을 보면 같은 이름에대한 정의는 오류라고 감지하기에 웬만하면 하나의 문맥에 선언하는 것이 좋다

<br>

- interface 상속

  ```ts
  export interface IUserProfile extends IUser {
  	profileImage: string;
  	github?: string;
  	twitter?: string;
  }
  ```

  extends로 확장할 수 있다. 상위 속성을 모두 사용하게 된다.

  - type alias도 있다

    ```ts
    export type TUserProfile = IUser & {
    	profileImage: string;
    	github?: string;
    	twitter?: string;
    };
    ```

    IUser가 왔듯, type alias와 인터페이스는 상호적으로 사용이 가능해

  - 여러개를 합칠 수도 있다.

    ```ts
    export interface IStyle extends Color, Display, Geometry {
    	tagName: string;
    }

    export type TStyle = Color &
    	Display &
    	Geometry & {
    		tagName: string;
    	};
    ```

<br>

- 함수의 규격

  ```ts
  export interface IGetApi {
  	(url: string, search?: string): Promise<string>;
  }

  export type TGetApi = {
  	(url: string, search?: string): Promise<string>;
  };
  ```

  괄호부는 인자며 콜론 뒤는 반환값이다  
  alias 이용시 리턴값은 화살표형 함수와 일반 형태가 다르다 확인해보자.

  <br>

- 인터페이스는 public, 공개속성을 기술한다

<br>

- class인 경우 인스턴스를 위한 생성자 호출

  클래스의 규격과 생성자가 만드는 인스턴스의 규격이 미묘하게 다를 수 있다.  
  인터페이스를 이용해 생성자의 규격을 기술할 수 있다.

  ```ts
  export interface IRectConstructor {
  	new (x: number, y: number, width: number, height: number): IRect;
  }
  ```

<br>

- **그래서 뭘 써야할까?**

  원칙을 세워서 쓰는 것이 좋다. 둘의 구체적인 차이라고 하면 인터페이스에 없는 내용이 TA에 들어있는 경우가 있다. 그런 맥락에서 데이터를 기술할 때 Type Alias를 쓰고 메소드나 구체적 행위를 포함한 객체를 디자인 할 때는 인터페이스 위주로 쓰는 방법이 있다.  
  클래스를 쓴다는 것은 당연히 데이터나 메서드를 포괄하기에 인터페이스를 쓰는 편이 자연스럽다
