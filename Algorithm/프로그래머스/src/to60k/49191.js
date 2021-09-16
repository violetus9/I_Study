// 순위

/* (signal: aborted (core dumped)) */

// function solution(n, results) {
// 	let answer = 0;

// 	const wonRecord = Array.from(Array(n + 1), () => []);
// 	const lostRecord = Array.from(Array(n + 1), () => []);
// 	const rank = Array(n + 1).fill(0);

// 	results.forEach((v) => {
// 		const [win, lose] = v;
// 		wonRecord[win].push(lose);
// 		lostRecord[lose].push(win);
// 	});

// 	// console.log(wonRecord);
// 	// console.log(lostRecord);

// 	for (let i = 1; i <= n; i++) {
// 		// 2번을 이긴 4 3 1 은
// 		for (const w of [...lostRecord[i]]) {
// 			// 2번이 이긴 애들한테
// 			if (wonRecord[w]) {
// 				// 이길 수 밖에 없다
// 				for (const l of wonRecord[i]) {
// 					wonRecord[w].push(l);
// 				}
// 			}
// 		}

// 		// 1번에 진 2번은
// 		for (const l of [...wonRecord[i]]) {
// 			// 1번을 이긴 애들한테
// 			if (lostRecord[i]) {
// 				// 질 수밖에
// 				for (const w of lostRecord[i]) {
// 					lostRecord[l].push(w);
// 				}
// 			}
// 		}
// 	}

// 	// console.log(wonRecord);
// 	// console.log(lostRecord);

// 	const wins = [];
// 	wonRecord.map((el) => {
// 		wins.push(new Set([...el]));
// 	});
// 	const loses = [];
// 	lostRecord.map((el) => {
// 		loses.push(new Set([...el]));
// 	});

// 	// 아 첨부터 set할걸..

// 	// console.log(wins);
// 	// console.log(loses);

// 	// 본인 빼고 진거 이긴거 합해서 선수 - 1이면 순위 확정 가능
// 	for (let i = 1; i <= n; i++) {
// 		if (wins[i].size + loses[i].size === n - 1) {
// 			answer += 1;
// 		}
// 	}

// 	return answer;
// }

/* 정리하고 다시 */

function solution(n, results) {
	let answer = 0;

	const wonRecord = Array.from(Array(n + 1), () => new Set());
	const lostRecord = Array.from(Array(n + 1), () => new Set());

	results.forEach((v) => {
		const [win, lose] = v;
		wonRecord[win].add(lose);
		lostRecord[lose].add(win);
	});

	for (let i = 1; i <= n; i++) {
		for (const w of lostRecord[i]) {
			if (wonRecord[w]) {
				for (const l of wonRecord[i]) {
					wonRecord[w].add(l);
				}
			}
		}
		for (const l of wonRecord[i]) {
			if (lostRecord[l]) {
				for (const w of lostRecord[i]) {
					lostRecord[l].add(w);
				}
			}
		}
	}
	// console.log(wonRecord);
	// console.log(lostRecord);

	for (let i = 1; i <= n; i++) {
		if (wonRecord[i].size + lostRecord[i].size === n - 1) {
			answer += 1;
		}
	}

	return answer;
}

console.log(
	solution(5, [
		[4, 3],
		[4, 2],
		[3, 2],
		[1, 2],
		[2, 5],
	])
);

// Floyd Warshall
