// 부족한 금액 계산하기

function solution(price, money, count) {
	let answer = 0;

	for (let i = 1; i <= count; i++) {
		answer += price * i;
	}

	return money - answer > 0 ? 0 : Math.abs(money - answer);
}

console.log(solution(3, 20, 4));
