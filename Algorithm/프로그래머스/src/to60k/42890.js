// 후보키

function solution(relation) {
	let answer = 0;

	return answer;
}

// 학번, 이름, 전공, 학년

// 유일성, 최소성 충족할 것

// 유일성을 띄는 속성이 두 개 이상 겹치면 무조건 유일한 후보가 된다
//
// 일단 유일함을 띄는 속성간 비교를 해서 조합수로 추리고 남은 속성중 유일할만한 속성들을 추린닫?
// 처음부터 n개의 속성끼리 비교해서 추린다? which one is better?

console.log(
	solution([
		["100", "ryan", "music", "2"],
		["200", "apeach", "math", "2"],
		["300", "tube", "computer", "3"],
		["400", "con", "computer", "4"],
		["500", "muzi", "music", "3"],
		["600", "apeach", "music", "2"],
	])
);
