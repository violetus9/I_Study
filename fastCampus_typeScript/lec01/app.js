// 중복이 되는 요소는 유지보수에 유용하지 못하다, 묶어주자
const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
// 변경의 여지가 있는 것은 변수로 빼두는 것이 좋다 (data)
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';

const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

function getData(url) {
  ajax.open('GET', url, false);
  // data 가져옴
  ajax.send();

  return JSON.parse(ajax.response);
}

// data 처리(response to Object)
const newsFeed = getData(NEWS_URL);

const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
  const id = location.hash.substr(1);

  const newsContent = getData(CONTENT_URL.replace('@id', id));
  const title = document.createElement('h1');

  title.innerHTML = newsContent.title;
  content.appendChild(title);
  // console.log(newsContent);
});

for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');
  const li = document.createElement('li');
  const a = document.createElement('a');

  // 아이러니하게도 DOM 사용에 대한 직관성 결여의 해결은 DOM 사용을 자제하는것. (문자열을 이용하자!)
  // 설령 양이 좀 늘어나게 되더라도 가독성이 좋은 것이 좋은 듯 하다.
  div.innerHTML =
    `
  <li>
    <a href="#${newsFeed[i].id}">
      ${newsFeed[i].title} (${newsFeed[i].comments_count})
    </a>
  </li>
  `

  ul.appendChild(div.children[0]);
  // or div.firstElementChild
}

container.appendChild(ul);
container.appendChild(content);




