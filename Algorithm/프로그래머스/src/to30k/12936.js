// 줄 서는 방법

function solution(n, k) {
	const answer = [];

	// [1, 2, 3, 4, 5], k = 113 이라 가정하면 총 가지수는 5!
	// 그중 k번째를 찾으라 하니까 배열을 무작정 만들기보단 어디만 구하면 되는지 알아보자
	// 총 120 가지 속엔 5가지 경우가 있음 (첫자리 1 ~ 5)
	// k는 113이니까 120을 n인 5단위로 나누기
	// 24 ~ 48 ~ 72 ~ 96 ~ 120

	let people = Array(n)
		.fill(0)
		.map((e, i) => i + 1);
	let range = people.reduce((pre, cur) => pre * cur, 1);
	k -= 1;

	while (answer.length !== n) {
		range /= people.length;
		let process = people[Math.floor(k / range)];
		// 몫 = 인덱스
		answer.push(process);
		k %= range;
		people = people.filter((e) => e !== process);
	}

	return answer;
}

// 문제 자체서 요구하는 n 자체는 20까지 자연수지만 (그냥 팩토리얼 해서 풀면 되는 문제긴 한데)
// 큰 수라면 전체를 구하고 정렬하고 뽑아내는건 효율이 좋지 못할 듯

// + 사실 코테가 정형화해서 풀면 안된다고 생각하는게 문제마다 조건도 다르고
// + 실제 상황이라고 하면 그 상황에 맞는 해결책만 찾으면 되는거 아닐까 싶기도 하지만
// + 그래서 더 일반적인 방법으로 풀어야 하나? 상황이 매번 다르니까 어느 하나에 맞출 수 없으니까?

console.log(solution(3, 5));
console.log(solution(5, 113));
