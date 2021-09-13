// 예산

function solution(d, budget) {
	let answer = 0;

	d.sort((a, b) => a - b);

	for (const i of d) {
		if (i > budget) {
			break;
		} else {
			budget -= i;
			answer += 1;
		}
	}

	return answer;
}
