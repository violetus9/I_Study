## 문법s

[JavaScript](#JavaScript)   
[python](#python)   

<br>
---------------
---------------
<br>

## JavaScript

* **Number(str)** : 문자열 > 숫자
  ```javaScript
  const num = Number('123')     // 123
  const num = Number('123asd')  // NaN
  ```

* **parseInt(str)** : 문자열 > 숫자
  ```javaScript
  const par = parseInt('123asd') // 123
  const par = parseInt('asd123') // NaN
  ```
  * 진수 변환 기능도 있다
    ```javaScript
    parseInt('11', 2);  // 3
    parseInt('f3', 16); // 243
    ```

* **.split(',')** : String객체 > A로 나눈 배열
  ```javaScript
  const str = 'a b c d,e'
  str.split(' ');   // ['a', 'b', 'c', 'd,e']
  ```

* **.toFixed(num)** : 소숫점(반올림) num자리 (문자열을 반환)

* **String.fromCharCode(num)** <반대> **(대상).charCodeAt()**

* **toString()** : 10진수 -> 2진수/16진수
  ```javaScript
  let num = 10;
  num.toString();   // '10'
  num.toString(2);  // '1010'

  let num2 = 255;
  num2.toString(16);  // 'ff'
  ```

* **Math**
  * Math.ceil() : 올림
    ```javaScript
    Math.ceil(5.1); // 6, 반올림과 다름
    ```
  * Math.floor() : 내림
  * Math.round() : 반올림
  * Math.abs() : 절대값
  * Math.pow(n, m) : n의 m제곱
  * Math.sqrt() : 제곱근

* **isNaN()** : isNaN만이 NaN을 판단할 수 있다
  ```javaScript
  let x = Number('x');  // NaN
  x == NaN    // false
  x === NaN   // false
  NaN == NaN  // false
  isNaN(x)    // true
  isNaN(3)    // false
  ```

* **.slice(n, m)** : n부터 m까지 반환

* **.substr(n, m)** : n부터 m개 가져옴

* **.repeat(n)** : n번 반복

* **.splice(n, m, x)** : n시작, m개수 지움, x추가
  ```javaScript
  let arr = [0, 1, 2];
  arr.splice(1, 0, 'a', 'b'); // [0, 'a', 'b', 1, 2]
  ```

* **.splice()** : 삭제된 요소 반환
  ```javaScript
  let arr = [1, 2, 3, 4, 5];
  let res = arr.splice(1, 2);
  console.log(arr);   // [1, 4, 5]
  console.log(res);   // [2, 3]
  ```

* **.slice(n, m)** : n부터 m까지 반환
  ```javaScript
  let arr = [1, 2, 3, 4, 5];
  arr.slice(1, 4);    // [2, 3, 4]
  ```
  * *공괄호 입력 시 배열 복사*

* **.forEach((ele, idx, arr) => {})**

* **.find(fn), findIndex(fn)**
  ```javaScript
  let arr = [1, 2, 3, 4, 5];
  const res = arr.find((item) => {
    return item % 2 === 0;    // 2
  })

  // indexOf로 찾기 힘든 객체서 활용 가능
  let userList = [
    { name: 'K', age: 30 },
    { name: 'N', age: 20 },
    { name: 'H', age: 10 },
  ];
  const res = userList.findIndex((user) => {
    if (user.age < 19) {
      return true;
    }
    return false;
  });
  console.log(res);   // 2
  ```

* **.filter(fn)** : 만족하는 모든 요소 배열 반환

* **.map(fn)** : 함수 받아 기능 수행 후 배열 반환
  ```javaScript
  // 위의 findIndex의 객체 사용
  let newUserList = userList.map((user, idx) => {
    return Object.assign({}, user, {
      isAdult: user.age > 19,
    });
  });
  console.log(newUserList);
  /*  (3) [{..}, {..}, {..}], length: 3
      0: {name: 'K', age: 30, isAdult: true}
      1: {name: 'N', age: 20, isAdult: true}
      2: {name: 'H', age: 10, isAdult: false}
  */
  ```
  * *매핑 개념, 원본 손상 않음*




<br>
-------------------
-------------------
<br>

## python

* **f-string** (python 3.6 이상)
  ```python
  text = 'sth'
  print(f"text는 {text}이다")
  ```  

* **unpacking**
  ```python
  li = [1, 2, 3]
  print(*li)  # 1 2 3
  ```





