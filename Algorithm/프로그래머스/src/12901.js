// 2016년

function solution(a, b) {
	let answer = "";

	const date = new Date(`2016,${a},${b}`);
	const day = String(date).split(" ");
	answer = day[0].toUpperCase();

	return answer;
}
