// 최고의 집합

function solution(n, s) {
	if (n > s) return [-1];

	// n 2 s 8
	// 4 4

	// n 2 s 9
	// 4 5

	// n 3 s 10
	// 1 1 8
	// 1 2 7
	// ...
	// 8 1 1

	// 3 3 4? > 36

	// 일단 뭐 알 수 없으니 무조건 중간값의 묶음이 최대라 가정하고 제출해보자
	// 평균 초기화 후 진행하면 될듯

	const answer = Array(n).fill(Math.floor(s / n) + 1);
	s -= answer.reduce((a, b) => a + b, 0);
	// console.log(s);

	for (let i = 0; i < n; i++) {
		if (s === 0) break;

		answer[i] -= 1;
		s += 1;
	}

	return answer;
}

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));

console.log(solution(3, 10));
