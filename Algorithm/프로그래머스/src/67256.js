// 키패드 누르기

function solution(numbers, hand) {
  let answer = '';
  let left = 10;
  let right = 12;

  while(numbers.includes(0)) {
    numbers[numbers.indexOf(0)] = 11;
  }
  
  for(const n of numbers) {
    if(n % 3 === 1) {
      left = n;
      answer += 'L';
    } else if (n % 3 === 0) {
      right = n;
      answer += 'R';
    } else {
      let distCheck = 0;
      let lCopy = left;
      let rCopy = right;

      // 좌우 거리비교로 손 정하는 부분
      if(left % 3 !== 2) {distCheck -= 1, lCopy += 1};
      if(right % 3 !== 2) {distCheck += 1, rCopy -= 1};
      while(true) {
        if(n !== lCopy) {
          (n > lCopy) ? (lCopy += 3, distCheck -= 1) : (lCopy -= 3, distCheck -= 1);
        } else {
          break;
        }
      }
      while(true) {
        if(n !== rCopy) {
          (n > rCopy) ? (rCopy += 3, distCheck += 1) : (rCopy -= 3, distCheck += 1);
        } else {
          break;
        }
      }

      if(distCheck < 0) {
        right = rCopy;
        answer += 'R'
      } else if(distCheck > 0) {
        left = lCopy;
        answer += 'L'
      } else {
        if(hand[0] === 'r') {
          answer += 'R';
          right = rCopy;
        } else {
          answer += 'L';
          left = lCopy;
        }
      }
      
    }

  }

  return answer;
}

// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
