// 메뉴 리뉴얼

const combine = (arr, n) => {
	if (n === 1) return arr.map((e) => [e]);

	const res = [];

	arr.forEach((fix, i, ori) => {
		const rest = ori.slice(i + 1);
		const comb = combine(rest, n - 1);
		const att = comb.map((e) => [fix, ...e].sort().join(""));
		res.push(...att);
	});

	return res;
};

function solution(orders, course) {
	const answer = [];

	for (let i = 0; i < course.length; i++) {
		const obj = {};
		let cnt = 0;

		for (const e of orders) {
			combine(e.split(""), course[i]).forEach((el) => {
				if (!obj[el]) {
					obj[el] = 1;
				} else {
					obj[el] += 1;
					cnt = obj[el] > cnt ? obj[el] : cnt;
				}
			});
		}

		if (cnt > 1) {
			for (const e of Object.entries(obj)) {
				const [k, v] = e;
				v === cnt ? answer.push(k) : "";
			}
		}
		console.log(obj);
	}

	return answer.sort();
}

// console.log(
// 	solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
// );
// console.log(
// 	solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
// );
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
