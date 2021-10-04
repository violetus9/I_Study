// 이중우선순위큐

function solution(operations) {
	// [min, max]
	const prison = [];

	const ordered = operations.map((e) => e.split(" "));

	for (const e of ordered) {
		const [command, numStr] = e;
		const num = parseInt(numStr);

		switch (command) {
			case "I":
				prison.push(num);
				break;
			case "D":
				if (num === 1) {
					const maximum = prison.indexOf(Math.max(...prison));
					prison.splice(maximum, 1);
				}
				if (num === -1) {
					const minimum = prison.indexOf(Math.min(...prison));
					prison.splice(minimum, 1);
				}
				break;
		}
	}

	return prison.length ? [Math.max(...prison), Math.min(...prison)] : [0, 0];
}

// I)nput
// D)elete

console.log(solution(["I 16", "D 1"]));
console.log(solution(["I 7", "I 5", "I -5", "D -1"]));
console.log(
	solution([
		"I 16",
		"D 1",
		"I 16",
		"D 1",
		"I 16",
		"D 1",
		"I 16",
		"I 7",
		"I 5",
		"I -5",
		"I 7",
		"I 5",
		"I -5",
		"I -5",
		"I 7",
		"I 5",
		"I -5",
		"I 7",
		"I 5",
		"I -5",
		"D -1",
	])
);
