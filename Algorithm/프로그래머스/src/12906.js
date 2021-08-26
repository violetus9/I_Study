// 같은 숫자는 싫어

function solution(arr) {
	const answer = [];

	for (let i = 0; i < arr.length; i++) {
		if (answer[answer.length - 1] !== arr[i]) {
			answer.push(arr[i]);
		}
	}

	return answer;
}
