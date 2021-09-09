// 가장 큰 정사각형 찾기

/* 효율이 너무 꽝이어서 버려진 풀이 */
// 재귀, 최대부터 탐색, 최대 변 길이 기준 탐색하는 방법
// const boardChecker = (dpArr, keepGoing = true) => {
//   const row = board.length;
//   const col = board[0].length;
// 	let maxLen = Math.max(row, col);
//   let isMax = 0;
//   for (let i = 0; i < maxLen; i++) {
//     if (dpArr[0][i] === 1 && isMax < maxLen) {
//       isMax += 1;
//       continue;
//     } else {

//     }

//   }
// };

function solution(board) {
	// initialize
	const row = board.length;
	const col = board[0].length;
	let maxN = 0;
	if (row === 1 && col === 1) {
		return 1;
	}

	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			if (board[i][j] >= 1) {
				board[i][j] =
					Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
				maxN = maxN > board[i][j] ? maxN : board[i][j];
			}
		}
	}
	// console.log(board);

	return maxN ** 2;
}

console.log(
	solution([
		[0, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
	])
);
console.log(
	solution([
		[0, 0, 1, 1],
		[1, 1, 1, 1],
	])
);

// line sweeping
