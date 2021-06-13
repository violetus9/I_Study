## 알고리즘 정리

<br>

[Sort](#Sort)   
[Recursive call](#Recursive-call)   


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





<br>

- - -

<br>







