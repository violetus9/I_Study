// 문자열 내 p와 y의 개수

function solution(s) {
	const answer = true;
	let cnt = 0;

	s = s.toLowerCase();

	for (const i of s) {
		if (i === "p") {
			cnt += 1;
		} else if (i === "y") {
			cnt -= 1;
		}
	}

	return cnt === 0 ? answer : !answer;
}

console.log(solution("aYYYSSaaSS"));
