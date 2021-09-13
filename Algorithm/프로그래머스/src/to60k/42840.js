// 모의고사

function solution(answers) {
  const answer = [];
  const challenger = {
    p1: [1, 2, 3, 4, 5],
    p2: [2, 1, 2, 3, 2, 4, 2, 5],
    p3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };
  const { p1, p2, p3 } = challenger;
  let point = [0, 0, 0];
  
  for(let i = 0; i < answers.length; i++) {
    if(answers[i] === p1[i%5]) point[0]++;
    if(answers[i] === p2[i%8]) point[1]++;
    if(answers[i] === p3[i%10]) point[2]++;
  }

  for(let i = 0; i < point.length; i++) {
    if(point[i] === Math.max(...point)) {
      answer.push(i + 1);
    }
  }

  return answer;
}
