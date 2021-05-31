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





