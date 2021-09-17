// N-Queen

// 충돌체크
const crash = (col, i, negative) => {
  negative.add(i);
  negative[i - 1]??negative.add(i - 1);

};

function solution(n) {
	if (n <= 1) return 1;
	if (n <= 3) return 0;

	let answer = 0;
	const col = Array(n).fill(true);
  const alwayNegative = new Set();

	// n <= 12, 열당 한개의 말이 존재해야 함
	// 한 점에 대해 +1, -1, 0 열은 활성화되어선 안됨(0인 열은 항상 false)
	// 행에 대한 정보를 bool로 지정, 이전 행동에 대한 결과를 다음 행으로 이전
  for (let i = 0; i < n; i++) {
    crash(col, i, alwayNegative);
  }

	return answer;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(4));
console.log(solution(5));
