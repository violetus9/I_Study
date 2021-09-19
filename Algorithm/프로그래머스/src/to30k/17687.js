// n진수 게임

function solution(n, t, m, p) {
	const games = [];

	for (let i = 0; i < m * t; i++) {
		for (const s of i.toString(n)) {
			games.push(s);
		}
	}

	const answer = games.filter((e, i) => (i % m === p - 1 ? e : "")).join("");

	return answer.substr(0, t).toUpperCase();
}

// 진법 n
// 미리 구해놓을 숫자 수 t
// 참가인원 m
// 순서 p
console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));
