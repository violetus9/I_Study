// 괄호 변환

function solution(p) {
	// '균형잡힌' 문자열
	// '올바른' 문자열

	if (p == "") return "";
	let u = "";
	let v = "";
	let chk = 0;

	for (let i = 0; i < p.length; i++) {
		if (p[i] === "(") {
			chk += 1;
		} else {
			chk -= 1;
		}

		if (chk === 0) {
			u = p.slice(0, i + 1);
			v = p.slice(i + 1);
			break;
		}
	}

	for (let i = 0; i < u.length; i++) {
		if (u[i] === "(") {
			chk += 1;
		} else {
			chk -= 1;
		}

		if (chk < 0) {
			let recur = "";
			recur += "(" + solution(v) + ")";
			for (let j = 1; j < u.length - 1; j++) {
				if (u[j] === "(") {
					recur += ")";
				} else {
					recur += "(";
				}
			}
			return recur;
		}
	}

	return u + solution(v);
}

console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));
