// 로그인이나 레지스터 기능 만들때 하나하나 해나갈 파일임

import { LOGIN_USER } from "../_actions/types";

// eslint서 익명 내보내기 막아놔서 내가 임시로 이름 지어놨어
export default function temporaryNamed(state = {}, action) {

  // 타입이 많아지고 달라질거라 스위치
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      // eslint-disable-next-line no-unreachable
      break;

    default:
      return state;
  }

}