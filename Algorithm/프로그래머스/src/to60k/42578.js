// 위장

/* 틀림, 조건 어딘가 빼먹은듯 하다 그거아니고는 말이 안댐 */

// function solution(clothes) {
// 	let answer = 0;

// 	// string: [의상 이름, 종류]
// 	// 동일 이름은 없다
// 	// a-z && _

// 	const status = {};

// 	for (const e of clothes) {
// 		const name = e[0];
// 		const category = e[1];
// 		if (!status[category]) {
// 			status[category] = [name];
// 		} else {
// 			status[category] = [...status[category], name];
// 		}
// 	}
// 	// console.log(status);

// 	answer = Object.values(status)
// 		.map((v) => v.length)
// 		.reduce((pre, cur) => pre * cur);

// 	if (answer !== Object.values(status).flat().length) {
// 		answer += Object.values(status).flat().length;
// 	}

// 	return answer;
// }

/* 틀린 이유: 옷이 세파츠 주어졌을 때 두파츠만 입는 경우를 안따짐 */

/* ------------절취선------------ */

function solution(clothes) {
	let answer = 0;

	// 같은 이름을 가진 의상은 존재하지 않음
	// >> 굳이 문자열로 저장할 필요 없이 숫자로 종류만 나타내자
	const status = {};

	for (let i = 0; i < clothes.length; i++) {
		if (!status[clothes[i][1]]) {
			status[clothes[i][1]] = 1;
		} else {
			status[clothes[i][1]] += 1;
		}
	}

	// console.log(status);

	// 한 카테고리 내부에서 완전 입지 않는 경우 추가(cur + 1)
	// 그래야 모든 경우가 구해진다
	// >> 그 이후 결과적으로 아무것도 안입는 -1만 처리해주면 끝
	answer = Object.values(status).reduce((pre, cur) => pre * (cur + 1), 1);

	return answer - 1;
}

console.log(
	solution([
		["yellowhat", "headgear"],
		["bluesunglasses", "eyewear"],
		["green_turban", "headgear"],
	])
);
console.log(
	solution([
		["crowmask", "face"],
		["bluesunglasses", "face"],
		["smoky_makeup", "face"],
	])
);
