// 큰 수 만들기

function solution(number, k) {
	let answer = "";
	const tmp = [];

	// 한번 갔던 길은 못가
	// 순회는 무조건 한번으로 끝내야함 > for한번써
	for (let i of number) {
		// k = 0? 멈춰!
		while (k > 0 && tmp[tmp.length - 1] < i) {
			// 마지막요소 비교해서 넣을지말지 뺄지말지
			// if (tmp[tmp.length - 1] < i) {   tmp 없을경우, while이 실행이 안되도록 해야 한다
			tmp.pop();
			k--;
			// }
		}
		// 한번 돌때마다 넣고
		tmp.push(i);
	}
	// k 남으면 짜르긴 해야함 무조건 넣어놨으니
	tmp.splice(tmp.length - k, k);
	answer = tmp.join("");

	return answer;
}
// 1 9 2 4  [1]    1 드가고
// 9 2 4    [9]    9? 1보다 크니까 드가고 1 ㅂㅂ
// 2 4      [9 2]  2? 9보단 작으니까 드가고
// 4        [9 4]  4? 2보다 크니까 드가고 2 ㅂㅂ
// 매 ㅂㅂ 마다 k-- 해줭,

// 남은배열에 k 비교해주는거 필요
// 근데 k 남아있으면? 뒤에서짤라야함

// 4177252841 [4]
// 177252841  [4]       k 3
// 77252841   [7]       k 2
// 7252841    [77]
// 252841     [77]      k 1
// 52841      [775]
// 2841       [775]     k 0   // 여서 컷

// 91919191   [9]
// 1919191    [9]     k 1
// 919191     [99]
// 19191      [99]    k 0
// [999191]
