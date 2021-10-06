// 징검다리 건너기

function solution(stones, k) {
	let minimum = 1;
	let maximum = 200000000;

	while (minimum + 1 < maximum) {
		let middle = parseInt((minimum + maximum) / 2);
		let step = 0;
		let flag = true;

		for (let i = 0; i < stones.length; i++) {
			if (stones[i] < middle) {
				step += 1;
			} else {
				step = 0;
			}

			if (step >= k) {
				flag = false;
				break;
			}
		}

		if (flag) minimum = middle;
		else maximum = middle;
	}

	return minimum;
}

// 효율성 이씀둥
// stones <= 200,000 & eachStones <= 200,000,000

// 확실한건... 일반적으로 1씩 빼서 접근하는건 터질 가능성이 높다는것
// 그리고 0 이하의 돌이 k개 이상인 경우 상황 종료

// 3 = k ? [-1, 1, 2, 0, -1, -2, 1, -1, 2, -2]

// 2 = k ? [0, 2, 3, 1, 0, -1, 2, 0, 3, -1]

// console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 2));
// console.log(solution([20, 40, 50, 30, 20, 10, 40, 20, 50, 10], 3));
