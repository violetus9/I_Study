// Scope 문제로 인해 tbody 밖으로 빼냄
let tbody = document.querySelector('#table tbody');
let dataset = [];

document.querySelector('#exec').addEventListener('click', function () {
  let hor = parseInt(document.querySelector('#hor').value);
  let ver = parseInt(document.querySelector('#ver').value);
  let mine = parseInt(document.querySelector('#mine').value);
  console.log(hor, ver, mine);

  // 지뢰 위치 뽑기
  let 후보군 = Array(hor * ver)
    .fill()
    .map(function (요소, 인덱스) {
      return 인덱스;
    });
  let 셔플 = [];
  while (후보군.length > 80) {
    let 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
  }
  console.log(셔플);

  // 지뢰 테이블 만들기
  for (let i = 0; i < ver; i++) {
    let arr = [];
    let tr = document.createElement('tr');
    dataset.push(arr);
    for (let j = 0; j < hor; j++) {
      arr.push(1);
      let td = document.createElement('td');
      // 마우스 우클릭시 깃발 구현 >> contextmenu 차단해야
      td.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        // console.log('오른쪽 클릭');
        let 부모tr = e.currentTarget.parentNode;
        let 부모tbody = e.currentTarget.parentNode.parentNode;
        // indexOf 쓰고 싶으나 배열이 아닌 애들한테 적용하는
        let 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
        let 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
        console.log(부모tr, 부모tbody, e.currentTarget, 칸, 줄);
        e.currentTarget.textContent = '!';
        dataset[줄][칸] = '!';
      });
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  // 리액트, 앵귤러, 뷰 이런걸 쓰는 이유가 데이터와 화면을 일치시키기 위해 사용한다고 보면 된다.

  // 지뢰 심기
  for (let k = 0; k < 셔플.length; k++) {
    let 세로 = Math.floor(셔플[k] / 10);
    let 가로 = 셔플[k] % 10;
    console.log(가로, 세로);
    // 화면
    tbody.children[세로].children[가로].textContent = 'X';
    // 따로 관리하는 2차원 배열
    dataset[세로][가로] = 'X';
  }
  console.log(dataset);
  // 어떤 코딩을 하던간 순서도를 기반으로 꾸려나가는게 좋음!
});
// 비동기는 동기코드보다 나중에 실행된다고 함!!!!!!!!

/*

  e.currentTarget, e.target의 차이

  currentTarget : 이벤트 리스너가 달린 아이
  target : 실제 이벤트가 발생한 아이

  이 개념을 좀 더 설명하려면 이벤트 버블링 캡쳐링 이부분을 알아야 하므로
  이정도로 알아두도록 한다.

*/