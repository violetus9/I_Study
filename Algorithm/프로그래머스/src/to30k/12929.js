// 올바른 괄호의 갯수

function solution(n) {
	const dp = Array.from({ length: n + 1 }, (_, i) => (i < 2 ? 1 : 0));
	for (let i = 2; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			dp[i] += dp[j] * dp[i - j - 1];
		}
	}

	return dp[n];
}

// 카탈란 수.. 고딩때 수학시간에 풀었던거...............
// 기억안나서 검색해서 품

console.log(solution(2));
console.log(solution(3));
