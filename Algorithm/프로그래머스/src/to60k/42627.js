// 디스크 컨트롤러

function solution(jobs) {
	let answer = 0;
	const mod = jobs.length;
	let time = 0;
	let idx = 0;

	jobs.sort((a, b) => a[0] - b[0]);

	const queue = [];

	while (!!queue.length || idx < mod) {
		if (mod > idx && time >= jobs[idx][0]) {
			queue.push(jobs[idx]);
			queue.sort((a, b) => a[1] - b[1]);
			idx += 1;
			continue;
		}

		if (!!queue.length) {
			const [start, duration] = queue.shift();
			time += duration;
			answer += time - start;
		} else {
			time = jobs[idx][0];
		}
	}

	return parseInt(answer / mod);
}

// [요청 시점, 소요 시간]
// 일 없으면 온거 처리
// 각 작업마다 소요시간 = 작업시간 - 요청시간

// console.log(
// 	solution([
// 		[0, 3],
// 		[1, 9],
// 		[2, 6],
// 	])
// );

console.log(
	solution([
		[0, 3],
		[7, 3],
		[3, 3],
		[5, 8],
		[1, 9],
		[2, 6],
	])
);
