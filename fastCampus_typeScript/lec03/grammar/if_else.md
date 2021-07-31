## 조건문

if와 switch문이 있다

<br>

- if

- switch

  ```javascript
  let age = 2;

  switch (age) {
  	case 1:
  		console.log(1);
  	case 2:
  		console.log(2);
  	case 3:
  		console.log(3);
  	default:
  		console.log("??");
  		break;
  }
  ```

  case문은 일치 케이스까지 이동한 후 이후 break를 만나기 전까지 모두를 실행한다.

  - 전형적으로 어느 값을 비교하며 일치할 때마다 동작을 지정해 줄 때 사용한다.(즉, 완전 같아야하는 '매칭'의 경우)
