## 문법s

[JavaScript](#JavaScript)   
[python](#python)   
[심심하면 보는거](#심심하면-볼거임~)   

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

* **.sort()** : 정렬시 요소를 문자열 취급(사전식)
  ```javaScript
  let arr = [27, 8, 5, 13];
  arr.sort((a, b) => {
    console.log(a, b);
    /* console
        8 27 5 13
        5 8 27 13
        5 8 13 27
    */
    return a - b;
  })
  ```
  * 정렬 로직을 담은 함수를 직접 구현해야 하기에 실무에서는 **Lodash**를 많이 사용한다

* **.reduce()**
  ```javaScript
  let arr = [1, 2, 3, 4, 5];
  const result = arr.reduce((pre, cur) => {
    return pre + cur;
  }, 0) // 0 -> initial
  ```
  * 좀 더 실용적인 예제
  ```javaScript
  let userList = [
    { name: 'A', age: 10 },
    { name: 'B', age: 20 },
    { name: 'C', age: 30 },
    { name: 'D', age: 40 },
    { name: 'E', age: 50 },
    { name: 'F', age: 60 },
  ]

  let result = userList.reduce((pre, cur) => {
    if(cur.age > 19){
      pre.push(cur.name);
    }
    return pre;
  }, []);
  console.log(result);
  // [over 19 elements]
  ```

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

<br>

- - -
- - -
<br>
<br>

## 심심하면 볼거임~
<br>

- - -

## 기본 자료형
<br>

* /: 연산시 실수형 반환
* //: 몫
* 소수점 출력시 **round(float, 자릿수)** 애용하자

- - -

## 리스트 자료형
<br>

* [] 이용
* indexing: 앞 > a[0], 뒤 > a[-1]
* slicing: ':' 을 이용한 인덱스 설정   
  (ex. a[1:4] > 인덱스 1 ~ 4 까지)
* list-Comprehension
  ```python
  array = [ i for i in range(10) ]
  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  array2 = [ i for i in range(20) if i%2==1]
  # [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  ```
  * 2차원 리스트 초기화시 효과적인 사용 가능!
  ```python
  array = [[0] * m for _ in range(n)] # n X m 행렬 그려줌
  # [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  ```
* methods   
O(1)--------varName.append()   
O(NlogN)--varName.sort()   
O(N)--------varName.sort(reverse=True)   
O(N)--------varName.reverse()   
O(N)--------insert(삽입 위치 인덱스, 삽입 값)   
O(N)--------varName.count(특정 값)   
O(N)--------varName.remove(특정 값)   

- - -

## 문자열 자료형
<br>

* String concatenate: 0 + '' >> '0'
* 'String' * 2 >> 'StringString'
* indexing, slicing 가능, but Immutable

- - -

## 튜플 자료형
<br>

* () 이용
* list에 비해 공간효율성 좋음(기능이 제한적이기에)
* 변경 불가능 객체(Hashing의 키값으로 사용)
* 서로 다른 성질 데이터 묶어 관리할 때 사용



