// 파일명 정렬

function solution(files) {
	const operation = [];

	// 1. categorize
	files.forEach((e) => {
		const origin = e;
		const HEAD = e.match(/^[a-zA-Z-. ]+/g).toString();
		const NUMBER = e.match(/[0-9]+/g).toString();
		// const TAIL = e.substring(HEAD.length + NUMBER.length);

		operation.push([origin, [HEAD, NUMBER]]);
	});

	// 2. sorting by condition
	operation.sort((a, b) => {
		const aH = a[1][0].toLowerCase();
		const bH = b[1][0].toLowerCase();

		if (aH < bH) return -1;
		if (aH > bH) return 1;

		const aN = parseInt(a[1][1]);
		const bN = parseInt(b[1][1]);

		return aN - bN;
	});

	return operation.map((e) => e[0]);
}

// a-zA-Z0-9, ' ', \., \-
// 영문 시작, 숫자 하나이상 포함
// HEAD, NUMBER(maxL 5), TAIL 로 구성

console.log(
	solution([
		"img12.png",
		"img10.png",
		"img02.png",
		"img1.png",
		"IMG01.GIF",
		"img2.JPG",
	])
);
console.log(
	solution([
		"F-5 Freedom Fighter",
		"B-50 Superfortress",
		"A-10 Thunderbolt II",
		"F-14 Tomcat",
	])
);
