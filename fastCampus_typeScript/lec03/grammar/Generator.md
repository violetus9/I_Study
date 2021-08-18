## 생성기 함수(generator)

generator는 기존 함수의 개념을 확대한 것이라고 보면 된다.

```ts
function makeInfiniteEnergyGenerator() {
	// energy를 클로저에 가둔다, closer를 이용한 기존의 방법
	let energy = 0;
	return function (booster = 0) {
		if (booster) {
			energy += booster;
		} else {
			energy++;
		}

		return energy;
	};
}

// generator
function* infiniteEnergyGenerator() {
	let energy = 1;
	while (true) {
		const booster = yield energy;

		if (booster) {
			energy += booster;
		} else {
			energy++;
		}
	}
}

// const energy = makeInfiniteEnergyGenerator();

// for (let i = 0; i < 5; i++) {
// 	console.log(energy());
// }

// console.log(energy(5));

const energyGenerator = infiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
	console.log(energyGenerator.next());
}

console.log(energyGenerator.next(5));
```

doc 읽어보면서 예제를 해석해보자
