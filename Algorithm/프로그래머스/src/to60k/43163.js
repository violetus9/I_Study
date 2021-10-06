// 단어 변환

function solution(begin, target, words) {
	// safty code
	if (!words.includes(target)) return 0;

	let answer = 0;
	const queue = [begin];
	let positive = [];
	const checked = {};

	while (queue.length) {
		const outWord = queue.shift();
		checked[outWord] = true;
		if (outWord === target) return answer;

		// 한 글자 다른가 체크
		for (let i = 0; i < words.length; i++) {
			let step = 0;
			for (let j = 0; j < outWord.length; j++) {
				if (outWord[j] !== words[i][j]) {
					step += 1;
				}
			}

			if (step === 1) {
				positive.push(words[i]);
				checked[words[i]] = true;
			}
		}

		/* 큐가 비어있지 않으면 다음 처리를 해선 안돼 */

		if (!queue.length) {
			queue.push(...positive);
			positive = [];
			answer += 1;
		}
	}

	return answer;
}

// 시작을 큐에 담고 하나씩 바뀐지 판단 > 맞으면 추가
// queue.shift() === target? 단계 반환
// 그렇지 못한 경우 반복
// 순차적으로 생각하고 바로 코드로 옮기면 편하다

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
