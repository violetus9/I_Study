// N으로 표현

// 분류는 DP로 되어있는 것임, 그렇다면 말을 잘 들어야겠지

function solution(N, number) {
	if (N === number) return 1;

	const dp = Array.from({ length: 8 }, () => new Set());

	for (let i = 0; i < 8; i++) {
		dp[i].add(parseInt((N + "").repeat(i + 1)));
		for (let j = 0; j < i; j++) {
			for (const a of dp[j]) {
				for (const b of dp[i - 1 - j]) {
					// dp.forEach((i) => console.log(i.size));
					dp[i].add(a + b);
					dp[i].add(a - b);
					dp[i].add(a * b);
					dp[i].add(parseInt(a / b));
				}
			}
		}
		// console.log(`${i} and \n`, number);
		if (dp[i].has(number)) return i + 1;
	}

	// if (cnt > 8) return -1;
	return -1;
}

console.log(solution(5, 12));
// console.log(solution(2, 11));
