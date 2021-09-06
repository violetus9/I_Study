// 다트 게임

function solution(dartResult) {
	let answer = 0;
	const dr = dartResult;

	// 점수|보너스|옵션
	// 점수 0~10 Int
	// 보너스 S(**1), D(**2), T(**3)
	// 옵션 *(*2), #(-n), or nothing

	// 점수 처리 임시 저장소
	let ord = [];
	let tmp = 0;
	for (let i = 0; i < dr.length; i++) {
		if (!isNaN(dr[i])) {
			if (parseInt(dr[i - 1]) === 1) {
				tmp = 10;
			} else {
				tmp = parseInt(dr[i]);
			}
		} else if (dr[i] === "S") {
			ord.push(tmp);
		} else if (dr[i] === "D") {
			ord.push(tmp ** 2);
		} else if (dr[i] === "T") {
			ord.push(tmp ** 3);
		} else if (dr[i] === "*") {
			ord[ord.length - 2] = ord[ord.length - 2] * 2;
			ord[ord.length - 1] = ord[ord.length - 1] * 2;
		} else if (dr[i] === "#") {
			ord[ord.length - 1] = -1 * ord[ord.length - 1];
		}
	}
	// console.log(ord);
	answer = ord.reduce((acc, cur) => acc + cur, 0);
	return answer;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S0T"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
