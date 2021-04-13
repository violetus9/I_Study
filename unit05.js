let 바디 = document.body;
let 테이블 = document.createElement('table');
let 줄들 = [];
let 칸들 = [];
let 턴 = 'X';
let 결과 = document.createElement('div');

// 아래 쓰자니 들여쓰기가 많아지므로 이처럼 빼놓고 정리하는게 좋음
let 비동기콜백 = function (이벤트) {
  // e.target : 클릭된 요소
  console.log(이벤트.target);
  // 줄
  console.log(이벤트.target.parentNode);
  // 테이블
  console.log(이벤트.target.parentNode.parentNode);

  let 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
  let 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
  console.log('몇줄:', 몇줄, '\t 몇칸:', 몇칸);

  // 칸이 이미 채워져 있는지 여부
  if (칸들[몇줄][몇칸].textContent !== '') {
    console.log('빈칸 아님');
  } else {
    console.log('빈칸');
    칸들[몇줄][몇칸].textContent = 턴;

    // 세칸 채웠는지 ? (알고리즘을 모르면 아래와같이 주먹구구식으로 하는 수밖에)
    let 다참 = false;
    // 가로줄 검사
    if (
      칸들[몇줄][0].textContent === 턴 &&
      칸들[몇줄][1].textContent === 턴 &&
      칸들[몇줄][2].textContent === 턴
    ) {
      다참 = true;
    }
    // 세로줄 검사
    if (
      칸들[0][몇칸].textContent === 턴 &&
      칸들[1][몇칸].textContent === 턴 &&
      칸들[2][몇칸].textContent === 턴
    ) {
      다참 = true;
    }
    // 대각선 검사
    if (몇줄 - 몇칸 === 0 || Math.abs(몇줄 - 몇칸) === 2) { // 대각선 검사 필요한 경우
      if (
        칸들[0][0].textContent === 턴 &&
        칸들[1][1].textContent === 턴 &&
        칸들[2][2].textContent === 턴
      ) {
        다참 = true;
      }
    }

    // 다 찼으면
    if (다참) {
      결과.textContent = 턴 + '의 승리';
      // 초기화
      턴 = 'X';
      칸들.forEach(function (티디) {
        티디.forEach(function (티알) {
          디알.textContent = '';
        });
      });
    } else {
      if (턴 === 'X') {
        턴 = 'O';
      } else {
        턴 = 'X';
      }
    }

  }

};

for (let i = 0; i < 3; i++) {
  let 티디 = document.createElement('tr');
  테이블.appendChild(티디);
  줄들.push(티디);
  칸들.push([]);
  for (let j = 0; j < 3; j++) {
    let 티알 = document.createElement('td');
    티알.addEventListener('click', 비동기콜백);
    티디.appendChild(티알);
    칸들[i].push(티알);
  }
}
바디.appendChild(테이블);
바디.appendChild(결과);
console.log('줄들', 줄들, '칸들', 칸들);


