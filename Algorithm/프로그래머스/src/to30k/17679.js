// 프렌즈4블록

function solution(m, n, board) {
	const stage = board.map((e) => e.split(""));
	let coord = [];

	const boomChk = () => {
		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < m - 1; j++) {
				if (
					stage[j][i] &&
					stage[j][i] === stage[j + 1][i] &&
					stage[j][i] === stage[j][i + 1] &&
					stage[j][i] === stage[j + 1][i + 1]
				) {
					coord.push([j, i]);
				}
			}
		}
	};

	const boomNFall = () => {
		coord.forEach((e) => {
			const [j, i] = e;
			stage[j][i] = null;
			stage[j + 1][i] = null;
			stage[j][i + 1] = null;
			stage[j + 1][i + 1] = null;
		});
		coord = [];

		for (let i = 0; i < n; i++) {
			let y = stage.length - 1;
			for (let j = m - 1; j > 0; j--) {
				if (stage[j][i] && !stage[j - 1][i]) {
					y = j - 1;
				}
				if (!stage[j][i] && stage[j - 1][i]) {
					stage[y][i] = stage[j - 1][i];
					y -= 1;
					stage[j - 1][i] = null;
				}
			}
		}
	};

	// lezgo~
	while (true) {
		boomChk();
		if (!coord.length) break;
		boomNFall();
	}

	return stage
		.map((e) => e.filter((el) => !el).length)
		.reduce((pre, cur) => pre + cur, 0);
}

// m행 n열

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(
	solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
