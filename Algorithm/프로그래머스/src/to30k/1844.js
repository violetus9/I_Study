// 게임 맵 최단거리

function solution(maps) {
	const row = maps.length;
	const col = maps[0].length;
	const dx = [-1, 1, 0, 0];
	const dy = [0, 0, -1, 1];
	const visited = Array.from({ length: row }, () => Array(col).fill(1));

	const actions = [[0, 0]];

	while (actions.length) {
		const [y, x] = actions.shift();

		for (let i = 0; i < 4; i++) {
			const nowX = x + dx[i];
			const nowY = y + dy[i];

			if (nowX < 0 || nowX >= col || nowY < 0 || nowY >= row) continue;

			if (visited[nowY][nowX] === 1 && maps[nowY][nowX] === 1) {
				visited[nowY][nowX] = visited[y][x] + 1;
				actions.push([nowY, nowX]);
			}
		}
	}
	let answer = -1;

	if (visited[row - 1][col - 1] !== 1) {
		return visited[row - 1][col - 1];
	}

	return answer;
}

console.log(
	solution([
		[1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 1, 1],
		[1, 1, 1, 0, 1],
		[0, 0, 0, 0, 1],
	])
);
console.log(
	solution([
		[1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 1, 1],
		[1, 1, 1, 0, 0],
		[0, 0, 0, 0, 1],
	])
);
