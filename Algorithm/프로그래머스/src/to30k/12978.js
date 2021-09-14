// 배달

function solution(N, road, K) {
	const arr = new Array(N + 1).fill(Infinity);
	const djk = Array.from({ length: N + 1 }, () => []);

	road.forEach(([a, b, c]) => {
		djk[a].push([b, c]);
		djk[b].push([a, c]);
	});
	arr[1] = 0;

	const prior = [[1, 0]];

	while (prior.length) {
		const [end] = prior.pop();

		djk[end].forEach((v) => {
			// console.log(v);
			if (arr[v[0]] > arr[end] + v[1]) {
				arr[v[0]] = arr[end] + v[1];
				prior.push(v);
			}
		});
		// console.log(arr);
	}
	return arr.filter((i) => i <= K).length;

	// console.log(arr);
	// console.log("```````````````````");
	// console.log(djk);
	// console.log("```````````````````");
}

console.log(
	solution(
		5,
		[
			[1, 2, 1],
			[2, 3, 3],
			[5, 2, 2],
			[1, 4, 2],
			[5, 3, 1],
			[5, 4, 2],
		],
		3
	)
);
console.log(
	solution(
		6,
		[
			[1, 2, 1],
			[1, 3, 2],
			[2, 3, 2],
			[3, 4, 3],
			[3, 5, 2],
			[3, 5, 3],
			[5, 6, 1],
		],
		4
	)
);
