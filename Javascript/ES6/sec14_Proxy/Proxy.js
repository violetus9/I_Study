/* Proxy로 interception기능구현 */

// Proxy : 어떤 Object를 가로채 다른 기능을 추가로 수행
// >> 기존의 할 수 없던 기능의 수행 개념이 아니라 Object의 변경,추가 등의 부수적 일을 더하는 기능

// // (targetObj, Handler)
// const myObj = { name: 'crom' };

// const proxy = new Proxy(myObj, {});

// console.log(proxy.name);  // crom 출력
// // 그냥 감싸는거 아니야 ? 라고 생각할 수 있음

// // 아래 구문 실행시 proxy와 myObj가 proxy와 Object로 다르게 출력된다는 것을 알 수 있다
// proxy.name = 'jisu';

// String.call(proxy); // [obejct Object]
// // console.log(proxy);
// // console.log(myObj);

// // console.log(proxy === myObj); // false
// console.log(proxy.name === myObj.name); // true


/* 실행 단위 분기점(이전 실행과 별개수행할 것!) */

// 데이터 값을 변경하거나(set, get) 뭐 그럴때

const myObj = { name: 'crong', changedValue: 0 };
const proxy = new Proxy(myObj, {
  // receiver : 여기선 proxy자체를 의미
  get: function (target, property, receiver) {
    // get에 아무것도 안쓰면 리턴하면됨 걍
    console.log('get value');
    return target[property];
  },
  set: function (target, property, value) {
    console.log('set value');
    target['changedValue']++;
    target[property] = value; // 새로운 value 할당
    // target의 대상은 proxy가 아닌 프록시가 기억하는 첫 객체 >> myObj
  }
});

// get value
console.log(proxy.name);

// 변화가 있다 >> 프록시 작동(set)
console.log(proxy.name = 'changed');

// set 발동 할 때마다 changedValue 증가됨
myObj.name = 'next step';
console.log(myObj);

// 만약 myObj에 대한 내용을 숨기고자 한다면
// const proxy = new Proxy({ name: 'crong', changedValue: 0 }, {
// 위처럼 프록시 내부로 할당시켜놓는다면 해당 객체는 다른곳에서 쓰이지 않게, 프록시의 기능으로 추가할 수 있다
// 값 변경시 다른곳에 변화를 주는, dataBinding 작업 등을 가능케함


// 프록시 내부 get의 return에 대해 보자
// 반환 자체를 프록시의 영역이 아니라는 사람이 있다, 이 경우 Reflect를 씀(단순 값 반환)
// return Reflect.get(target, property);
// 이렇게 하면 타겟의 프로퍼티 변화값을 얻을 수 있고 이 경과를 리턴케된다
// 이 방법을 권장한다고 한다


// 프록시에 타겟이 없다는걸 반환하고싶어
// return (property in target) ? target[property] : 'anonymous';
// console.log(proxy.adfasdfasdf);  // >> 'anonymous'


// 로깅(가로채서 카운팅...)이나, 추가적인 데이터에 변화를 준다거나 할 때 프록시를 유용하게 쓸 수 있어~

