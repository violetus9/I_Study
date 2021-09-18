// 뉴스 클러스터링

function solution(str1, str2) {
	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();

	const s1 = [];
	const s2 = [];

	const chk = (sth) => {
		if (!!sth.match(/[^A-Z]/g) || sth.length !== 2) {
			return false;
		} else {
			return true;
		}
	};

	for (let i = 0; i < str1.length; i++) {
		const cutt = str1.slice(i, i + 2);
		chk(cutt) ? s1.push(cutt) : "";
	}

	for (let i = 0; i < str2.length; i++) {
		const cutt = str2.slice(i, i + 2);
		chk(cutt) ? s2.push(cutt) : "";
	}

	let gyo = 0;

	for (let i = 0; i < s1.length; i++) {
		for (let j = 0; j < s2.length; j++) {
			if (s1[i] === s2[j]) {
				gyo += 1;
				s2[j] = null;
				break;
			}
		}
	}

	let hap = s1.length + s2.length - gyo;

	if (hap === gyo) return 65536;

	return Math.floor((gyo / hap) * 65536);
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
console.log(solution("aaaa+bbb", "aaa+bbbb"));

// 문제를 잘 읽어보자... 숫자쌍 넣지말라고 분명 써있었는데...........
