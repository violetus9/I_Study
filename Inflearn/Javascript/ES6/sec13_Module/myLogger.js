export const _ = {
  log(data) {
    if (window.console) console.log(data);
  }
}


// 객체형태로 넘어간다
// 요건 많이 쓸것 같다? 하면 default 추가 후 임포트 구문 수정
export default function log(data) {
  console.log(data);
}


/* utility */
export const getCurrentHour = () => {
  return (new Date).getHours();
}

/* Class */

export class MyLogger {
  constructor(props) {
    this.lectures = ['java', 'i05'];
  }

  getLectures() {
    return this.lectures;
  }

  getTime() {
    return Date.now();
  }
}

