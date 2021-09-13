// 정수 내림차순으로 배치하기

function solution(n) {
	let answer = "";

	n = [...(n + "")].sort().reverse().join("");
	for (const i of n) {
		answer += i;
	}

	return parseInt(answer);
}
