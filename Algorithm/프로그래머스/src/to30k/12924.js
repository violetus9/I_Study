// 숫자의 표현

function solution(n) {
	let answer = 0;
	let sum = 0;
	let ini = 0;

	for (let i = 1; i < n + 1; i++) {
		sum = 0;
		ini = i;
		while (sum <= n) {
			sum += ini;
			if (sum === n) answer++;
			ini++;
		}
	}
	return answer;
}
