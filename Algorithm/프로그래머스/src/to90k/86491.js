// 최소직사각형

function solution(sizes) {
	// [min, max]
	const atLeast = [0, 0];

	for (const size of sizes) {
		const [a, b] = size;
		let w;
		let h;

		if (a >= b) {
			w = b;
			h = a;
		} else {
			w = a;
			h = b;
		}

		atLeast[0] = w > atLeast[0] ? w : atLeast[0];
		atLeast[1] = h > atLeast[1] ? h : atLeast[1];
	}

	return atLeast.reduce((p, c) => p * c, 1);
}

console.log(
	solution([
		[60, 50],
		[30, 70],
		[60, 30],
		[80, 40],
	])
);
console.log(
	solution([
		[10, 7],
		[12, 3],
		[8, 15],
		[14, 7],
		[5, 15],
	])
);
console.log(
	solution([
		[14, 4],
		[19, 6],
		[6, 16],
		[18, 7],
		[7, 11],
	])
);
