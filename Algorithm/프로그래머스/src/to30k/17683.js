// 방금그곡

function solution(m, musicinfos) {
	// music: (play(min): Number),
	const scales = {
		C: "a",
		"C#": "b",
		D: "c",
		"D#": "d",
		E: "e",
		F: "f",
		"F#": "g",
		G: "h",
		"G#": "i",
		A: "j",
		"A#": "k",
		B: "l",
	};

	const playTimeCalc = (start, end) => {
		const [minS, secS] = start.split(":");
		const [minE, secE] = end.split(":");

		return minE * 60 + secE * 1 - (minS * 60 + secS * 1);
	};

	const parseCustom = (sheet) => {
		let converted = "";
		for (let i = 0; i < sheet.length; i++) {
			if (sheet[i + 1] === "#") {
				converted += scales[`${sheet[i]}${sheet[i + 1]}`];
				i += 1;
			} else {
				converted += scales[sheet[i]];
			}
		}

		return converted;
	};

	const answer = [];

	for (const info of musicinfos) {
		const [start, end, music, sheet] = info.split(",");
		const playTime = playTimeCalc(start, end);
		const wannaFind = parseCustom(m);
		const sheetArray = parseCustom(sheet);

		let actualRuntime = "";
		const sheetLeng = sheetArray.length;
		if (sheetLeng > playTime) {
			actualRuntime = sheetArray.substring(0, playTime);
		} else {
			for (let i = 0; i < playTime; i++) {
				actualRuntime += sheetArray[i % sheetLeng];
			}
		}

		if (actualRuntime.includes(wannaFind)) answer.push([music, playTime]);
	}

	return answer.length === 0
		? "(None)"
		: answer.sort((a, b) => b[1] - a[1])[0][0];
}

console.log(
	solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
console.log(
	solution("CC#BCC#BCC#BCC#B", [
		"03:00,03:30,FOO,CC#B",
		"04:00,04:08,BAR,CC#BCC#BCC#B",
	])
);
console.log(
	solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
