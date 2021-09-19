// 행렬 테두리 회전하기

function solution(rows, columns, queries) {
	const answer = [];

	const stage = Array.from({ length: rows + 1 }, (v1, i1) =>
		Array.from({ length: columns + 1 }, (v2, i2) =>
			i1 === 0 || i2 === 0 ? 0 : i2 + (i1 - 1) * columns
		)
	);

	queries.forEach((e) => {
		const [x1, y1, x2, y2] = e;
		const out = stage[x1][y1];
		let min = out;
		// 공란을 뒤에서 하나씩 채우기
		// 세로 가로 세로 가로순
		for (let i = x1; i < x2; i++) {
			if (stage[i + 1][y1] < min) {
				min = stage[i + 1][y1];
			}
			stage[i][y1] = stage[i + 1][y1];
		}
		for (let i = y1; i < y2; i++) {
			if (stage[x2][i + 1] < min) {
				min = stage[x2][i + 1];
			}
			stage[x2][i] = stage[x2][i + 1];
		}
		for (let i = x2; i > x1; i--) {
			if (stage[i - 1][y2] < min) {
				min = stage[i - 1][y2];
			}
			stage[i][y2] = stage[i - 1][y2];
		}
		for (let i = y2; i > y1; i--) {
			if (stage[x1][i - 1] < min) {
				min = stage[x1][i - 1];
			}
			stage[x1][i] = stage[x1][i - 1];
		}
		stage[x1][y1 + 1] = out;
		answer.push(min);
		// console.log(stage);
	});

	return answer;
}

console.log(
	solution(6, 6, [
		[2, 2, 5, 4],
		[3, 3, 6, 6],
		[5, 1, 6, 3],
	])
);
console.log(
	solution(3, 3, [
		[1, 1, 2, 2],
		[1, 2, 2, 3],
		[2, 1, 3, 2],
		[2, 2, 3, 3],
	])
);
console.log(solution(100, 97, [[1, 1, 100, 97]]));
