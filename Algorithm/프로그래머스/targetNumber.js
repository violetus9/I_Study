function solution(numbers, target) {
  let answer = 0;

  // 일...단 양+음 해서 numbers.length에 대해 조합써서 처리하고 answer += 하는 방법이 있고
  // 아니면 최적해 하나 생기면 담아서 하는경우, length 뱉으면 답이니까(이경우 복잡도 올라가겠지)
  /*
              0
            -   +
           - + - +
          -  ...  +
  */
  function checker(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return null;
    }
    checker(idx + 1, sum - numbers[idx]);
    checker(idx + 1, sum + numbers[idx]);
  }

  checker(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
