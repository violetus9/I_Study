// 신규 아이디 추천

function solution(new_id) {
	// 정규식 순서 중요함
	let recommend = new_id
		.toLowerCase()
		.replace(/[^\w-_.]/g, "")
		.replace(/\.{2,}/g, ".")
		.replace(/^\.|\.$/g, "")
		.replace(/^$/g, "a")
		.slice(0, 15)
		.replace(/\.$/, "");
	while (recommend.length <= 2) {
		recommend += recommend[recommend.length - 1];
	}
	return recommend;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
