// 카펫

function solution(brown, yellow) {
	let answer = [];

	// 확실한건 yellow의 둘레 + 4 = brown
	// yellow의 둘레를 어떻게 산정하느냐..
	// 10 - 4 = 6 >> y_width + y_height = 3
	// 8 - 4 = 4 >> y_width + y_height = 2
	// 24 - 4 = 20 >> y_width + y_height = 10

	// for 해서 y_w * y_h 가 yellow와 같으면 그 값이 맞음을 지정해
	let width = 0;
	let height = 0;
	for (let y_width = 0; y_width < (brown - 4) / 2; y_width++) {
		let y_height = yellow / y_width;
		if (y_width + y_height === (brown - 4) / 2) {
			width = y_width + 2;
			height = y_height + 2;
		}
	}
	console.log([width, height]);
	answer = [width, height];
	return answer;
}

solution(10, 2);
solution(8, 1);
solution(24, 24);
