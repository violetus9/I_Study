// combineReducer : 스토어에 리듀서 여러개 있을 수 있음(리듀서 안에서 하는 일이 어떻게 state가 변하는지 보여준담에
// 마지막 값을 리턴하는게 리듀서인데, 유저, 구독, 코멘트 여러개 state있을 수 있으니 reducer나눠져있을 수 있어)
// combine>> root reducer서 하나로 합쳐줌
// 로그인이나 레지, 코멘트 이런거 만들거임
// 기능 많아질수록 rootReducer가 길어지겠쬬
import { combineReducers } from 'redux';
import user from './user_reducer';

const rootReducer = combineReducers({
  user
})

// 다른 폴더서 쓸 수 있게 디폴트
export default rootReducer;