// 하노이의 탑

function solution(n) {
	const answer = [];

	recur(1, 2, 3, n, answer);

	return answer;
}

// // now, tmp, end, n
// let now = 1;
// let end = 3;
// // 막연하니 1단부터
// answer.push([now, end]);

// 2단, 재귀
// 1단에서 [now, end]
// 2단은 [now, tmp] > push (1단을 임시로)
// 단수 하나 줄었으니 [now, end] > push, (2단 도착지)
// 1단 처리(재귀 불러오기)
const recur = (now, tmp, end, dan, ans) => {
	// 1단 처리과정 합치기
	if (dan === 1) ans.push([now, end]);
	else {
		recur(now, end, tmp, dan - 1, ans);
		ans.push([now, end]);
		recur(tmp, now, end, dan - 1, ans);
	}
};

console.log(solution(3));

// 기둥은 세개뿐

// n 1  > 1
/*
  [
    [1,3]
  ]
*/

// n 2  > 3
/*
  [
    [1,2], [1,3], [2,3]
  ]
*/

// n 3  > 7
/*
  [
    [1,3], [1,2], [3,2],
    [1,3], [2,1], [2,3],
    [1,3]
  ]
*/

// n 4  > 15
/*
  [
    [1,2], [1,3], [2,3],
    [1,2], [3,1], [3,2], [1,2],   1,2,3 단 모두 2기둥 위치
    [1,3],                        4단짜리 3기둥 위치
    [2,3], [2,1], [3,1],
    [2,3], [1,2], [1,3],
    [2,3]
  ]
*/

// 기둥이 3개니까 4 이후부터 규칙성이 생길 것

// n 5  >
/*
  4까지의 판을 2기둥으로 옮겨놓고 5단을 3기둥으로 옮긴다 => 1
  이제 4까지의 판을 3기둥으로 옮기면 끝

  2 * (n-1단) + 1
*/

// 있어야 할 것: 현위치(now), 경유지(tmp), 도착지(end), 단수(dan)
