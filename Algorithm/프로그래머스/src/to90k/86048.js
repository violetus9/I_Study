// 입실 퇴실

function solution(enter, leave) {
	const users = {};
	const room = [];

	for (const e of enter) {
		users[e] = { haveWeMet: [...room], out: false };
		room.push(e);

		if (!users[e].out) {
			const inRoom = Object.keys(users);
			for (const u of inRoom) {
				if (u == e || users[u].out) continue;
				users[u].haveWeMet.push(e);
			}
		}

		while (room.includes(leave[0])) {
			const left = leave.shift();
			users[left].out = true;
			room.splice(room.indexOf(left), 1);
		}
	}

	return Object.entries(users).map((e) => e[1].haveWeMet.length);
}

// tc1.
// 1 >> 입실
// 1, 3 >> 입실
// 3 >> 1 퇴실
// 2, 3 >> 2 입실
// 3 >> 2 퇴실
// 3 퇴실

// console.log(solution([1, 3, 2], [1, 2, 3]));
// console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]));
// console.log(solution([3, 2, 1], [2, 1, 3]));
// console.log(solution([3, 2, 1], [1, 3, 2]));
console.log(solution([1, 4, 2, 3], [2, 1, 4, 3]));
