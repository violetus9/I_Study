// N개의 최소공배수

const gcd = (a, b) => {
	if (b === 0) return a;
	return gcd(b, a % b);
};

function solution(arr) {
	return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
