// 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
	var answer = 0; // time
	var b = [];
	var sum = 0;

	// 다리 시각화
	while (b.length !== bridge_length) {
		b.push(0);
	}

	// 반동분자 제거
	// var chk = (a, b) => (a + b) > weight;

	// 출발시 한개씩 뒤에서 넣고 다닳을때까지
	while (truck_weights.length !== 0) {
		sum -= b[0];
		b.shift();
		if (sum + truck_weights[0] <= weight) {
			sum += truck_weights[0];
			b.push(truck_weights[0]);
			truck_weights.shift();
		} else {
			b.push(0);
		}

		answer++;
	}

	answer += bridge_length;
	return answer;
}
