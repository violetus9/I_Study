// 정수 제곱근 판별

function solution(n) {
	const root = Math.sqrt(n);

	if (root === Math.floor(root)) {
		return (root + 1) ** 2;
	} else {
		return -1;
	}
}

// 소수점 비교할 필요 있다면 부동소수 생각해서 크기 비교로 구하자
