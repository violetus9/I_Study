// 문자열 내 마음대로 정렬하기

const log = console.log;

function solution(strings, n) {
	// const answer = [];

	strings.sort((A, B) => {
		const a = A[n];
		const b = B[n];

		return a === b ? (A > B) - (A < B) : (a > b) - (a < b);
	});
	log(strings);
	return strings;
}

log(solution(["sun", "bed", "car"], 1));
log(solution(["abce", "abcd", "cdx"], 2));
