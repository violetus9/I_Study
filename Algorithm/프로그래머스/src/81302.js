// 거리두기 확인하기
// 연구 필요, 보류

function solution(places) {
	return places;
}

/* 이건 미쳤다 */

/* 출처: https://velog.io/@wlgns5376/Programers-Javascript-%EA%B1%B0%EB%A6%AC%EB%91%90%EA%B8%B0-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-2021-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%9D%B8%ED%84%B4%EC%89%BD */

// function solution(places) {
// 	const answer = places.map((p) => {
// 		return p.some((row, rowIdx) => {
// 			return row.split("").some((col, colIdx, arr) => {
// 				// if (col === "X") return false;

// 				const searchP = [
// 					arr[colIdx - 1] || null,
// 					arr[colIdx + 1] || null,
// 					(p[rowIdx - 1] || "").charAt(colIdx),
// 					(p[rowIdx + 1] || "").charAt(colIdx),
// 				].filter((v) => v === "P").length;

// 				if ((col === "P" && searchP > 0) || (col === "O" && searchP >= 2)) {
// 					return true;
// 				}

// 				return false;
// 			}, "");
// 		})
// 			? 0
// 			: 1;
// 	});

// 	// X: partition, O: emptyTable, P: people

// 	return answer;
// }

console.log(
	solution([
		["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
		["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
		["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
		["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
		["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
	])
);
