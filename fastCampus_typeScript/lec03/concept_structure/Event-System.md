## 이벤트 시스템

브라우저가 제공하는 시스템, 클라이언트가 어느 시점에 사건을 발생시킬지 모를 때 사용한다.  
 `addEventListener`, 예를들면 클릭이벤트나 드래그와 같은 사건을 말함  
HTML상 node가 중첩되어 있다. 이 상황에서 이벤트가 어떻게 작용되는지를 살펴보고싶다!

- 예시

  ```ts
  function main() {
  	const BUBBLING_PHASE = false;
  	const CAPTURING_PHASE = true;
  	const PHASE_NAME = ["NONE", "CAPTURING", "TARGET", "BUBBLING"];

  	function eventLogger({ target, currentTarget, eventPhase }) {
  		console.log(
  			`${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[eventPhase]}`
  		);
  	}

  	let divs = document.querySelectorAll("div");
  	divs.forEach((div) =>
  		div.addEventListener("click", eventLogger, BUBBLING_PHASE)
  	);
  }

  document.addEventListener("DOMContentLoaded", main);
  ```

  _요런 느낌_

  <br>

  - **Event Bubbling**

    가장 안쪽의 요소에 이벤트가 발생했을 때, 해당 이벤트가 바깥으로 확산되어 나가는 것. 한단계씩 바깥으로 전파된다.

  - **Event Capturing**

    버블링과 정확히 반대되는 개념으로 바깥에서 안쪽으로 전파되는 현상. 안쪽 요소에 이벤트를 발생시켰을 때, 해당 요소 바깥에서 이벤트 발생 요소까지 캡쳐링이 일어난다.  
    예를 들면 택배 포장을 푸는 것이라고 볼 수 있다. 원하는 요소까지 가기 위해 무엇부터 포장을 푸는지를 생각해보면 캡쳐링을 쉽게 이해할 수 있다.

<br>

- 알아야함

  이벤트 루프

## ++

성능 이슈 다룰 때 이벤트 루프가 굉장히 중요하다
