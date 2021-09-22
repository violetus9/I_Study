// 빛의 경로 사이클

function solution(grid) {
	const answer = [];

	const stage = grid.map((e) => e.split(""));

	console.log(stage);

	return answer;
}

// straight, left, right
// 각 노드당 상하좌우 입출 8가지의 가능성을 가질 수 있음
// 시작 노드에 대해 출력과 입력이 같은 경우 상황 종료 후 누적값 push

console.log(solution(["SL", "LR"]));
console.log(solution(["S"]));
console.log(solution(["R", "R"]));
