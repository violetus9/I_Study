// 멀쩡한 사각형

const formula = (w, h) => {
	const div = w % h;
	if (div === 0) {
		return h;
	}
	return formula(h, div);
};

function solution(w, h) {
	const prses = formula(w, h);

	return w * h - (w + h - prses);
}

// 공식 참고함(수학적일수록 풀이는 짧아지는듯)
console.log(solution(8, 12));
