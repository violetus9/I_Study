// 끝말잇기
/*
var 바디 = document.body;
var 단어 = document.createElement('div');
// 편의성, 엔터로 값 넘기게 하기 위한 form
var 폼 = document.createElement('form');

var 입력창 = document.createElement('input');
var 버튼 = document.createElement('button');
var 결과창 = document.createElement('div');
// 세미콜론은 안붙여도 문제되진 않는데 붙여버릇 하기 > 에러방지용
// 안붙여든 붙이든 한방향으로만 일관되게 할것

단어.textContent = '가나다';
버튼.textContent = '입력';

document.body.append(단어);
document.body.append(폼);
폼.append(입력창);
폼.append(버튼);
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수(이벤트) {
  // 새로고침(기본동작) 막기 위함
  // 여기서 '이벤트'는 컴퓨터가 넣어주는 값이라 함
  이벤트.preventDefault();
  if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
    결과창.textContent = '딩동댕';
    단어.textContent = 입력창.value;
    입력창.value = '';
    입력창.focus();
  } else {
    결과창.textContent = '땡';
    입력창.value = '';
    입력창.focus();
  }
});
*/


// 위 addEventListener('a', 'b')인데 'b'부분은 콜백함수
// 이 경우 리스너만 콜백으로 인식하는건지 function (a, b) 하면 b의 func는 콜백이 아닌지?

// 프로젝트에서 콜백지옥이었음 >> async 이거 찾아보기

// console.dir(document.body) >> dom 객체 사용하려면 dir 이용

// js에서는 문자와 문자열의 구분이 없다

// 웬만하면 마우스 안만지게 하는게 사용자 편의성 향상


// 구구단

let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 9);
let res = num1 * num2;

let Body = document.body;
let word = document.createElement('div');
word.textContent = String(num1) + ' * ' + String(num2) + ' = ?';
document.body.append(word);

let Form = document.createElement('form');
document.body.append(Form);
let Input = document.createElement('input');
Form.append(Input);
let Button = document.createElement('button');
Button.textContent = '입력~';
Form.append(Button);
let Result = document.createElement('div');
document.body.append(Result);

// 일반적으로 이벤트리스너가 반복문 역할을 하나, 항상 그런 것은 아니다
Form.addEventListener('submit', function 콜백함수(e) {
  e.preventDefault();
  if (res === Number(Input.value)) {
    Result.textContent = '딩동댕';
    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random() * 9);
    res = num1 * num2;
    word.textContent = String(num1) + ' * ' + String(num2) + ' = ?';

    Input.value = '';
    Input.focus();
  } else {
    Result.textContent = '땡';
    Input.value = '';
    Input.focus();
  }
});





