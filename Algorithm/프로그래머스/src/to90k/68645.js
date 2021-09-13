// 삼각 달팽이

function solution(n) {
	const answer = [];
	let count = 1;
	const tree = new Array(n).fill().map((e, i) => new Array(i + 1));
	let row = -1;
	let col = 0;

	// n회만큼 돈다
	while (n > 0) {
		for (let i = 0; i < n; i++) {
			tree[++row][col] = count++;
		}
		for (let i = 0; i < n - 1; i++) {
			tree[row][++col] = count++;
		}
		for (let i = 0; i < n - 2; i++) {
			tree[--row][--col] = count++;
		}
		n -= 3;
	}

	// console.log(tree);

	return tree.flat();
}

console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
