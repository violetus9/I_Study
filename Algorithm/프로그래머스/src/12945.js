// 피보나치 수

const fibo = (n) => {
	// 0: 0, 1: 1, 2: 1
	const dp = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		dp[i] = (dp[i - 1] % 1234567) + (dp[i - 2] % 1234567);
	}
	return dp[n];
};

function solution(n) {
	return fibo(n) % 1234567;
}

console.log(fibo(6));
// console.log(Number.MAX_SAFE_INTEGER);
