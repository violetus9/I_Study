// 화면처리 > 라우터 (중계기) : 상황별 화면을 중계하는 역할

// 객체 데이터 형태의 유형을 정의
interface Store {
  currentPage: number;
  feeds: NewsFeed[];
}
// 공통부를 따로 빼기
interface News {
  readonly id: number;
  readonly time_ago: string;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly content: string;
}

interface NewsFeed extends News {
  readonly comments_count: number;
  readonly points: number;
  read?: boolean; // optional한 type이기에 '?'
}

interface NewsDetail extends News {
  readonly comments: NewsComment[];
}

interface NewsComment extends News {
  readonly comments: NewsComment[];
  readonly level: number;
}

// 중복이 되는 요소는 유지보수에 유용하지 못하다, 묶어주자
const container: HTMLElement | null = document.getElementById('root');
const ajax: XMLHttpRequest = new XMLHttpRequest();
const content = document.createElement('div');
// 변경의 여지가 있는 것은 변수로 빼두는 것이 좋다 (data)
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
// 공유 상태값
const store: Store = {
  currentPage: 1,
  feeds: [],
};

// 유연성이 필요한 프로젝트의 경우 app의 상황을 보아 class와 mixin기법중 선택하여 사용한대
function applyApiMixins(targetClass: any, baseClasses: any[]): void {
  baseClasses.forEach(baseClass => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
      const descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, name);
      if(descriptor){
        Object.defineProperty(targetClass.prototype, name, descriptor);
      }
    });
  });
}

class Api {
  getRequest<AjaxResponse>(url: string): AjaxResponse {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url, false);
    ajax.send();

    return JSON.parse(ajax.response);
  }
}

class NewsFeedApi {
  getData(): NewsFeed[] {
    return this.getRequest<NewsFeed[]>(NEWS_URL);
  }
}

class NewsDetailApi {
  getData(id: string): NewsDetail {
    return this.getRequest<NewsDetail>(CONTENT_URL.replace('@id', id));
  }
}

// 코드상 아무런 연관관계가 없기에 두 클래스의 기능이 합성된다는 사실을 명시해주는 부분
interface NewsFeedApi extends Api {};
interface NewsDetailApi extends Api {};

// getData는 두가지 리턴 타입을 가지게 된다, 허나 사용하는 측에선 뭐가 올 지 모호한 상황이다.
// Generic을 이용해보자
// 사용 전 function getData(url: string): NewsFeed[] | NewsDetail
function getData<AjaxResponse>(url: string): AjaxResponse {
  ajax.open('GET', url, false);
  // data 가져옴
  ajax.send();
  return JSON.parse(ajax.response);
}

applyApiMixins(NewsFeedApi, [Api]);
applyApiMixins(NewsDetailApi, [Api]);

// 타입추론: ts가 코드상 상황을 인지하여 i는 number겠거니 추론하여 내부적으로 자동으로 타입지정
function makeFeeds(feeds: NewsFeed[]): NewsFeed[] {
  for (let i = 0; i < feeds.length; i++) {
    feeds[i].read = false;
  }
  
  return feeds;
}

// 타입가드 코드를 항상 작성하는 습관을 들이자, 이 경우 null 체크
function updateView(html: string): void {
  if(container){
    container.innerHTML = html;
  } else{
    console.error('최상위 컨테이너가 없어 UI를 진행하지 못합니다');
  }
}

function newsFeed(): void {
  const api = new NewsFeedApi();
  // data 처리(response to Object)
  let newsFeed: NewsFeed[] = store.feeds;
  const newsList = [];
  let template = `
  <div class="bg-gray-600 min-h-screen">
  <div class="bg-white text-xl">
    <div class="mx-auto px-4">
      <div class="flex justify-between items-center py-6">
        <div class="flex justify-start">
          <h1 class="font-extrabold">Hacker News</h1>
        </div>
        <div class="items-center justify-end">
          <a href="#/page/{{__prev_page__}}" class="text-gray-500">
            Previous
          </a>
          <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
            Next
          </a>
        </div>
      </div> 
    </div>
  </div>
  <div class="p-4 text-2xl text-gray-700">
    {{__news_feed__}}        
  </div>
</div>
  `;

  if (newsFeed.length === 0) {
    // 요 문법 연속해서 대입하는거 봐두자
    newsFeed = store.feeds = makeFeeds(api.getData());
  }

  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {

    // 아이러니하게도 DOM 사용에 대한 직관성 결여의 해결은 DOM 사용을 자제하는것. (문자열을 이용하자!)
    // 설령 양이 좀 늘어나게 되더라도 가독성이 좋은 것이 좋은 듯 하다.
    newsList.push(`
    <div class="p-6 ${newsFeed[i].read ? 'bg-red-500' : 'bg-white'} mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
    <div class="flex">
      <div class="flex-auto">
        <a href="#/show/${newsFeed[i].id}">${newsFeed[i].title}</a>  
      </div>
      <div class="text-center text-sm">
        <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${newsFeed[i].comments_count}</div>
      </div>
    </div>
    <div class="flex mt-3">
      <div class="grid grid-cols-3 text-sm text-gray-500">
        <div><i class="fas fa-user mr-1"></i>${newsFeed[i].user}</div>
        <div><i class="fas fa-heart mr-1"></i>${newsFeed[i].points}</div>
        <div><i class="far fa-clock mr-1"></i>${newsFeed[i].time_ago}</div>
      </div>  
    </div>
  </div>
  `);
  }

  template = template.replace('{{__news_feed__}}', newsList.join(''));
  template = template.replace('{{__prev_page__}}', String(store.currentPage > 1 ? store.currentPage - 1 : 1));
  template = template.replace('{{__next_page__}}', String(store.currentPage + 1));

  updateView(template);
}

function newsDetail(): void {
  const id = location.hash.substr(7);
  const api = new NewsDetailApi();
  const newsContent = api.getData(id);
  let template = `
    <div class="bg-gray-600 min-h-screen pb-8">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/${store.currentPage}" class="text-gray-500">
                <i class="fa fa-times"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="h-full border rounded-xl bg-white m-6 p-4 ">
        <h2>${newsContent.title}</h2>
        <div class="text-gray-400 h-20">
          ${newsContent.content}
        </div>
        {{__comments__}}
      </div>
    </div>
  `;

  for (let i = 0; i < store.feeds.length; i++) {
    if (store.feeds[i].id === Number(id)) {
      store.feeds[i].read = true;
      break;
    }
  }

  updateView(template.replace('{{__comments__}}', makeComment(newsContent.comments)));
}

function makeComment(comments: NewsComment[]): string {
  const commentString = [];

  for (let i = 0; i < comments.length; i++) {
    const comment: NewsComment = comments[i]; // 역시나 중복 코드는 묶어
    commentString.push(`
      <div style="padding-left: ${comment.level * 40}px;" class="mt-4">
        <div class="text-gray-400">
          <i class="fa fa-sort-up mr-2"></i>
          <strong>${comment.user}</strong> ${comment.time_ago}
        </div>
        <p class="text-gray-700">${comment.content}</p>
      </div>      
    `);

    if (comment.comments.length > 0) {
      commentString.push(makeComment(comment.comments));
    }
  }

  return commentString.join('');
}

function router(): void {
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




