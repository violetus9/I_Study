// 조이스틱

// 'A'.charCodeAt(0) >> 65
// 'Z'.charCodeAt(0) >> 90
// 역이동은 91부터 해야 A>Z 반영
function solution(name) {
	let answer = 0;
	let cName = [];
	let move = 0;

	for (const i of name) {
		answer +=
			i.charCodeAt() - 65 > 13 ? 91 - i.charCodeAt() : i.charCodeAt() - 65;
		i === "A" ? cName.push(0) : cName.push(1);
	}

	let reArr = (dir, idx) => {
		while (idx) {
			if (dir === 1) {
				cName.shift();
				cName.push(0);
			} else {
				cName.pop();
				cName.unshift(0);
			}
			idx--;
			move += 1;
		}
		cName[0] = 0;
	};
	while (cName.includes(1)) {
		let rName = [...cName].reverse();
		cName.indexOf(1) <= rName.indexOf(1) + 1
			? reArr(1, cName.indexOf(1))
			: reArr(0, rName.indexOf(1) + 1);
	}

	return answer + move;
}

// 아래 코드는 문제를 잘못 이해했지만 폭탄터지는거라던가 그런개념에 더 적합할듯

//   let reverseName = [...honestName].reverse();

//   let stack = 0;
//   while(honestName.includes(1)){

//     (honestName[stack+1]===0 && reverseName[stack]===0)?
//     (++stack):
//       (honestName[stack+1]===1)?
//         (honestName[stack+1]=0, ++stack):
//         (honestName[reverseLen-stack-1]=0, ++stack);
//   }

/*

  name에 대한 좌우순회 기대치
  JANANAAAAAAANA >> 우12, 우4좌6
  JAANAN   >> 우5, 좌3
  JANAAAN  >> 우6, 좌5, 우2좌3
  
  ++ 문자열은 immutable (강조 별표백개)************

*/
