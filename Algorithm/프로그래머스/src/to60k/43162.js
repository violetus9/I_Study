// 네트워크

function solution(n, computers) {
	let answer = 0;

	const visited = Array.from({ length: n }, () => false);

	const process = (idx) => {
		visited[idx] = true;
		for (let i = 0; i < visited.length; i++) {
			if (!visited[i] && computers[idx][i] === 1) {
				process(i);
			}
		}
	};

	for (let i = 0; i < visited.length; i++) {
		if (!visited[i]) {
			process(i);
			answer += 1;
		}
	}

	return answer;
}

console.log(
	solution(3, [
		[1, 1, 0],
		[1, 1, 0],
		[0, 0, 1],
	])
);
console.log(
	solution(3, [
		[1, 1, 0],
		[1, 1, 1],
		[0, 1, 1],
	])
);
console.log(
	solution(6, [
		[1, 1, 0, 1, 1, 0],
		[1, 1, 1, 1, 1, 1],
		[0, 1, 1, 0, 1, 1],
		[1, 1, 0, 1, 0, 1],
		[1, 1, 1, 0, 1, 0],
		[0, 1, 1, 1, 0, 1],
	])
);
