// 올바른 괄호

function solution(s) {
	let chk = 0;

	for (const e of s) {
		if (e === "(") {
			chk += 1;
		} else {
			chk -= 1;
		}
		if (chk < 0) return false;
	}

	return chk > 0 ? false : true;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));

// testcase 2
console.log(solution("(()((((()))))))"));

// 방어 코드는 때에 따라 아래에 있어야 할 수도 있다.
// 꼭 상단에만 작성할 필요는 없어
