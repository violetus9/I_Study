// 제일 작은 수 제거하기

function solution(arr) {
	const min = Math.min(...arr);
	while (arr.includes(min) && arr.length > 1) {
		arr.splice(arr.indexOf(min), 1);
	}
	if (arr.length === 1) {
		return [-1];
	}
	return arr;
}
