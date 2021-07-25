import Router from "./core/router";
import {NewsDetailView, NewsFeedView} from './page';
import { Store } from "./store";

// 중복이 되는 요소는 유지보수에 유용하지 못하다, 묶어주자

// Store는 전역 상태로 다루게 되는데, window에 속성을 추가하는 전역 상태 관리 방법이 있다(안권장)
// declare global {
//   interface: Window {
//     store: store;
//   }
// }
// window.store = store;

const store = new Store();
const router: Router = new Router();
const newsFeedView = new NewsFeedView('root', store);
const newsDetailView = new NewsDetailView('root', store);

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView, /page\/(\d+)/);
router.addRoutePath('/show/', newsDetailView, /show\/(\d+)/);