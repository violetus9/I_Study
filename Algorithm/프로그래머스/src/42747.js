// H-Index

function solution(citations) {
	citations.sort((a, b) => b - a);

	let i = 0;
	while (i <= citations[i] - 1) {
		i += 1;
	}

	return i;
}

console.log(solution([3, 0, 6, 1, 5]));
