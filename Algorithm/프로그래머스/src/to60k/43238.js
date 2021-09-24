// 입국심사

function solution(n, times) {
	times.sort((a, b) => a - b);

	let minimum = 0;
	let maximum = times[times.length - 1] * n;
	let middle = parseInt((minimum + maximum) / 2);

	while (minimum <= maximum) {
		let tmpN = 0;
		times.forEach((e) => (tmpN += parseInt(middle / e)));

		if (tmpN >= n) maximum = middle - 1;
		else if (tmpN < n) minimum = middle + 1;

		middle = parseInt((minimum + maximum) / 2);

		// console.log(`max ${maximum}, min ${minimum}, mid ${middle}`);
		// console.log(`n ${middle / times[0] + middle / times[1]}`);
		// console.log(tmpN);
	}

	return minimum;
}

// n === 6, stop, 어차피 사람단위 => 자연수 n, 소수점 버리버리
// mid 기준, 크고작음 판별 후 min, max 재설정 > 에서 while? 재귀?
// max = 60, min = 0, mid = 30, n = 14
// n이 기준보다 큼: max => 29, min = 0, n = 7
// max = 29, min = 0, mid = 14, n = 7
// n이 기준보다 작: max => 29, min = 0, n = 4
// ㅇㅋ

console.log(solution(6, [7, 10]));
