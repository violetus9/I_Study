## python 알고리즘 정리

> 구멍나면 하나하나 추가하는 곳
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


