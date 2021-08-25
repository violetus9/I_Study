## Storage

HTML5에서 추가된 저장소란 개념임, Local과 Session 저장소가 있다~

---

### Local Storage

<br>

- 쿠키의 단점을 보완해서 만든 기술(보안이 더 좋다던가 저장공간이 더 넓다던가)

- key, value로 이뤄진 데이터 파일이다.

  _기본적인 원시 타입을 저장할 수 있지만 모두 문자열로 변환된다_

- 서버의 자원이 사용할 것이므로 서버의 공간이 필요

- 기기마다 차이가 있지만 대략 모바일 2.5MB, 데탑 5~10MB정도 저장 가능

- 탭간 정보를 공유한다.

- Local Storage는 만료 기한이 없다(지가 삭제하지 않는 한, 그렇기에 사용자 설정을 저장하거나, 브라우저의 끄고켬에 정보가 유실되지 않는다)

  _사이트 재 방문시 이전 정보를 참고할 수 있으므로 활용도가 높음_

<br>

**사용은 요런식**

```js
window.localStorage.setItem("key", "value");
window.localStorage.getItem("key");
window.localStorage.removeItem("key");
window.localStorage.clear();
```

당연한 얘기지만 JSON 객체를 저장하기 위해선 반드시 `.stringify` 해줘야하고 받을땐 다시 `.parse`하는거 잊지말기!

<br>

---

### Session Storage

<br>

- key, value 쌍의 데이터 객체

- 클라이언트 단에 저장되므로 중요 정보를 담지 말자

- 서버로 값을 전송하지 않기에 서버의 부하를 줄일 수 있다.

- 브라우저 탭마다 개별 저장된다. 만일 로그인을 세션을 통해 구현했다면 창마다 로그인 상황이 다를 수 있다는 점

- 브라우저 종료 시 정보를 휘발시킨다. 만료기한이 브라우저 종료이기에 종료 전까지 유지가 된다는 것(새로고침, 페이지 복구시에도 유지).

<br>

**사용**

```js
window.sessionStorage.setItem("key", "value");
window.sessionStorage.getItem("key");
window.sessionStorage.removeItem("key");
window.sessionStorage.clear();
```
