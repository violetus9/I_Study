// let 후보군 = Array(45);
// 추천하지는 않는 방법이지만 이렇게도 만들 수 있다고 한다~
// 45개의 공간이 생긴다. '후보군'에는 45개의 empty가 할당된다
// empty의 특징 : 반복문 불가능
// let 필 = 후보군.fill();
// fill 메서드는 IE에서 작동되지 않는다
// console.log(후보군);

// 필.forEach(function (요소, 인덱스) {
//   console.log(요소, 인덱스 + 1);
//   필[인덱스] = 인덱스 + 1;
//   // 억지스런 방법이다. 더 좋은 방법이 있기 때문
// });

// mapping
// let 맵 = 필.map(function (요소, 인덱스) {
//   return 인덱스 + 1;
// });

// 줄여보자

let 후보군 = Array(45).fill().map(function (요소, 인덱스) {
  return 인덱스 + 1;
});
console.log(후보군);

let 셔플 = [];
while (후보군.length > 0) {
  // 수학적으로 완벽한 랜덤은 아닌 것임, 상용화할 때 쓰지 않도록 해야함
  let 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
  셔플.push(이동값);
}
console.log(셔플);

let 보너스 = 셔플[셔플.length - 1];
let 당첨숫자들 = 셔플.slice(0, 6);
// 아래 정렬법 return p - c 에 대한 설명
// 뺀 결과가 0보다 크면 순서를 바꾼다.
console.log('당첨숫자들', 당첨숫자들.sort(function (p, c) { return p - c; }), '보너스', 보너스);



// for (let i = 0; i < 당첨숫자들.length; i++) {
//   setTimeout(function 콜백함수() {
//     let 공 = document.createElement('div');
//     공.textContent = 당첨숫자들[i];
//     결과창.appendChild(공);
//   }, 1000);
// }
// 위 for문에서 실행해보면 클로저(closure)에 관한 문제(반복문 속 비동기 사용 시)

let 결과창 = document.getElementById('결과창');

function 공색칠하기(숫자, 결과창) {
  let 공 = document.createElement('div');
  공.textContent = 숫자;
  공.style.display = 'inline-block';
  공.style.border = '1px solid black';
  공.style.borderRadius = '10px';
  공.style.width = '20px';
  공.style.height = '20px';
  공.style.textAlign = 'center';
  공.style.marginRight = '10px';
  결과창.appendChild(공);
}

setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[0], 결과창);
}, 1000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[1], 결과창);
}, 2000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[2], 결과창);
}, 3000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[3], 결과창);
}, 4000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[4], 결과창);
}, 5000);
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[5], 결과창);
}, 6000);

setTimeout(function 비동기콜백함수() {
  let 칸 = document.getElementsByClassName('보너스')[0];
  공색칠하기(보너스, 칸);
}, 7000);



