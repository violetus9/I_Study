// 여행경로

function solution(tickets) {
	const answer = [];

	// tickets.sort((a, b) => {
	// 	if (a[1] > b[1]) return 1;
	// 	if (a[1] < b[1]) return -1;
	// });

	const dfs = (tickets, now, route) => {
		const newRoute = [...route, now];
		if (tickets.length === 0) {
			answer.push(newRoute);
		} else {
			tickets.map((t, i) => {
				if (t[0] === now) {
					const fakeT = [...tickets];
					const [[_, end]] = fakeT.splice(i, 1);
					dfs(fakeT, end, newRoute);
				}
			});
		}
	};

	dfs(tickets, "ICN", []);

	return answer.sort()[0];
}

// 항상 ICN 출, 그리고 다써야돼

console.log(
	solution([
		["ICN", "JFK"],
		["HND", "IAD"],
		["JFK", "HND"],
	])
);
console.log(
	solution([
		["ICN", "SFO"],
		["ICN", "ATL"],
		["SFO", "ATL"],
		["ATL", "ICN"],
		["ATL", "SFO"],
	])
);
