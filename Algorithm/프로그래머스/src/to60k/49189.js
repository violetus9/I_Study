// 가장 먼 노드

function solution(n, vertex) {
	const graph = Array.from({ length: n + 1 }, () => []);
	const dist = Array(n + 1).fill(0);

	vertex.forEach((e) => {
		graph[e[0]].push(e[1]);
		graph[e[1]].push(e[0]);
	});

	dist[1] = 1;

	const stack = [1];

	while (stack.length !== 0) {
		const idx = stack.shift();
		graph[idx].forEach((i) => {
			if (!dist[i]) {
				dist[i] = dist[idx] + 1;
				stack.push(i);
			}
		});
		// console.log(stack);
	}

	// console.log(dist);

	// console.log(Math.max(dist));
	const far = Math.max(...dist);

	return dist.filter((v) => v === far).length;
}

console.log(
	solution(6, [
		[3, 6],
		[4, 3],
		[3, 2],
		[1, 3],
		[1, 2],
		[2, 4],
		[5, 2],
	])
);
