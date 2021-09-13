// 핸드폰 번호 가리기

function solution(phone_number) {
	let answer = "";

	// * 은 영어로 Asterisk임 ㅎ

	const numToAsterisk = phone_number.length - 4;

	for (let i = 0; i < phone_number.length; i++) {
		if (i < numToAsterisk) {
			answer += "*";
		} else {
			answer += phone_number[i];
		}
	}

	return answer;
}

// console.log(solution("01033334444"));
