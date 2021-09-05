// 시저 암호

function solution(s, n) {
  let answer = '';

  // 따져야할 요소
  // [대소문자, 공란 여부]

  for (const i of s) {
    // i의 아스키넘버
    let ascI = i.charCodeAt();

    if (ascI >= 65 && ascI + n <= 90 || ascI >= 97 && ascI + n <= 122) {
      answer += String.fromCharCode(ascI + n);
    } else if (ascI + n > 90 || ascI + n > 122) {
      answer += String.fromCharCode(ascI + n - 26);
    } else {
      answer += i;
    }
  }

  return answer;
}