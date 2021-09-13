// JadenCase 문자열 만들기

/* runtime Error */

// function solution(s) {
// 	const answer = s
// 		.toLowerCase()
// 		.split(" ")
// 		.map((str) => {
// 			return `${str[0].toUpperCase()}${str.substr(1, str.length - 1)}`;
// 		})
// 		.join(" ");

// 	return answer;
// }

function solution(s) {
	return s
		.split(" ")
		.map((e) => `${e.charAt(0).toUpperCase()}${e.slice(1).toLowerCase()}`)
		.join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
