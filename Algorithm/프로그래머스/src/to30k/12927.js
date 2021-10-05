// 야근 지수

function solution(n, works) {
	const orderedWorks = [...works].sort((a, b) => b - a);

	let idx = 0;
	while (n) {
		if (orderedWorks[idx] < orderedWorks[idx + 1]) {
			idx += 1;
			continue;
		}

		if (orderedWorks[idx] === orderedWorks[idx - 1]) {
			idx = 0;
			continue;
		}

		orderedWorks[idx] -= 1;
		n -= 1;
	}

	return orderedWorks.reduce((pre, cur) => {
		if (cur > 0) {
			return pre + cur ** 2;
		} else {
			return pre;
		}
	}, 0);
}
// n = 10 ^ 6;
// n 시간 동안 피로도 최소, 처리량 = 1/h
// 야근 피로도 = 야근 시작시점 - 남은 일 작업량^2

// tc1. n = 4, 퇴근 전까지 4시간 남아씀 남은 애들 제곱의 합이 최소가 되는 값을 구해
// [3, 3, 3]
// [2, 3, 3]
// [2, 2, 3]
// [2, 2, 2]

console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));
