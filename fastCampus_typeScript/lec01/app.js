// 중복이 되는 요소는 유지보수에 유용하지 못하다, 묶어주자
const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
// 변경의 여지가 있는 것은 변수로 빼두는 것이 좋다
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';

const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false);

// data 가져옴
ajax.send();

// data 처리(response to Object)
const newsFeed = JSON.parse(ajax.response);

const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
  const id = location.hash.substr(1);
  ajax.open('GET', CONTENT_URL.replace('@id', id), false);
  ajax.send();

  const newsContent = JSON.parse(ajax.response);
  const title = document.createElement('h1');

  title.innerHTML = newsContent.title;
  content.appendChild(title);
  console.log(newsContent);
});

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

  a.addEventListener('click', function () { });
  li.appendChild(a);
  ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);
