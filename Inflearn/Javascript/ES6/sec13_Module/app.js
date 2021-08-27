// module(export & import)의 이해

// JS서 module(import & export)는 아직 실험적인 기능이라 함

// myLogger를 불러와 실행하고자함
import { getCurrentHour, MyLogger, _ } from './myLogger';


const root = document.querySelector('#root');
root.innerHTML = '<p>Hello World ! </p>';

// log();
// myLogger에서 export하지 않으면 오류가 남

_.log('my first test data');
// log(getTime());
_.log(getCurrentHour());

const logger = new MyLogger();
_.log(`my !!! : ${logger.getLectures()}`);

