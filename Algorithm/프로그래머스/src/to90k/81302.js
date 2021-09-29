// 거리두기 확인하기

function solution(places) {
	const answer = [];
	const move = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	for (const place of places) {
		const verified = Array.from({ length: 5 }, () => Array(5).fill(false));
		let flag = true;
		const aosgoxms = (y1, y2, x1, x2) => Math.abs(y2 - y1) + Math.abs(x2 - x1);

		// j row, i col
		for (let j = 0; j < 5; j++) {
			for (let i = 0; i < 5; i++) {
				if (place[j][i] === "P") {
					const queue = [[j, i]];

					while (queue.length) {
						const [y, x] = queue.shift();
						verified[y][x] = true;

						for (const d of move) {
							if (!flag) break;
							const dy = y + d[0];
							const dx = x + d[1];

							if (
								!(dx < 0 || dy < 0 || dx > 4 || dy > 4) &&
								!(aosgoxms(j, dy, i, dx) > 2) &&
								!verified[dy][dx]
							) {
								if (place[dy][dx] === "P") {
									flag = false;
									break;
								}

								if (place[dy][dx] !== "X") {
									queue.push([dy, dx]);
								}
							}
						}
					}
				}
			}
		}
		flag ? answer.push(1) : answer.push(0);
	}

	return answer;
}

/*
	3, 5, 8, 11, 13, 16 실패 원인

  조건을 제대로 나눠서 깔끔하게 풀어야 오타가 안나는데..
	검증된 타일 조건을 판단할때 !을 안붙여서 틀렸음 (line: 35)
*/

/*
[
	[v, v, v, v, v],
	[v, 0, 0, v, 0],
	[v, v, 0, v, 0],
	[v, v, 0, v, 0],
	[v, v, 0, 0, v]
]
*/

console.log(
	solution([
		["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
		["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
		["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
		["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
		["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
	])
);

console.log(
	solution([
		["OOPOO", "OPOOO", "OOPOO", "OOOOO", "OOOOP"],
		["OOPOO", "OPOOO", "OOOOO", "OOOOO", "OOOOO"],
		["OOPOO", "OPOOO", "OOOOP", "OOOPO", "OOOOO"],
		["OOPOO", "OPOOO", "OOOOO", "OOOOP", "PPOOO"],
		["OOPOO", "OPOOO", "OOOOO", "OOOOO", "OOOPO"],
	])
);
