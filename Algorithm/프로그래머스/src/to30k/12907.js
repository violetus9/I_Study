// 거스름돈

function solution(n, money) {
	// i을 i로 만듬 > i
	// i + 1을 만들면 1 + i까지
	// dp다

	const dp = Array(n + 1).fill(0);
	dp[0] = 1;

	money.forEach((e) => {
		for (let i = e; i <= n; i++) {
			dp[i] += dp[i - e];
		}
	});

	answer = dp[n] % 1000000007;
	return answer;
}

console.log(solution(5, [1, 2, 5]));
