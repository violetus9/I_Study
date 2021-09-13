// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let answer = [7, 7];

  for(let i in lottos) {
    if(win_nums.includes(lottos[i])) {
      answer[0] -= 1;
      answer[1] -= 1;
    }

    if(!lottos[i]) {
      answer[0] -= 1;
    }
  }

  for(let i in answer) {
    if(answer[i] === 7) answer[i] = 6;
  }

  return answer;
}

