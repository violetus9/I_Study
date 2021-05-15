// TS & JS 뭐가 다를까 간략하게 알아보자

let age = 10;

// 모호함에 대한 타입을 지정할 수 있음
let weight: number = 80;

// 더 나아가 단위도!
type Centimeter = number;
let height: Centimeter = 176;
// weight 자체만 놓고 보자면, 넘버에서 더 나아가 정보를 제공하는데 제한이 있으니
// height, 사실 넘버지만, 센티미터라는 단위를 우리가 지정했다

type RainbowColor = 'red' | 'orange' | 'yellow';
let color: RainbowColor = 'orange';
// 익숙해지면 코드도 짧아지고 표현성도 좋아질듯

// color = 'black'; // 에러 발생!

// 어떻게 이게 가능하지 >> TS는 transFiler!
// 사실 기존에도 Babel 갖다가 상위 JS를 하위로 변환해주고 그래써

// 보니까 규모가 커질수록 데이터가 많아질텐데 거기서 이점이 크겠네



