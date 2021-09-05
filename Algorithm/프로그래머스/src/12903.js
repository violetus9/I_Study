// 가운데 글자 가져오기

function solution(s) {
	let answer = "";
	const len = Math.floor(s.length / 2);

	if (s.length % 2 !== 0) {
		answer = s.substr(len, 1);
	} else {
		answer = s.substr(len - 1, 2);
	}

	return answer;
}
