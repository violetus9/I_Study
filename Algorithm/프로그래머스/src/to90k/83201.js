// 상호 평가

function solution(scores) {
	let answer = "";
	const row = scores.length;
	const col = scores[0].length;

	for (let i = 0; i < col; i++) {
		let isMax = 0;
		let isMin = 999;
		let sum = 0;
		for (let j = 0; j < row; j++) {
			// 본인 제외
			if (i === j) continue;
			// 최소
			if (scores[j][i] < isMin) isMin = scores[j][i];
			// 최대
			if (scores[j][i] > isMax) isMax = scores[j][i];

			sum += scores[j][i];
		}

		let avg = 0;
		if (scores[i][i] > isMax || scores[i][i] < isMin) {
			avg = sum / (row - 1);
		} else {
			avg = (sum + scores[i][i]) / row;
		}

		if (avg >= 90) answer += "A";
		if (avg >= 80 && avg < 90) answer += "B";
		if (avg >= 70 && avg < 80) answer += "C";
		if (avg >= 50 && avg < 70) answer += "D";
		if (avg < 50) answer += "F";
	}

	return answer;
}

console.log(
	solution([
		[100, 90, 98, 88, 65],
		[50, 45, 99, 85, 77],
		[47, 88, 95, 80, 67],
		[61, 57, 100, 80, 65],
		[24, 90, 94, 75, 65],
	])
);
console.log(
	solution([
		[50, 90],
		[50, 87],
	])
);
console.log(
	solution([
		[70, 49, 90],
		[68, 50, 38],
		[73, 31, 100],
	])
);

console.log(
	solution([
		[90, 90, 90, 90],
		[70, 70, 70, 70],
		[90, 90, 90, 90],
		[70, 70, 70, 70],
	])
);
