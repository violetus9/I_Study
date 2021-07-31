## 참조와 복사

값을 변수로 할당할 때 변수와 변수 사이에 그 값이 이동하는 메커니즘과 관련

<br>

```javascript
let a = 10;
let b = a;
```

이 때, a와 b의 10은 복사된 개념이기에 다른 10이라고 할 수 있다.  
 b를 바꾸어도 a는 변하지 않는다는 것이다.  
 숫자, 문자열, boolean, null, undefined와 같은 기본형 데이터 타입은 모두 값이 복사된다.

<br>

그럼 참조라는것은?

```javascript
let o = {
	isLoading: false,
};
let o2 = o;
```

o2.isLoading = true; 를 실행하면 원본조차 변경이 되는 것을 확인할 수 있다.

> 객체는 유니크하며 언제나 하나만 존재한다는 것

<br>

- 예시

  ```javascript
  let o = {
  	isLoading: false,
  };

  function foo(o) {
  	o.isLoading = true;
  }

  foo(o);
  ```

  인자로 넘기는 것이 객체일때 참조 메커니즘이 작용됨

**무엇 때문에 중요하다고 하는걸까?**

객체가 값이 바뀌지 않아야 함을 전제로 하는 코드상 여러 활용에서 이 개념이 잘 잡혀있지 않으면 반드시 오류를 발생시키기 때문
