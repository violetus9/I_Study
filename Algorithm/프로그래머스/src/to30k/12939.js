// 최댓값과 최솟값

function solution(s) {
	const answer = s
		.split(" ")
		.map((v) => v * 1)
		.sort((a, b) => a - b);

	return `${answer.shift()} ${answer.pop()}`;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
