// 음양 더하기

function solution(absolutes, signs) {
  let answer = 0;

  for(let i in signs) {
    if(signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }

  return answer;
}