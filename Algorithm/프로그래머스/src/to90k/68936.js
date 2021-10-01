// 쿼드압축 후 개수 세기

function solution(arr) {
	const answer = [0, 0];
	const n = arr.length;

	const recur = (arr, n) => {
		const sum = arr.reduce(
			(pre, cur) => pre + cur.reduce((pre, cur) => pre + cur, 0),
			0
		);
		if (n ** 2 === sum || sum === 0) {
			answer[arr[0][0]] += 1;
			return;
		} else if (n < 2) {
			answer[arr[0][0]] += 1;
			return;
		}

		recur(
			arr.slice(0, n / 2).map((e) => e.slice(0, n / 2)),
			n / 2
		);
		recur(
			arr.slice(n / 2).map((e) => e.slice(0, n / 2)),
			n / 2
		);
		recur(
			arr.slice(0, n / 2).map((e) => e.slice(n / 2)),
			n / 2
		);
		recur(
			arr.slice(n / 2).map((e) => e.slice(n / 2)),
			n / 2
		);
	};

	recur(arr, n);

	return answer;
}

console.log(
	solution([
		[0, 0],
		[0, 0],
	])
);
console.log(
	solution([
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
	])
);
console.log(
	solution([
		[1, 1, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
	])
);
console.log(
	solution([
		[1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 0, 1, 1, 1, 1],
		[0, 1, 0, 0, 1, 1, 1, 1],
		[0, 0, 0, 0, 0, 0, 1, 1],
		[0, 0, 0, 0, 0, 0, 0, 1],
		[0, 0, 0, 0, 1, 0, 0, 1],
		[0, 0, 0, 0, 1, 1, 1, 1],
	])
);
