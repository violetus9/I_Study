// 비밀지도

const log = console.log;

function solution(n, arr1, arr2) {
	const answer = Array(n).fill("");
	// answer.push('#' or ' ')
	const map1 = [];
	const map2 = [];

	for (const i of arr1) {
		const tmpArr = i.toString(2).padStart(n, 0);
		for (const j of tmpArr) {
			map1.push(j);
		}
	}
	for (const i of arr2) {
		const tmpArr = i.toString(2).padStart(n, 0);
		for (const j of tmpArr) {
			map2.push(j);
		}
	}

	const tmpArr = [];
	for (let i = 0; i < n * n; i++) {
		if (map1[i] == 0 && map2[i] == 0) {
			tmpArr.push(" ");
		} else {
			tmpArr.push("#");
		}
	}

	let cnt = 0;
	for (let i = 0; i < n * n; i++) {
		answer[cnt] += tmpArr[i];
		(i + 1) % n === 0 ? (cnt += 1) : "";
	}

	return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
