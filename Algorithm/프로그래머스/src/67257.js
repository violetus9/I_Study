// 수식 최대화

function solution(expression) {
	let answer = 0;
	const process = {
		"*": (a, b) => a * b,
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
	};
	const priority = [
		["*", "+", "-"],
		["*", "-", "+"],
		["+", "*", "-"],
		["+", "-", "*"],
		["-", "+", "*"],
		["-", "*", "+"],
	];
	const numbers = expression.split(/[^\w]/g).map((i) => parseInt(i));
	const exps = expression.match(/[^0-9]/g);

	// 우선순위 순으로 프로세스 수행
	for (const e of priority) {
		const ns = [...numbers];
		const es = [...exps];
		let idx = 0;

		while (true) {
			for (let i = 0; i < es.length; i++) {
				if (es[i] === e[idx]) {
					ns[i] = process[es[i]](ns[i], ns[i + 1]);
					ns.splice(i + 1, 1);
					es.splice(i, 1);
					i -= 1;
				}
			}
			idx += 1;

			if (ns.length === 1) break;
		}

		if (Math.abs(ns[0]) > answer) {
			answer = Math.abs(ns[0]);
		}
	}

	return answer;
}

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));

// 순열(permutation)
