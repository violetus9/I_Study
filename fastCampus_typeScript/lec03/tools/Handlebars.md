## Handlebars

템플릿 엔진이라고 불리는 라이브러리중 하나.  
템플릿 리터럴을 이용해 문자열을 처리할 수도 있지만 시중엔 많은 라이브러리가 있다. Handlebars는 그중 하나인 것.

<br>

- npm을 이용하거나 CDN을 통해 설치할 수 있다.

  설치가 완료되면 Handlebars라는 객체가 만들어지고 전역에서 사용할 수 있는 상태가 된다

<br>

- `{{}}`를 활용해 데이터를 마킹하는 문법 체게를 가지고 있다.

  ```html
  <!-- 이런식으로 활용해 -->
  <p>{{firstname}} {{lastname}}</p>
  ```

<br>

- 실제 사용 예시를 보면서 배워보자

  ```js
  // app.js
  const source = `
  <div class="entry">
    <h1>{{title}}</h1>
    {{#if hasList}}
    <ul>
      {{#each list}}
        <li>{{title}} - {{director}}</li>
      {{/each}}
    </ul>
    {{else}}
    <div class="jumbotron">
      등록된 영화 목록이 없습니다.
    </div>
    {{/if}}
  </div>
  `;

  // compile이란 메소드는 무언가 작업을 통해 함수로 반환
  // template 함수는 데이터 객체를 받아 템플릿 문자열을 합성하여 최종적인 html을 만들게 된다.
  let template = Handlebars.compile(source);

  let data = {
  	title: "영화",
  	list: [
  		{
  			title: "너의 이름은",
  			director: "신카이 마코토",
  			actors: [
  				"카미키 류노스케",
  				"카미시라이시 모네",
  				"나리타 료",
  				"유우키 아오이",
  			],
  		},
  		{
  			title: " 패신저스",
  			director: "모튼 틸덤",
  			actors: ["제니퍼 로렌스", "크리스 프랫", "마이클 쉰", "로렌스 피시번"],
  		},
  		{
  			title: "사랑하기 때문에",
  			director: "주지홍",
  			actors: ["차태현", "김유정", "서현진", "박근형"],
  		},
  		{
  			title: "내 어깨 위 고양이, 밥",
  			director: "로저 스포티스우드",
  			actors: ["김하늘", "유인영", "이원근"],
  		},
  	],
  };

  // list컴포넌트에 대한 로직은 js로 위임했다.
  data.hasList = data.list.length = 0;

  // 최종적으로 만들어진 html을 DOM 노드로 넣어주는 부분
  document.querySelector("#app").innerHTML = template(data);
  ```

  `{{#if hasList}}`와같은 라이브러리에서 제공된 빌트인 헬퍼라는 함수들이 있다. Handlebars가 기본적으로 포함하는 헬퍼이지만 추가적으로 우리가 무언가를 커스터마이징하여 본인만의 헬퍼를 설계할 수도 있다.
