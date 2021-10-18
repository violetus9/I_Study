## JS 메모리

기본적으로 Javascript는 객체 생성 시 자동으로 메모리를 할당하고 필요 없어졌을 때 자동으로 해제한다(GC). 하지만 착각해서는 안되는 것이 자동이라고 해서 최적해일 것이라는 생각은 맞지 않다.  
_"어차피 자동으로 해주니까 신경쓰지 말자~ 하면 위험할 수도 있다는 것"_

<br>
<br>

### 메모리 생존주기

거의 모든 언어에서 메모리 생존주기는 비슷한 개념을 가진다.

1. 필요할때 할당
2. 사용(읽기, 쓰기)
3. 필요없을 시 해제

여기서 2번 항목을 제외하면 저수준 언어에서 명시적이고 Javascript와 같은 대부분의 고수준 언어에서는 암묵적으로 작동한다.

<br>

**JS의 메모리 할당**

- 값 초기화

  - JS는 값을 선언함과 동시에 자동으로 메모리를 할당한다.

  ```js
  // 일반적인 ~~를 담기위한 메모리 할당
  const n = 123;
  let s = "asdf";
  const o = {
  	a: 1,
  	b: null,
  };
  const arr = [1, null, "azsd"];
  function f(a) {
  	return a + 2;
  }
  // 함수식 또한 객체를 담기위해 메모리를 할당
  someElement.addEventListener(
  	"click",
  	() => {
  		someElement.style.backgroundColor = "skyblue";
  	},
  	false
  );
  ```

  - 함수 호출을 통해 할당할 수도 있다.

  ```js
  // Date 객체를 위한 메모리 할당
  const d = new Date();
  // DOM 요소를 위한 메모리 할당
  const e = document.createElement("div");
  ```

<br>

- 값 사용

  특별한 것이 없다. 그저 할당된 메모리를 읽고 쓴다는 개념이니까.  
  함수 호출시 함수에 인수를 전달해 수행할 수 있으며 변수나 객체 속성 값을 읽고 쓴다.

<br>

- 할당된 메모리 해제

  메모리 해제 시기는 `할당된 메모리가 더 이상 필요하지 않을 때`인데 이를 알아내기란 쉽지않다.

  저수준 언어에서는 메모리가 필요없어지는 순간을 개발자가 직접 결정하여 해제하는 방식을 취하지만

  고수준 언어에서는 `GC`라는 자동 메모리 관리법을 택한다.  
  GC의 목적을 한 문장으로 요약하면,  
  "할당된 메모리를 추적하여 그중 필요하지 않은 메모리를 골라내 회수하는 것"  
  이다.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

참고

https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management#reference-counting_garbage_collection
