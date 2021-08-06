// K번째수

function solution(array, commands) {
  let answer = [];

  for(let each of commands) {
    answer.push(
      array.slice(each[0] - 1, each[1])
      .sort((a, b) => a - b)[each[2] - 1]
    )
  }

  return answer;
}


console.log(solution([1,5,2,6,3,7,4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));