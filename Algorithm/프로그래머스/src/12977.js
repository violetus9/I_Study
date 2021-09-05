// 소수 만들기

const log = console.log;

const checker = (n) => {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
};

function solution(nums) {
	let answer = 0;

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (checker(nums[i] + nums[j] + nums[k])) {
					answer += 1;
				}
			}
		}
	}

	return answer;
}

log(solution([1, 2, 3, 4]));
log(solution([1, 2, 7, 6, 4]));
