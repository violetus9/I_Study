// 오픈채팅방

// function solution(record) {
// 	const answer = [];
// 	const tmp = [];
// 	const user = {};
// 	const command = (order, uid, nic) => {
// 		switch (order) {
// 			case "Enter":
// 				user[uid] = nic;
// 				return [uid, "님이 들어왔습니다."];
// 			case "Leave":
// 				return [uid, "님이 나갔습니다."];
// 			case "Change":
// 				user[uid] = nic;
// 		}
// 	};

// 	record.map((e) => {
// 		const [order, uid, nic] = e.split(" ");
// 		tmp.push(command(order, uid, nic));
// 	});

// 	tmp.filter((e) => {
// 		if (e !== undefined) {
// 			const [uid, str] = e;
// 			answer.push(`${user[uid]}${str}`);
// 		}
// 	});

// 	return answer;
// }

/* 더 줄일 수 있음 */

function solution(record) {
	const answer = [];
	const user = {};
	const command = {
		Enter: "님이 들어왔습니다.",
		Leave: "님이 나갔습니다.",
	};

	record.forEach((e) => {
		const [order, uid, nic] = e.split(" ");

		if (order !== "Change") {
			answer.push([order, uid]);
		}

		if (nic) {
			console.log(nic);
			user[uid] = nic;
		}
	});

	return answer.map(([order, uid]) => {
		return `${user[uid]}${command[order]}`;
	});
}

console.log(
	solution([
		"Enter uid1234 Muzi",
		"Enter uid4567 Prodo",
		"Leave uid1234",
		"Enter uid1234 Prodo",
		"Change uid4567 Ryan",
	])
);
