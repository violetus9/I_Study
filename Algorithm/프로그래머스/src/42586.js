// 기능개발

function solution(progresses, speeds) {
	const answer = [];
	const works = progresses.length;
	const checker = new Array(works).fill(false);
	let pointer = 0;

	// progress
	while (true) {
		for (let i = 0; i < works; i++) {
			progresses[i] += speeds[i];

			if (progresses[i] >= 100) {
				checker[i] = true;
			}
		}

		let cnt = 0;
		while (checker[pointer]) {
			cnt += 1;
			pointer += 1;
		}

		if (cnt) answer.push(cnt);

		if (!checker.includes(false)) break;
	}

	return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
