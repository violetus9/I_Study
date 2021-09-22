// 튜플

function solution(s) {
	const answer = {};

	const ordered = s
		.match(/[^{}]+/g)
		.filter((e) => e !== ",")
		.map((e) => e.split(","));

	for (const each of ordered) {
		for (const unit of each) {
			if (!answer[unit]) {
				answer[unit] = 1;
			} else {
				answer[unit] += 1;
			}
		}
	}

	return Object.entries(answer)
		.sort((a, b) => b[1] - a[1])
		.map((e) => parseInt(e));
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
