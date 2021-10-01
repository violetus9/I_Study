// 모음 사전

function solution(word) {
	let answer = word.length;
	const aeiou = {};
	["A", "E", "I", "O", "U"].forEach((e, i) => (aeiou[e] = i + 1));

	const cases = [781, 156, 31, 6, 1];

	let idx = 0;
	for (const w of word) {
		answer += cases[idx] * (aeiou[w] - 1);
		idx += 1;
	}

	return answer;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));

// A 5까지 채운 시행 > 1 * 5 ^ 4 > 625 + 이전까지
// 그럼 A선두이면 5^4 + 5^3 + ... + 5^1 + 5^0 >> 781
// 781 * 5 = 3905
// 625(순수 5자리고정인경우니까) * 5 = 3125
// 그럼 자리별 경우를 보면 [780 1 781, 155 1 156, 30 1 31,5 1 6, 1]

// 아 ㅇㅋ
