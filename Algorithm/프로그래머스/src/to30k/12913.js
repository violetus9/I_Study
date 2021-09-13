// 땅따먹기

function solution(land) {
	let maxNum = 0;

	for (let i = 0; i < land.length; i++) {
		for (let j = 0; j < land[i].length; j++) {
			if (i === 0) {
				continue;
			} else {
				let tmp = land[i - 1].slice();
				tmp[j] = 0;
				land[i][j] += Math.max.apply(null, tmp);
				maxNum = Math.max(land[i][j], maxNum);
			}
		}
	}

	return maxNum;
}

console.log(
	solution([
		[1, 2, 3, 5],
		[5, 6, 7, 8],
		[4, 3, 2, 1],
	])
);

// dp
