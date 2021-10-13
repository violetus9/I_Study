// 가장 긴 팰린드롬

const pCheck = (str) => {
	const leng = str.length;
	const mid = parseInt(leng / 2);

	for (let i = 0; i < mid; i++) {
		if (str[i] !== str[leng - 1 - i]) return false;
	}

	return true;
};

function solution(s) {
	let answer = 1;
	const leng = s.length;

	for (let i = leng; i >= 1; i--) {
		for (let j = 0; j <= leng - i; j++) {
			const palindrome = pCheck(s.slice(j, i + j));
			if (palindrome) {
				return i;
			}
		}
	}

	return answer;
}

console.log(solution("abcdcba"));
console.log(solution("abacde"));
