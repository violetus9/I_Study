// 복서 정렬하기

function solution(weights, head2head) {
	const answer = [];
	const player = weights.length;

	// [번호, 승률, 체격 극복, 본인 무게]
	for (let i = 0; i < player; i++) {
		const record = [];
		let overWeight = 0;
		let wins = 0;
		let games = 0;
		for (let j = 0; j < player; j++) {
			if (head2head[i][j] === "N") continue;
			if (head2head[i][j] === "L") games += 1;
			if (head2head[i][j] === "W") {
				if (weights[i] < weights[j]) {
					overWeight += 1;
				}
				wins += 1;
				games += 1;
			}
		}
		let winRate = wins / games;
		if (wins === 0) winRate = 0;
		answer.push([i + 1, winRate, overWeight, weights[i]]);
	}

	return answer
		.sort((a, b) => {
			const aRate = a[1];
			const bRate = b[1];

			if (aRate < bRate) return 1;
			if (aRate > bRate) return -1;

			const aOverW = a[2];
			const bOverW = b[2];

			if (aOverW < bOverW) return 1;
			if (aOverW > bOverW) return -1;

			const aW = a[3];
			const bW = b[3];

			if (aW < bW) return 1;
			if (aW > bW) return -1;
		})
		.map((e) => e[0]);
}

console.log(solution([50, 82, 75, 120], ["NLWL", "WNLL", "LWNW", "WWLN"]));
console.log(solution([145, 92, 86], ["NLW", "WNL", "LWN"]));
console.log(solution([60, 70, 60], ["NNN", "NNN", "NNN"]));
console.log(solution([60, 60, 60, 80], ["NNNW", "NNNN", "NNNN", "LNNN"]));
