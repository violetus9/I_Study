// 전력망을 둘로 나누기

function solution(n, wires) {
	let answer = Infinity;

	wires.forEach((e, i) => {
		const graph = Array.from({ length: n + 1 }, () => []);
		const cuttedArr = [...wires.slice(0, i), ...wires.slice(i + 1)];
		cuttedArr.forEach((e) => {
			const [start, end] = e;
			graph[start].push(end);
			graph[end].push(start);
		});

		const visited = Array.from({ length: n + 1 }, () => false);
		const queue = [e[0]];
		while (queue.length) {
			const start = queue.shift();
			if (!visited[start]) {
				visited[start] = true;
				queue.push(...graph[start]);
			}
		}
		const numberOfNetWork1 = visited.filter((e) => e).length;
		const semiAnswer = Math.abs(n - numberOfNetWork1 - numberOfNetWork1);
		answer = semiAnswer < answer ? semiAnswer : answer;
	});

	return answer;
}

console.log(
	solution(9, [
		[1, 3],
		[2, 3],
		[3, 4],
		[4, 5],
		[4, 6],
		[4, 7],
		[7, 8],
		[7, 9],
	])
);
// console.log(
// 	solution(4, [
// 		[1, 2],
// 		[2, 3],
// 		[3, 4],
// 	])
// );
// console.log(
// 	solution(7, [
// 		[1, 2],
// 		[2, 7],
// 		[3, 7],
// 		[3, 4],
// 		[4, 5],
// 		[6, 7],
// 	])
// );
