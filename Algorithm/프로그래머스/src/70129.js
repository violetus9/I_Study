// 이진 변환 반복하기

function solution(s) {
	const answer = [];
	let rmZero = 0;
	let cnt = 0;

	while (true) {
		// 0 제거
		const converted = s.replace(/0/g, "");
		// 제거된 0 개수
		const tmp = s.length - converted.length;
		// 제거된 0 누적
		rmZero += tmp;
		// 0 제거 후 변환
		s = (s.length - tmp).toString(2);
		cnt += 1;

		// console.log("rm", tmp);
		// console.log("s", s);
		// console.log("con", converted);
		// console.log("``````````");

		if (s == "1") break;
	}

	answer.push(cnt);
	answer.push(rmZero);

	return answer;
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
