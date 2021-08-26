// 문자열을 정수로 바꾸기

function solution(s) {
	const answer = 0;

	if (s[0] === "-") {
		const realNum = Number(s.slice(1, s.length + 1));
		return 0 - realNum;
	} else if (s[0] === "+") {
		return Number(s.slice(1, s.length + 1));
	} else {
		return Number(s);
	}
}

// console.log(solution("+123"));
// console.log(solution("-123"));
// console.log(solution("123"));
