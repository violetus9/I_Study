// 소수 찾기

function solution(numbers) {
	const numArr = numbers.split("");
	const prison = new Set();

	const prime = (n) => {
		for (let i = 2; i <= Math.sqrt(n); i++) {
			if (n % i === 0) return false;
		}
		return true;
	};

	const recur = (arr, letter) => {
		if (arr.length) {
			for (let i = 0; i < arr.length; i++) {
				const tmpArr = [...arr];
				tmpArr.splice(i, 1);
				recur(tmpArr, letter + arr[i]);
			}
		}
		if (letter > 1 && prime(parseInt(letter))) prison.add(parseInt(letter));
	};

	recur(numArr, "");

	return prison;
}

console.log(solution("17"));
console.log(solution("011"));
console.log(solution("102011"));
