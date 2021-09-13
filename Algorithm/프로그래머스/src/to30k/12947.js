// 하샤드 수

function solution(x) {
	let answer = true;
	let res = 0;

	x = x.toString();
	for (const i of x) {
		res += parseInt(i);
	}
	x % res === 0 ? answer : (answer = false);

	return answer;
}
