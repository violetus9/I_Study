## 문법s

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

* **split(',')** : String객체 > A로 나눈 배열
  ```javaScript
  const str = 'a b c d,e'
  str.split(' ');   // ['a', 'b', 'c', 'd,e']
  ```


  