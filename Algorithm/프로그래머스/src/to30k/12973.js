// 짝지어 제거하기

function solution(s) {
	const answer = [];

	for (let i = 0; i < s.length; i++) {
		if (answer[answer.length - 1] !== s[i]) {
			answer.push(s[i]);
		} else {
			answer.pop();
		}
	}

	return answer.length > 0 ? 0 : 1;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
