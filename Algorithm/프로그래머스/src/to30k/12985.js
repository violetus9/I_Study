// 예상 대진표

function solution(n, a, b) {
	let answer = 0;

	while (a !== b) {
		answer += 1;
		a = Math.ceil(a / 2);
		b = Math.ceil(b / 2);
	}

	return answer;
}

// [1, 2, 3, A, 5, 6, B, 8]
// [2, A, 6, B]
// [A, B] >> 3

// a = 4, b = 7
// floor
// 2 3
// 1 1
// ceil
// 2 4
// 1 2
// 1 1

// 3 7
// f
// 1 3
// 0 1
// 0 0
// c
// 2 4
// 1 2
// 1 1

console.log(solution(8, 4, 7));
