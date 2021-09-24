// 단속카메라

function solution(routes) {
	let answer = 1;
	let cam = routes[0][1];

	routes.sort((a, b) => a[0] - b[0]);

	routes.forEach(([entry, output]) => {
		if (cam < entry) {
			answer += 1;
			cam = output;
		} else {
			if (cam > output) cam = output;
		}
	});

	return answer;
}

console.log(
	solution([
		[-20, 15],
		[-14, -5],
		[-18, -13],
		[-5, -3],
	])
);
