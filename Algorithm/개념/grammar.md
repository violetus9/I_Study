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

* **.split(',')** : String객체 > A로 나눈 배열
  ```javaScript
  const str = 'a b c d,e'
  str.split(' ');   // ['a', 'b', 'c', 'd,e']
  ```

* **.toFixed(num)** : 소숫점(반올림) num자리

* **String.fromCharCode(num)** <반대> **(대상).charCodeAt()**


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





