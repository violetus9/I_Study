## parceljs

<br>

파일 변화를 자동으로 다시 빌드하며 바른 모듈 교체를 지원하는 내장 개발용 서버가 있기에 빠른 개발이 가능해진다. 진입 파일을 지정하면 끝.

설치는 `npm i -g parcel-bundler`

기본 포트 변경 `-p <port number>`

만일 본인 소유의 서버가 없거나 오로지 클라이언트 렌더링 어플리케이션이라면 개발용 서버를 사용하는 것을 추천.

서버가 없다? 그럼 watch 모드를 통해 구동 가능하다.

`parcel watch index.html`, but 웹 서버를 시동하지는 않으니 참고

<br>

빌드 준비가 완료되었다면 `build` 모드로 `watch` 모드를 해제하며 한번 빌드한다.  
moreInfo: https://ko.parceljs.org/production.html

<br>

---

### How it works

<br>

1. **Constructing the asset tree**

   parcel은 하나의 진입 asset을 입력으로 받는다. 진입점은 어느 유형이라도 가능하며 parcel 자체적으로 다양한 asset 유형이 정의되어 있다. asset이 분석(parse)되면 의존 요소를 추출하며 최종 컴파일 형태로 변환된다. 이후 에셋 트리 구축

  <br>

2. **Constructing the bunle tree**

   asset은 구축된 이후 번들 트리로 놓이게 된다. 진입 asset을 위한 번들이 만들어지고 코드 분할을 발새시키는 동적 import()를 위한 하위 번들을 생성한다.

   형제 번들은 다른 유형 asset이 import될 때 만들어진다. 예를 들면 CSS파일을 Javascript가 import 하는 경우, 대응되는 Javascript 형제 번들 내부에 위치한다.

   하나 이상의 번들서 asset이 필요케 되면, 번들 트리 내 가장 가까운 부모 번들로 끌어 올려지기에 중복 포함되는 경우는 없을 것.

  <br>

3. **Packaging**

   번들 트리 생성 이후 각 번들은 packager에 의해 특정 유형의 파일로 작성되는데, packager는 브라우저로 로드되는 최종 파일 내부에서 각 asset이 어떻게 합쳐질지 알고있다.

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

github

https://github.com/parcel-bundler/parcel
