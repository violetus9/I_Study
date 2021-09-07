// 실패율

function solution(N, stages) {
	const answer = [];

	// N: Num of stages, 1 <= N <= 500
	// stages: status, 1 <= stages <= 200,000

	let userNum = stages.length;
	// stages.sort((a, b) => a - b);
	// const level = [...new Set(stages)];

	for (let i = 1; i <= N; i++) {
		const tmp = stages.filter((n) => n === i).length;
		answer.push({ stage: i, failure: tmp / userNum });
		userNum -= tmp;
	}
	// console.log(inform);
	const result = answer.sort((a, b) => b["failure"] - a["failure"]);

	return result.map((i) => i.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
