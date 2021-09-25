// 압축

function solution(msg) {
	const answer = [];
	const dict = {};
	let dictNum = 27;

	for (let i = 1, charN = 65; i < 27; i++) {
		const alph = String.fromCharCode(charN++);
		dict[alph] = i;
	}

	let idx = 0;
	while (idx < msg.length) {
		let word = "";

		for (let i = idx; i < msg.length; i++) {
			const nextWord = msg.substring(idx, i + 1);

			if (dict[nextWord]) {
				word = nextWord;
			} else {
				dict[nextWord] = dictNum++;
				break;
			}
		}
		answer.push(dict[word]);
		idx += word.length;
	}

	console.log(dict);

	return answer;
}

console.log(solution("KAKAO"));
// console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
// console.log(solution("ABABABABABABABAB"));
