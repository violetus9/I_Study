// 행렬의 곱셈

function solution(arr1, arr2) {
	const answer = [];
	const row = arr1.length;
	const col1 = arr1[0].length;
	const col2 = arr2[0].length;
	// console.log(row, col);

	// 이런짓 ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ
	// const init = Array(col2).fill(0);
	// for (let i = 0; i < row; i++) {
	// 	answer[i] = init;
	// }

	for (let i = 0; i < row; i++) {
		answer[i] = Array(col2).fill(0);
	}

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col2; j++) {
			for (let k = 0; k < col1; k++) {
				answer[i][j] += arr1[i][k] * arr2[k][j];
			}
		}
	}

	return answer;
}

// 3x2 2x5 = 3x5

console.log(
	solution(
		[
			[1, 4],
			[3, 2],
			[4, 1],
		],
		[
			[3, 3],
			[3, 3],
		]
	)
);
console.log(
	solution(
		[
			[2, 3, 2],
			[4, 2, 4],
			[3, 1, 4],
		],
		[
			[5, 4, 3],
			[2, 4, 1],
			[3, 1, 1],
		]
	)
);
