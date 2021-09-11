// 순위 검색

const C = (eachInfo, score, data, idx) => {
	const key = eachInfo.join("");
	const val = data[key];

	if (val) {
		data[key].push(score);
	} else {
		data[key] = [score];
	}

	for (let i = idx; i < eachInfo.length; i++) {
		const resData = [...eachInfo];
		resData[i] = "-";

		C(resData, score, data, (idx += 1));
	}
};

const biS = (data, key, score) => {
	const tmpArr = data[key];

	if (tmpArr) {
		let start = 0;
		let end = tmpArr.length;

		while (start < end) {
			const pivot = Math.floor((start + end) / 2);

			if (tmpArr[pivot] >= score) {
				end = pivot;
			} else {
				start = pivot + 1;
			}
		}
		return tmpArr.length - start;
	} else {
		return 0;
	}
};

function solution(info, query) {
	const answer = [];
	const data = {};

	for (let i = 0; i < info.length; i++) {
		const eachInfo = info[i].split(" ");
		const score = eachInfo.pop();

		C(eachInfo, score, data, 0);
	}
	// console.log(data);
	for (const k in data) {
		data[k].sort((a, b) => a - b);
	}
	// console.log(data);

	for (let i = 0; i < query.length; i++) {
		const eachQuery = query[i].replace(/and /g, "").split(" ");
		const score = parseInt(eachQuery.pop());

		// console.log(eachQuery, score);

		answer.push(biS(data, eachQuery.join(""), score));
	}

	return answer;
}

console.log(
	solution(
		[
			"java backend junior pizza 150",
			"python frontend senior chicken 210",
			"python frontend senior chicken 150",
			"cpp backend senior pizza 260",
			"java backend junior chicken 80",
			"python backend senior chicken 50",
		],
		[
			"java and backend and junior and pizza 100",
			"python and frontend and senior and chicken 200",
			"cpp and - and senior and pizza 250",
			"- and backend and senior and - 150",
			"- and - and - and chicken 100",
			"- and - and - and - 150",
		]
	)
);
