// 문자열 압축

function solution(s) {
	if (s.length === 1) return 1;

	let answer = 9999;

	for (let i = 1; i <= s.length / 2; i++) {
		let letters = "";
		let cnt = 1;
		for (let j = 0; j < s.length; j += i) {
			const sliced = s.substr(j, i);
			const remain = s.substr(j + i, i);

			if (sliced === remain) {
				cnt += 1;
			} else {
				if (cnt > 1) {
					letters = letters + cnt + sliced;
				} else {
					letters = letters + sliced;
				}
				cnt = 1;
			}
		}
		console.log(letters);
		if (answer > letters.length) {
			answer = letters.length;
		}
	}

	return answer;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
