// 방문 길이

// function solution(dirs) {
// 	let answer = 0;

// 	const stage = Array.from({ length: 11 }, () => Array(11).fill(0));
// 	const movement = {
// 		U: -1,
// 		D: +1,
// 		L: -1,
// 		R: +1,
// 	};
// 	let x = 5;
// 	let y = 5;
// 	stage[y][x] = 1;

// 	for (const c of dirs) {
// 		console.log(movement[c]);
// 		if (c === "U" || c === "D") {
// 			if (y + movement[c] < 0 || y + movement[c] > 10) {
// 				continue;
// 			}
// 			y += movement[c];
// 		}
// 		if (c === "L" || c === "R") {
// 			if (x + movement[c] < 0 || x + movement[c] > 10) {
// 				continue;
// 			}
// 			x += movement[c];
// 		}
// 		stage[y][x] = 1;
// 	}

// 	answer = stage.filter((e) => e.filter((v) => v > 0));

// 	return answer;
// }

/* 좌표 쌍으로 기억해야 한다, 입구 출구 */
// 얼추 나와도 테스트케이스 몇개 더 구해보면 완전 다른 답 나오게됨

/* 개선: 출발점 도착점 자체 저장 > 중복체크 */

function solution(dirs) {
	const movement = {
		U: -1,
		D: +1,
		L: -1,
		R: +1,
	};
	const visited = new Set();
	let x = 5;
	let y = 5;

	for (const c of dirs) {
		const here = [x, y];
		if (c === "U" || c === "D") {
			if (y + movement[c] < 0 || y + movement[c] > 10) {
				continue;
			}
			y += movement[c];
		}
		if (c === "L" || c === "R") {
			if (x + movement[c] < 0 || x + movement[c] > 10) {
				continue;
			}
			x += movement[c];
		}
		const next = [x, y];

		// 왕복할거까지 저장 > 어차피 하나니까 / 2
		visited.add(`${here}${next}`);
		visited.add(`${next}${here}`);
	}

	return visited.size / 2;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
