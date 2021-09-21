// 메뉴 리뉴얼

function solution(orders, course) {
	const answer = [];

	const menu = {};

	// 메뉴별 주문 현황
	orders.forEach((e, i) => {
		const list = e.split("");
		const user = i + 1;

		list.forEach((each) => {
			if (!menu[each]) {
				menu[each] = [user];
			} else {
				menu[each].push(user);
			}
		});
	});

	console.log(menu);

	return answer;
}

console.log(
	solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
	solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));

/* 

{
  A: [ 1, 2, 4, 6 ],
  B: [ 1, 5 ],
  C: [ 1, 2, 3, 4, 5, 6 ],
  F: [ 1, 5 ],
  G: [ 1, 5 ],
  D: [ 3, 4, 6 ],
  E: [ 3, 4, 6 ],
  H: [ 6 ]
}

*/
