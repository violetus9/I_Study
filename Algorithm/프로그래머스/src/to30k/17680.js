// 캐시

function solution(cacheSize, cities) {
	if (cacheSize === 0) return cities.length * 5;

	let answer = 0;
	const cache = [];
	cities = cities.map((e) => e.toLowerCase());

	for (const s of cities) {
		// 캐시 존재
		if (cache.includes(s)) {
			cache.splice(cache.indexOf(s), 1);
			answer += 1;
		}
		// 캐시 존재 X 꽉참
		else if (cacheSize === cache.length) {
			cache.shift();
			answer += 5;
		}
		// 캐시 존재 X 안꽉참
		else {
			answer += 5;
		}
		cache.push(s);
	}

	return answer;
}

console.log(
	solution(3, [
		"Jeju",
		"Pangyo",
		"Seoul",
		"NewYork",
		"LA",
		"Jeju",
		"Pangyo",
		"Seoul",
		"NewYork",
		"LA",
	])
);
console.log(
	solution(3, [
		"Jeju",
		"Pangyo",
		"Seoul",
		"Jeju",
		"Pangyo",
		"Seoul",
		"Jeju",
		"Pangyo",
		"Seoul",
	])
);
console.log(
	solution(2, [
		"Jeju",
		"Pangyo",
		"Seoul",
		"NewYork",
		"LA",
		"SanFrancisco",
		"Seoul",
		"Rome",
		"Paris",
		"Jeju",
		"NewYork",
		"Rome",
	])
);
console.log(
	solution(5, [
		"Jeju",
		"Pangyo",
		"Seoul",
		"NewYork",
		"LA",
		"SanFrancisco",
		"Seoul",
		"Rome",
		"Paris",
		"Jeju",
		"NewYork",
		"Rome",
	])
);
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
