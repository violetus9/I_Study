// n^2 배열 자르기

/*  실패 (signal: aborted (core dumped))  */

// const getRefinedIdx = (n, num) => {
// 	const row = parseInt(num / n);
// 	const col = num % n;

// 	return [row, col];
// };

// function solution(n, left, right) {
// 	const initArr = Array.from({ length: n }, () => Array(n).fill(0)).map(
// 		(e, i) => {
// 			return e.map((el, j) => {
// 				if (i >= j) {
// 					return (el = i + 1);
// 				} else if (i < j) {
// 					return (el = j + 1);
// 				}
// 			});
// 		}
// 	);

// 	const [lr, lc] = getRefinedIdx(n, left);
// 	const [rr, rc] = getRefinedIdx(n, right + 1);

// 	const answer = [];

// 	let i = lr;
// 	let j = lc;
// 	while (true) {
// 		if (j >= n) {
// 			i++;
// 			j = 0;
// 		}
// 		if (i === rr && j === rc) break;

// 		answer.push(initArr[i][j]);

// 		j++;
// 	}

// 	return answer;
// }

/***********************다시***********************/

function solution(n, left, right) {
	const answer = [];

	while (left <= right) {
		const row = parseInt(left / n);
		const col = left++ % n;
		const idxMax = Math.max(row, col) + 1;
		answer.push(idxMax);
	}

	return answer;
}

// ...규칙성이 1순위 그대로만 공식화해서 풀것
// 규칙찾아서 그대로 구현만 하면 정석보다 효율성은 비교도 안되게 좋음
// 30분 40줄 <<< +10분 5줄

// 00 >> 1
// 01, 11, 10 >> 2
// 02, 12, 22, 21, 20 >> 3
// idx row, col 최대값 += 1;

// 00 01 02
// 10 11 12
// 20 21 22

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
// console.log(solution(5, 7, 14));
