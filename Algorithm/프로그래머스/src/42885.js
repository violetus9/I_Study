// 구명보트

/* 테케 올 통과, but 효율성 제로 */
// function solution(people, limit) {
// 	let rescue = 0;

// 	people.sort((a, b) => b - a);

// 	while (true) {
// 		if (people.length === 0) return rescue;
// 		let weight = limit;
// 		weight -= people[0];
// 		people.shift();
// 		if (weight >= people[people.length - 1]) {
// 			people.pop();
// 		}
// 		rescue += 1;
// 	}
// }

function solution(people, limit) {
	let rescue = 0;
	let peopleCount = people.length - 1;

	people.sort((a, b) => b - a);

	for (let i = 0; i <= peopleCount; i++) {
		rescue += 1;
		if (people[i] + people[peopleCount] <= limit) peopleCount -= 1;
	}

	return rescue;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
