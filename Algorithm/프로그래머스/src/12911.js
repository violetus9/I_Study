// 다음 큰 숫자

function solution(n) {
	let answer = n + 1;

	while (true) {
		const i = n
			.toString(2)
			.split("")
			.filter((e) => e === "1").length;
		const ii = answer
			.toString(2)
			.split("")
			.filter((e) => e === "1").length;

		if (i === ii) break;

		answer += 1;
	}

	return answer;
}

console.log(solution(78));
console.log(solution(15));

// 한번 미끄러짐

// 거듭 강조하지만 메서드 체이닝은 순서를 잘 짜야되고 반환값도 잘 따져봐야함
// 그리고 !!!!!!!!!!!!!! 코드를 가독성 좋게 짜야한다
