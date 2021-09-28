// 직업군 추천하기

function solution(table, languages, preference) {
	const answer = [];

	const userPrefer = {};
	languages.forEach((e, i) => (userPrefer[e] = preference[i]));

	for (const e of table) {
		const [title, ...rest] = e.split(" ");
		const tmp = [];

		for (let i = 0; i < rest.length; i++) {
			if (userPrefer[rest[i]]) {
				tmp.push((5 - i) * userPrefer[rest[i]]);
			} else {
				tmp.push(0);
			}
		}
		answer.push([title, tmp.reduce((pre, cur) => pre + cur, 0)]);
	}

	return answer.sort((a, b) => {
		if (a[1] > b[1]) return -1;
		if (a[1] < b[1]) return 1;

		if (a[0] > b[0]) return 1;
		if (a[0] < b[0]) return -1;
	})[0][0];
}

console.log(
	solution(
		[
			"SI JAVA JAVASCRIPT SQL PYTHON C#",
			"CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
			"HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
			"PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
			"GAME C++ C# JAVASCRIPT C JAVA",
		],
		["PYTHON", "C++", "SQL"],
		[7, 5, 5]
	)
);
console.log(
	solution(
		[
			"SI JAVA JAVASCRIPT SQL PYTHON C#",
			"CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
			"HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
			"PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
			"GAME C++ C# JAVASCRIPT C JAVA",
		],
		["JAVA", "JAVASCRIPT"],
		[7, 5]
	)
);
