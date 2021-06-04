const ajax = new XMLHttpRequest();

// 변경의 여지가 있는 것은 변수로 빼두는 것이 좋다
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';

ajax.open('GET', NEWS_URL, false);

// data 가져옴
ajax.send();

// data 처리(response to Object)
const newsFeed = JSON.parse(ajax.response);

const ul = document.createElement('ul');

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);
