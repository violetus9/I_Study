// 프린터

function solution(priorities, location) {
	const answer = [];

	const arr = Array(priorities.length)
		.fill(0)
		.map((n, i) => n + i);
	// console.log(arr);

	while (priorities.length !== 0) {
		if (priorities[0] === Math.max(...priorities)) {
			answer.push(arr.shift());
			priorities.shift();
		} else {
			priorities.push(priorities.shift());
			arr.push(arr.shift());
		}
	}

	return answer.indexOf(location) + 1;
}

// function solution(priorities, location) {
// 	var list = priorities.map((t, i) => ({
// 		my: i === location,
// 		val: t,
// 	}));
// 	var count = 0;
// 	while (true) {
//     console.log(list);
//     var cur = list.splice(0, 1)[0];
// 		if (list.some((t) => t.val > cur.val)) {
// 			list.push(cur);
// 		} else {
// 			count++;
// 			if (cur.my) return count;
// 		}
// 	}
// }

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
