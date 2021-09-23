// 숫자 게임

function solution(A, B) {
	let answer = 0;

	const a = A.sort((a, b) => a - b);
	const b = B.sort((a, b) => a - b);

	// console.log(a, b);

	let idx = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[idx] < b[i]) {
			answer += 1;
			idx += 1;
		}
	}

	return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));
