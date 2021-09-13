// 124 나라의 숫자

function solution(n) {
	let answer = "";

	// 입력이 굉장히 크다. 500,000,000

	//   1   2   4  3**1
	//  11  12  14
	//  21  22  24
	//  41  42  44  3**2
	// 111 112 114
	// ...          3**3

	14 > 4, 2;
	4 > 1, 1;

	// 진법 변환이지만 자릿수 처리를 위해 -1 해줘야함

	const remainder = ["4", "1", "2"];
	while (n > 0) {
		answer = remainder[n % 3] + answer;
		n = Math.floor((n - 1) / 3);
		// console.log(answer, "oo", n);
	}

	return answer;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(14));
