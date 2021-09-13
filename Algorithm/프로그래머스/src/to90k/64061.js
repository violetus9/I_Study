// 크레인 인형뽑기 게임

function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for(let i of moves) {
    let flag = true;
    let line = 0;
    while(flag) {
      if(line === board.length) break;
      if(board[line][i-1] === 0) {
        line++;
      } else {
        if(stack[stack.length - 1] === board[line][i-1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[line][i-1]);
        }
        flag = false;
        board[line][i-1] = 0;
      }
    }

  }

  return answer;
}


