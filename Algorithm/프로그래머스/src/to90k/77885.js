// 2개 이하로 다른 비트

/* testCase 10, 11 timeOver */

// function solution(numbers) {
// 	const answer = [];
// 	for (const n of numbers) {
// 		const origin = n.toString(2);

// 		let zzapN = n + 1;
// 		while (true) {
// 			const nextBit = zzapN.toString(2);
// 			const cut = nextBit.length - origin.length;
// 			const cuttedNext = nextBit.substr(cut);
// 			let dif = cut;

// 			for (let i = 0; i < origin.length; i++) {
// 				if (origin[i] !== cuttedNext[i]) dif += 1;
// 			}

// 			if (dif <= 2) {
// 				answer.push(parseInt(nextBit, 2));
// 				break;
// 			}

// 			zzapN += 1;
// 		}
// 	}

// 	return answer;
// }

/* 이런경우 보통 다른 규칙성이 있었다 */

//  2:  0010
//  3:  0011
//  4:  0100
//  5:  0101
//  6:  0110
//  7:  0111
//  8:  1000
//  9:  1001
// 10:  1010
// 11:  1011
// 12:  1100
// 13:  1101
// 14:  1110
// 15: 01111
// 16: 10000
// 17: 10001
// 18: 10010

// 2개 이하인 경우
// > 2제곱 단위가 바뀌는 경우 > 2 ~ 3은 2^0 만 바꾸면 되니까
// >

// 조건1: 맨뒤 0인경우 1로만 바뀌면 조건에 해당
// 조건2: ~~01~~인 경우 10으로 바뀌는 순간 해당

function solution(numbers) {
	const answer = [];

	numbers.forEach((e) => {
		let Bit = "0" + e.toString(2);
		const lastIdx = Bit.length - 1;

		// 1
		if (Bit[lastIdx] == "0") {
			answer.push(e + 1);
		}
		// 2
		else {
			const real = [...Bit].reverse().join("").replace(/10/, "01");
			answer.push(parseInt([...real].reverse().join(""), 2));
		}
	});

	return answer;
}

console.log(solution([2, 7]));
// console.log(solution([89]));
