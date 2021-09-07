// 가장 큰 수

function solution(numbers) {
	const answer = numbers
		.map((e) => e + "")
		.sort((a, b) => b + a - (a + b))
		.join("");

	return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0]));

/* note */

// String concatenation
// Sorting, string
