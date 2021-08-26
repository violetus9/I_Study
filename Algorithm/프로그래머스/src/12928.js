// 약수의 합

/*      테케1번이 자꾸 틀린다. 왤까..     */
// function solution(n) {
//   let answer = 0;

//   const tmpArr = [];

//   for (let i = 0; i <= n / 2; i++) {
//       if (n % i === 0) {
//           tmpArr.push(n / i);
//           tmpArr.push(i);
//       }
//   }

//   const yakSet = new Set(tmpArr);

//   yakSet.forEach(n => answer += n);

//   return answer;
// }

/*  아무튼 정답은 이거다  */
function solution(n) {
	let answer = 0;

	const tmpArr = [];

	for (let i = 0; i <= n; i++) {
		if (n % i === 0) {
			tmpArr.push(i);
		}
	}

	tmpArr.forEach((n) => (answer += n));

	return answer;
}
