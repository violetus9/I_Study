// 점프와 순간 이동

function solution(n) {
	let answer = 0;

	// n < 100,000,000
	// teleport: distance * 2
	// jump: distance = -battery

	// 무조건 2배수 위치로 가서 텔타는게 경제적

	while (n > 0) {
		if (n % 2 === 0) {
			n /= 2;
		} else {
			n -= 1;
			answer += 1;
		}
	}

	return answer;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
