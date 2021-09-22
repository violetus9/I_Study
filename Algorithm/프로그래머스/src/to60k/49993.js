// 스킬트리

function solution(skill, skill_trees) {
	let answer = 0;

	const processed = skill_trees.map((e) => {
		return e.split("").filter((el) => skill.includes(el));
	});

	// console.log(processed);

	for (const eachTree of processed) {
		let flag = true;
		for (let i = 0; i < eachTree.length; i++) {
			if (skill[i] !== eachTree[i]) {
				flag = false;
				break;
			}
		}
		flag ? (answer += 1) : "";
	}

	return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
