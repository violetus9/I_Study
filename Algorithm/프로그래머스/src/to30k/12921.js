// 소수 찾기

/*  시간 초과  */

// function solution(n) {
// 	let answer = 0;

// 	// let primeN = Array(n + 1).fill(1);

// 	for (let i = 2; i <= n; i++) {
// 		let count = 0;

// 		for (let j = 1; j <= i; j++) {
// 			if (count > 2) {
// 				continue;
// 			}

// 			if (i % j === 0) {
// 				count += 1;
// 			}
// 		}

// 		if (count === 2) {
// 			answer += 1;
// 		}
// 	}

// 	return answer;
// }

/* ======================================================= */
function solution(n) {
	let answer = 0;

	let primeArr = Array(n + 1).fill(true);
	primeArr[0] = false;
	primeArr[1] = false;

	for (let i = 2; i <= n; i++) {
		if (primeArr[i]) {
			for (let j = i * i; j <= n; j += i) {
				primeArr[j] = false;
			}
		}
	}

	answer = primeArr.filter((i) => i === true).length;

	return answer;
}

console.log(solution(10));
