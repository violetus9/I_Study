// 3xn 타일링

function solution(n) {
	const dp = Array(n + 1).fill(0);
	dp[0] = 1;
	dp[2] = 3;
	dp[4] = 11;
	const div = 1000000007;

	if (n % 2 === 1) return 0;
	if (n === 0) return 1;
	if (n === 2) return 3;

	for (let i = 4, mid = 0; i <= n; i += 2) {
		mid += 2 * dp[i - 4];
		dp[i] = 3 * dp[i - 2] + mid;

		mid %= div;
		dp[i] %= div;
	}

	return dp[n];
}

// 홀수는 못구함
// n: 2 >> 3
// 다음 짝수로 이행할 때 홀수부분에 걸치는 도형이 있음
// n: 4 >> 3 * 3 (2파생), 2 (4파생)
// n: 6 >> 3 * 3 * 3 (2파생), 3 * 2 (2, 4파생), 2 * 3 (4, 2파생), 2 (6파생)
// n: 8 >> (2222), (224), (422), (44), (26), (62), (8)
// n: 10 >>

// 답을 1,000,000,007 으로 나누세여

console.log(solution(4));
console.log(solution(8));
console.log(solution(5000));
