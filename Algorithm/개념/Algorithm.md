## 알고리즘 정리

<br>

[Sort](#Sort)   
[Recursive call](#Recursive-call)   
[DP, DC](#동적-계획법,-분할-정복)   


- - -

<br>

## Sort

* **Bubble sort** : 이어진 두 값을 비교 후 참일 때 자리 변경

```python
def bubblesort(data):
  for i in range(len(data) - 1):
    swap = False
    for i2 in range(len(data) - i - 1):
      if data[i2] > data[i2 + 1]:
        data[i2], data[i2 + 1] = data[i2 + 1], data[i2]
        swap = True

    if swap == False:
      break
  return data

import random
print(bubble.sort(random.sample(range(100), 10)))
```
<br>

* **Selection sort** : 선택 후 순회하여 보다 작은 최소값을 선택 후 자리 변경

```python
def selection_sort(data):
  for stand in range(len(data) - 1):
    lowest = stand
    for idx in range(stand + 1, len(data)):
      if data[lowest] > data[idx]:
        lowest = idx
    data[lowest], data[stand] = data[stand], data[lowest]
  return data
```
<br>

* **Insertion sort** : 앞으로 가면서 대상과 비교 후 대소를 비교하여 사이로 삽입(1번 인덱스부터 순회한다는 것)

```python
def insertion_sort(data):
  for idx in range(len(data) - 1):
    for idx2 in range(idx + 1, 0, -1):
      if data[idx2] < data[idx2 - 1]:
        data[idx2], data[idx2 - 1] = data[idx2 - 1], data[idx2]
      else:
        break
  return data
```
<br>

> 중요!
* **Quick sort**: 기준점(pivot)을 정해 보다 작은 데이터는 왼쪽, 큰 데이터는 오른쪽으로 모으는 함수를 작성, 재귀를 이용, 함수의 리턴은 left + pivot + right

```python
def quick_sort(data):
  if len(data) <= 1:
    return data
   
  left, right = list(), list()
  pivot = data[0] 

  for index in range(1, len(data)):
    if pivot > data[index]:
      left.append(data[index])
    else:
      right.append(data[index])

  return quick_sort(left) + [pivot] + quick_sort(right)
```

  * use list comprehension
    
    ```python
    def qsort(data):
      if len(data) <= 1:
        return data
      
      pivot = data[0]

      left = [item for item in data[1:] if pivot > item]
      right = [item for item in data[1:] if pivot <= item]

      return qsort(left) + [pivot] + qsort(right)
    ```
<br>

* 병합정렬과 유사, 시간 복잡도는 O(n log n)
> 극단적인 경우 O(n^2)
<br>

* **Merge sort**: 재귀를 활용, 리스트를 반으로 size=1까지 자름, 정렬 불능까지 재귀, 이후 각 부분에 대한 병합 시행

```python
def mergesplit(data):
  if len(data) <= 1:
    return data
  medium = int(len(data) / 2)
  left = mergesplit(data[:medium])
  right = mergesplit(data[medium:])
  return merge(left, right)

def merge(left, right):
  merged = list()
  left_point, right_point = 0, 0

  # case1: left/right 아직 남아있다
  while len(left) > left_point and len(right) > right_point:
    if left[left_point] > right[right_point]:
      merged.append(right[right_point])
      right_point += 1
    else:
      merged.append(right[left_point])
      left_point += 1

  # case2: left 남은 경우
  while len(left) > left_point:
    merged.append(right[left_point])
    left_point += 1

  # case3: right 남은 경우
  while len(right) > right_point:
    merged.append(right[right_point])
    right_point += 1

  return merged
```

<br>

- - -

<br>

## Recursive call   

함수 한에서 동일 함수를 호출하는 형태

```python
def factorial(num):
  if num > 1:
    return num * factorial(num - 1)
  else:
    return num
```
*이 경우 시간복잡도, 공간복잡도 둘 모두 O(n)*
<br>

* 재귀는 스택의 한 예로 볼 수 있다.

* 재귀의 몇가지 패턴을 봅시다

  * 곱연산
    ```python
    def multiple(num):
      if num <= 1:
        return num
      return num * multiple(num - 1)
    ```
  * 리스트합
    ```python
    def sum_list(data):
      if len(data) <= 1:
        return data[0]
      return data[0] + sum_list(data[1:])
    ```
  * 회문(palindrome)
    ```python
    def palindrome(string):
      if len(string) <= 1:
        return True
      if string[0] == string[-1]:
        return palindrome(string[1:-1])
      else:
        return False
    ```
  * **정수 n를 1, 2, 3의 조합으로 나타내는 방법**
    ```python
    def func(data):
      if data == 1:
        return 1
      elif data == 2:
        return 2
      elif data == 3:
        return 4

      return func(data - 1) + func(data - 2) + func(data - 3)
    ```
<br>

- - -

<br>

## 동적 계획법, 분할 정복

* Dynamic Programming

  * 상향식 접근법
  * 입력 크기가 작은 부분 문제를 해결 후 이 해를 활용한 큰 문제의 해결
  * Memorization 기법 활용
    * Memorization: 이전 계산 값을 저장, 다시 계산하지 않도록 하는 기술로 전체 실행 속도를 빠르게 한다

* Divide and Conquer

  * 하향식 접근법
  * 문제를 나눌 수 없을 때까지 나누어 각각을 풀며 다시 합병하며 해를 구함
    
    * 재귀로 구현
  
* 차이점

  * DP: 부분 문제는 중복, 상위 문제 접근시 재활용, Memorization O
  * DC: 부분 문제는 중복되지 않음, Memorization X

* DP 예

  * 피보나치 수열
    ```python
    # 재귀를 활용
    def fibo(num):
      if num <= 1:
        return num
      return fibo(num - 1) + fibo(num - 2)

    # DP 활용
    def fibo_dp(num):
      cache = [0 for index in range(num + 1)]
      cache[0] = 0
      cache[1] = 1

      for index in range(2, num + 1):
        cache[index] = cache[index - 1] + cache[index - 2]
      return cache[num]
    ```



<br>

- - -

<br>







