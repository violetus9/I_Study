## application의 본질

    간단히 말해서 입력에 대한 처리, 그리고 그 결과를 출력하는 것

## frontend

    "look & feel" , 중요!

---

# T I P S

- 바뀔 가능성이 있는 코드는 변수에 넣어 관리한다

  ```javascript
  const A_URL = "https://api.abcdefghijklmnop.com/a/b/c.json";
  const B_URL = "https://api.abcdefghijklmnop.com/a/b/d.json";
  const ajax = new XMLGttpRequest();

  ajax.open("GET", URL, false); // false = 비동기
  ```

- 반복되는 코드는 하나로 통합하여 관리하는 편이 좋다

  ```javascript
  const container = document.getElementById("root");
  const ul = document.createElement("ul");
  const content = document.createElement("div");

  container.appendChild(ul);
  container.appendChild(content);
  ```

  - 함수

  ```javascript
  function getData(url) {
  	ajax.open("GET", url, false);
  	ajax.send();
  	return JSON.parse(ajax.response);
  }
  ```

- 마크업 구조는 분명 복잡해진다, 사전에 구조화를 잘 해서 관리를 시작해야 함

  > ex. DOM API 사용을 지양하고 문자열을 통한 UI 구성

  ```javascript
  for (let i = 0; i < 10; i++) {
  	const div = document.createElement("div");
  	div.innerHTML = `
      <li>
        <a href="#${someValue[i].id}">
          ${someValue[i].title} [${someValue[i].comments_count}]
        </a>
      </li>
    `;
  	ul.appendChild(div.firstElementChild);
  }
  ```

  _결국 리팩토링리팩토링리팩토링리팩토링 : 양은 늘어도 복잡도는 늘지 않는 방향으로!_
