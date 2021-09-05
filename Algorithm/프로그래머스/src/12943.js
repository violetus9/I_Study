// 콜라츠 추측

function solution(num) {
	let answer = 0;

	while (num > 1) {
		if (num % 2 === 0) {
			num /= 2;
		} else if (num % 2 === 1) {
			num = num * 3 + 1;
		}

		answer += 1;

		if (answer >= 500 && num !== 1) {
			return -1;
		}
	}

	return answer;
}

console.log(solution(626331));
