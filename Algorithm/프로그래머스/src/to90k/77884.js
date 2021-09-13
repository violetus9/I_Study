function solution(left, right) {
	let answer = 0;

	while (left <= right) {
		let chkNum = 0;

		for (let i = 1; i <= left; i++) {
			left % i === 0 ? (chkNum += 1) : "";
		}

		chkNum % 2 === 0 ? (answer += left) : (answer -= left);

		left += 1;
	}

	return answer;
}
