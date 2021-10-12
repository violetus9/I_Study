// 후보키

/* 부러진 이유: [0, 01, 12, 142]와 같은 입력이 주어진 경우 142를 지우지 못함 */

const comb = (arr, n) => {
	if (n === 1) return arr.map((e) => [e]);

	const res = [];

	arr.forEach((fix, i, ori) => {
		const rest = ori.slice(i + 1);
		const com = comb(rest, n - 1);
		const att = com.map((e) => [fix, ...e]);
		res.push(...att);
	});

	return res;
};

const overlab = (relation, arrOfIdx) => {
	const originLength = relation.length;
	const forCompare = Array.from({ length: originLength }, () => "");

	arrOfIdx.forEach((i) => {
		relation.forEach((e, idx) => {
			forCompare[idx] += e[i];
		});
	});

	const set = new Set(forCompare);

	if (set.size === originLength) return arrOfIdx.join("");
	else return null;
};

/*
// const spellChecker = ([shifted, ...idxArr], res = []) => {
// 	res.push(shifted);
// 	const check = idxArr.filter((e) => !e.includes(shifted));

// 	if (check.length === 0) {
// 		return res;
// 	}

// 	return spellChecker(check, res);
// };
/////////////////////////////////////////////////////
// 한줄 코드 리팩토링
// const f = ([s, ...i], r = []) => i.length === 0 ? r : f(i.filter(e => !e.includes(s)), [...r, s]);
*/

const spellChecker = (arrOfIdx) => {};

function solution(relation) {
	const answer = [];
	const cols = relation[0].length;
	const indexes = Array.from({ length: cols }, (_, i) => i);

	let level = 1;
	while (level <= indexes.length) {
		const C = comb(indexes, level);
		for (const c of C) {
			const compareC = overlab(relation, c);
			compareC ? answer.push(compareC) : "";
		}
		level += 1;
	}
	const candidate = spellChecker(answer);

	return candidate.length;
}

// 학번, 이름, 전공, 학년

// 유일성, 최소성 충족할 것
// 유일성을 띄는 속성이 두 개 이상 겹치면 무조건 유일한 후보가 된다

// 유일성은 괜찮, 문자열 더해서 set 처리하면 되니까
// 근데 최소성을 만족시키기 위해선?
// o o x x 가 최소성 기준이라면
// o o o x
// o o x o
// o o o o 다 불가능

// 1 col 단위로 1~4까지 검색, 기존 최소성 만족하는것 체크
// 학번: 0 >> 유일, 최소
// 이름: 1, 전공: 2, 학년: 3 에서
// [0, 2, 3] 이라 조합이 나온다면?
// 어딘가 등록된 [0] 조건에 의해 [0, 2, 3]은 불가능
// [1, 2]가 등록되었다면
// [1, 2, 3] 조합에서 [1, 2]가 포함관계이므로 불가능

// console.log(
// 	solution([
// 		["100", "ryan", "music", "2"],
// 		["200", "apeach", "math", "2"],
// 		["300", "tube", "computer", "3"],
// 		["400", "con", "computer", "4"],
// 		["500", "muzi", "music", "3"],
// 		["600", "apeach", "music", "2"],
// 	])
// );
console.log(
	solution([
		["a", "1", "aaa", "c", "ng"],
		["a", "1", "bbb", "e", "g"],
		["c", "1", "aaa", "d", "ng"],
		["d", "2", "bbb", "d", "ng"],
	])
);
