// 완주하지 못한 선수

function solution(participant, completion) {
	let answer = "";

	participant.sort();
	completion.sort();
	for (const i in participant) {
		if (completion[i] !== participant[i]) {
			return participant[i];
		}
	}
}
