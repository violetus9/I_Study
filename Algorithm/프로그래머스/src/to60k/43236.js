// 징검다리

/*
거리간 정렬해서 맨앞 세개만 더하면 되는게 아님
애초에 바위 위치가 고정되어있어서 정렬하면 문제가 성립하지 않음
*/

// function solution(distance, rocks, n) {
// 	rocks.sort((a, b) => a - b);

// 	let maxDist = 0;

// 	const rockDist = [];
// 	for (let i = 1; i < rocks.length; i++) {
// 		rockDist.push(rocks[i] - rocks[i - 1]);
// 	}

// 	const initDist = [
// 		rocks[0],
// 		...rockDist,
// 		distance - rocks[rocks.length - 1],
// 	].sort((a, b) => a - b);

// 	let idx = 0;
// 	let compare = initDist[n + 1];
// 	while (idx !== n + 1) {
// 		maxDist += initDist[idx];
// 		idx += 1;
// 	}

// 	if (compare < maxDist) {
// 		maxDist = compare;
// 	}

// 	return maxDist;
// }

// entry: 0, output: 25, rocks: [2, 14, 11, 21, 17]
// 바위 삭제 n개 = 2, 조합으로 삭제
// entry, output, 남은 바위간 거리 계산 후 거리 최소값 산출
// 남은 바위는 정렬을 하자, 아니 정렬 시작하고 바위를 삭제하자
// [21, 17] 삭제: [2, 11, 14], 거리: [2, 9, 3, 11]

// 주어진 예제를 보면 [21, 17], [2, 21], [2, 11], [11, 21], [2, 14] 순으로 제거중
// 모종의 규칙이 있을 것임
// 어떤 기준으로 인해 하나의 바위는 고정하고 다른 바위를 삭제중임

// 초기상태의 사이거리들 [2, 9, 3, 3, 4, 4] 에서 임의 3개를 더해 거리를 산출중
// 거리 최소가 최대인 값은 그냥 임의 세개씩 더해서 그중 최소만 비교하면 되지 않나?

/* 다시 */

function solution(distance, rocks, n) {
	rocks.sort((a, b) => a - b);
	const initRocks = [0, ...rocks, distance];

	let minimum = 0;
	let maximum = distance;
	let middle = parseInt((minimum + maximum) / 2);

	while (minimum <= maximum) {
		let rockCnt = 0;
		let position = 0;

		for (let i = 1; i < initRocks.length; i++) {
			if (initRocks[i] - position < middle) {
				rockCnt += 1;
			} else {
				position = initRocks[i];
			}
		}
		// console.log(minimum, "--", middle, "--", maximum);

		if (rockCnt > n) maximum = middle - 1;
		else if (rockCnt <= n) minimum = middle + 1;
		middle = parseInt((minimum + maximum) / 2);
	}

	// console.log(initRocks);

	return maximum;
}

// 이분탐색으로 분류됐으니 말을 잘 들어보자
// 기준이 되는건 바위 사이 거리
// 거리 기준치 기준 최대를 찾아야함 > 기준 대상으로 삭제된 바위 수를 따지면?
// case 1에서 [0, 2, 11, 14, 17, 21, 25] (미만인 것만 제거할 것)
// 0~25, 12 => del: 2, 11, 17, 21 > 4개, n이 2보다 큼 >> max = mid - 1 = 11;
// 0~12, 5  => del: 2, 14, 21 > 3개, n이 2보다 큼 >> max = mid - 1 = 2;
// 0~ 5, 2  => del: > 0개, n이 2보다 작음 >> min = mid + 1 = 3;
// 3~ 5, 4  => del: 2, 14 > n = 2 >> max = mid - 1 = 4;
// 3~ 4, 3  => del: 2 > n = 1 >> min = mid + 1 = 4;
// 4~ 4, min === max > stop

console.log(solution(25, [2, 14, 11, 21, 17], 2));
console.log(solution(18, [2, 8, 9, 10, 11, 12, 13], 6));
