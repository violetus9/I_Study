// 퍼즐 조각 채우기

const check = (hole, block) => {
	const h = Math.max(...hole.flat()) + 1;
	const b = Math.max(...block.flat()) + 1;
	const size = h < b ? b : h;
	for (let i = 0; i < 4; i++) {
		const compareStage = Array.from({ length: size }, () =>
			Array(size).fill(0)
		);

		hole.forEach((e) => (compareStage[e[0]][e[1]] += 1));
		block.forEach((e) => (compareStage[e[0]][e[1]] -= 1));

		if (!compareStage.some((e) => e.some((v) => v !== 0))) {
			return true;
		} else {
			// rotate
			const row = Math.max(...block.map((e) => e[0])) + 1;
			const col = Math.max(...block.map((e) => e[1])) + 1;
			const tmp = [];
			for (const b of block) {
				const [i, j] = b;
				tmp.push([j, row - 1 - i]);
			}

			block = refine(tmp);

			continue;
		}
	}
	return false;
};

// 블럭 크기 최소격자로 정제
const refine = (block) => {
	block.sort((a, b) => a[0] - b[0]);
	const startX = block[0][0];
	block.sort((a, b) => a[1] - b[1]);
	const startY = block[0][1];

	// 좌표 이동 후 최소 격자 좌표 배열
	block.forEach((e) => {
		e[0] -= startX;
		e[1] -= startY;
	});

	return block;
};

const blockMemorizer = (i, j, stage, row, col, origin = true) => {
	// 입력 테이블이 game_board인지 table인지 판단 = origin
	const changeValue = origin ? 1 : 0;
	const canGo = origin ? 0 : 1;
	const move = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	const queue = [[i, j]];
	// 블럭 shape 좌표 수용소
	const coord = [];

	while (queue.length) {
		const [i, j] = queue.shift();
		if (stage[i][j] !== changeValue) {
			stage[i][j] = changeValue;
			coord.push([i, j]);
		}

		for (const d of move) {
			const dy = i + d[0];
			const dx = j + d[1];

			if (dy < 0 || dx < 0 || dy >= row || dx >= col) continue;

			if (stage[dy][dx] === canGo) {
				queue.push([dy, dx]);
			}
		}
	}

	return coord;
};

function solution(game_board, table) {
	const row = table.length;
	const col = table[0].length;
	// `part${c}`: { area: Number, shape: [[1,2],[3,4]], used: false }
	const parts = {};
	// `hole${c}`: { area: Number, shape: [[2,3],[3,1]], used: false }
	const holes = {};

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			// 블럭 입력
			if (table[i][j] === 1) {
				const block = blockMemorizer(i, j, table, row, col, false);
				parts[`p${i}${j}`] = {
					area: block.length,
					shape: refine([...block]),
					used: false,
				};
			}

			// 보드 빈자리 확인
			if (game_board[i][j] === 0) {
				const puzzleHole = blockMemorizer(i, j, game_board, row, col);
				holes[`h${i}${j}`] = {
					area: puzzleHole.length,
					shape: refine([...puzzleHole]),
					used: false,
				};
			}
		}
	}

	let answer = 0;
	for (const h of Object.keys(holes)) {
		for (const p of Object.keys(parts)) {
			if (holes[h].area === parts[p].area && !holes[h].used && !parts[p].used) {
				if (check(holes[h].shape, parts[p].shape)) {
					parts[p].used = true;
					holes[h].used = true;
					answer += parts[p].area;
					break;
				}
			}
		}
	}

	return answer;
}

// 조각 회전 가능, 조각 크기를 입력해, 좌표?도 입력
// 크기별 분류, 대표 유형 하나 등록
// 반드시 크기 맞아야 회전 로직으로 진입
// 회전 하면서 비교, arr1과 arr2의 격자간 합이 +1-1=0이 반드시 되어야 성립

// console.log(
// 	solution(
// 		[
// 			[1, 1, 0, 0, 1, 0],
// 			[0, 0, 1, 0, 1, 0],
// 			[0, 1, 1, 0, 0, 1],
// 			[1, 1, 0, 1, 1, 1],
// 			[1, 0, 0, 0, 1, 0],
// 			[0, 1, 1, 1, 0, 0],
// 		],
// 		[
// 			[1, 0, 0, 1, 1, 0],
// 			[1, 0, 1, 0, 1, 0],
// 			[0, 1, 1, 0, 1, 1],
// 			[0, 0, 1, 0, 0, 0],
// 			[1, 1, 0, 1, 1, 0],
// 			[0, 1, 0, 0, 0, 0],
// 		]
// 	)
// );
// console.log(
// 	solution(
// 		[
// 			[0, 0, 0],
// 			[1, 1, 0],
// 			[1, 1, 1],
// 		],
// 		[
// 			[1, 1, 1],
// 			[1, 0, 0],
// 			[0, 0, 0],
// 		]
// 	)
// );

/*******************  tc 6 to 13 failed  ********************/

// 1자 블럭
// console.log(
// 	solution(
// 		[
// 			[0, 1, 0, 1, 1, 0],
// 			[0, 1, 0, 1, 1, 0],
// 			[0, 1, 1, 1, 1, 0],
// 			[1, 1, 1, 1, 1, 0],
// 			[0, 0, 0, 0, 1, 0],
// 			[1, 1, 1, 1, 1, 0],
// 		],
// 		[
// 			[1, 0, 0, 0, 1, 0],
// 			[0, 0, 1, 0, 1, 0],
// 			[0, 0, 1, 0, 1, 0],
// 			[0, 0, 1, 0, 0, 0],
// 			[0, 0, 0, 0, 0, 0],
// 			[1, 1, 1, 1, 1, 1],
// 		]
// 	)
// );

// 발견, bfs서 중복 요소 접근하고 있었음
// console.log(
// 	solution(
// 		[
// 			[0, 0],
// 			[0, 0],
// 			[0, 0],
// 		],
// 		[
// 			[1, 1],
// 			[1, 1],
// 			[1, 1],
// 		]
// 	)
// );

/********************* tc 10, 11 failed **********************/

