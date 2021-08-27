// js서 비동기는 순차적 실행되지 않는 코드(...콜백함수)
// 비동기는 언젠가 실행이 되기 때문에 그 때를 대비하여 잘 짜는 습관이 있어야 한다

let 바디 = document.body;

let 숫자후보;
let 숫자배열;

function 숫자뽑기() {
  숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  숫자배열 = [];
  for (i = 0; i < 4; i++) { // 함수형에서 배운대로 for of 4 로 한다면 4는 iterable 이 아니기에 순회하지 않는듯
    let 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0]; // 스플은 배열로 뽑아내기에 인덱스를 지정한다
    숫자배열.push(뽑은것);
    // unshift, shift, push, pop 있어, 특징 찾아봐
  }
  // 문자.split(구분자) >> 배열
  // 배열.join(구분자) >> 문자
}

숫자뽑기();

let 결과 = document.createElement('h1');
바디.append(결과);
let 폼 = document.createElement('form');
document.body.append(폼);
let 입력창 = document.createElement('input');
입력창.type = 'text';
입력창.maxLength = 4;
폼.append(입력창);
let 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);


let 틀린횟수 = 0;
// 엔터 쳤을때(비동기, 언제 실행될지 모르는 부분)
폼.addEventListener('submit', function 비동기(이벤트) {
  이벤트.preventDefault();
  let 답 = 입력창.value;
  console.log('답=' + 답, '숫자배열=' + 숫자배열, '둘비교=' + 답 === 숫자배열.join(''));
  if (답 === 숫자배열.join('')) {
    결과.textContent = '홈런';
    입력창.value = '';
    입력창.focus();
    숫자뽑기();
    틀린횟수 = 0;
  } else {
    let 답배열 = 답.split('');
    let 스트라이크 = 0;
    let 볼 = 0;
    틀린횟수 += 1;
    console.log(답배열, 숫자배열);
    if (틀린횟수 > 10) {
      결과.textContent = '기회 소진, 답 = ' + 숫자배열.join(',');
      입력창.value = '';
      입력창.focus();
      숫자뽑기();
      틀린횟수 = 0;
    } else {
      for (let i = 0; i < 3; i += 1) {
        if (Number(답배열[i]) === 숫자배열[i]) {
          console.log(답배열[i], 숫자배열[i]);
          스트라이크 += 1;
        } else if (숫자배열.indexOf(Number(답배열[i])) > -1) {  // indexOf가 false인 경우 -1을 리턴
          console.log(답배열[i], 숫자배열[i], 숫자배열.indexOf(Number(답배열[i])));
          볼 += 1;
        }
      }
      결과.textContent = 스트라이크 + 'S' + 볼 + "B";
      입력창.value = '';
      입력창.focus();
    }

  }

});

// 까지가 수업 내용이었는데 실행해보면 스트라이크 잡아내는 과정에서 볼을 무시하는 경우가 생김
// 제대로 작동하려면 볼에대한 코드 수정할 필요가 있다