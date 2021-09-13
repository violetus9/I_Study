// 괄호 회전하기

// 괄호(Parenthesis) 중괄호(Braces) 대괄호(Brackets)

function solution(s) {
	if (s.length % 2 === 1) return 0;

	let answer = 0;
	const pair = {
		")": "(",
		"}": "{",
		"]": "[",
	};
	const S = s + s;

	for (let i = 0; i < s.length; i++) {
		const stack = [];
		for (let j = i; j < s.length + i; j++) {
			if (S[j] === ")" || S[j] === "}" || S[j] === "]") {
				if (stack[stack.length - 1] === pair[S[j]]) {
					stack.pop();
				} else {
					continue;
				}
			} else {
				stack.push(S[j]);
			}
		}
		if (stack.length === 0) answer += 1;
	}

	return answer;
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
console.log(`------------------------`);
console.log(solution("{{{}"));
