// 영어 끝말잇기

function solution(n, words) {
	const wl = words.length;
	// 단어는 정렬되어 주어지기에 필요 X
	// const used = new Array(wl).fill(false);
	const used = [words[0]];

	for (let i = 1; i < wl; i++) {
		const back = words[i - 1];
		const now = words[i];

		if (back[back.length - 1] === now[0] && !used.includes(now)) {
			used.push(now);
		} else {
			const cnt = parseInt(i / n) + 1;
			const user = (i % n) + 1;
			return [user, cnt];
		}
	}

	return [0, 0];
}

console.log(
	solution(3, [
		"tank",
		"kick",
		"know",
		"wheel",
		"land",
		"dream",
		"mother",
		"robot",
		"tank",
	])
);
console.log(
	solution(5, [
		"hello",
		"observe",
		"effect",
		"take",
		"either",
		"recognize",
		"encourage",
		"ensure",
		"establish",
		"hang",
		"gather",
		"refer",
		"reference",
		"estimate",
		"executive",
	])
);
console.log(
	solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
