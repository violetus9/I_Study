// 화면처리 > 라우터 (중계기) : 상황별 화면을 중계하는 역할

// 중복이 되는 요소는 유지보수에 유용하지 못하다, 묶어주자
const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
// 변경의 여지가 있는 것은 변수로 빼두는 것이 좋다 (data)
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
// 공유 상태값
const store = {
  currentPage: 1,
};

function getData(url) {
  ajax.open('GET', url, false);
  // data 가져옴
  ajax.send();

  return JSON.parse(ajax.response);
}

function newsFeed() {
  // data 처리(response to Object)
  const newsFeed = getData(NEWS_URL);

  const newsList = [];

  newsList.push('<ul>');
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {

    // 아이러니하게도 DOM 사용에 대한 직관성 결여의 해결은 DOM 사용을 자제하는것. (문자열을 이용하자!)
    // 설령 양이 좀 늘어나게 되더라도 가독성이 좋은 것이 좋은 듯 하다.
    newsList.push(`
  <li>
    <a href="#/show/${newsFeed[i].id}">
      ${newsFeed[i].title} (${newsFeed[i].comments_count})
    </a>
  </li>
  `);
  }

  newsList.push('</ul>');
  newsList.push(`
    <div>
      <a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a>
      <a href="#/page/${store.currentPage + 1}">다음 페이지</a>
    </div>
  `);

  container.innerHTML = newsList.join('');
}

function newsDetail() {
  const id = location.hash.substr(7);

  const newsContent = getData(CONTENT_URL.replace('@id', id));
  const title = document.createElement('h1');

  container.innerHTML = `
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#/page/${store.currentPage}">목록으로</a>
    </div>
  `;

  title.innerHTML = newsContent.title;
  content.appendChild(title);
  // console.log(newsContent);
}

function router() {
  const routePath = location.hash;

  if (routePath === '') {
    newsFeed();
  } else if (routePath.indexOf('#/page/') >= 0) {
    store.currentPage = Number(routePath.substr(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener('hashchange', router);

router();




