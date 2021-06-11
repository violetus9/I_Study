## 알고리즘 정리

<br>

[Sort](#Sort)   

- - -

<br>

## Sort

* Bubble sort : 이어진 두 값을 비교 후 참일 때 자리 변경

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

* Selection sort : 선택 후 순회하여 보다 작은 최소값을 선택 후 자리 변경

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

* Insertion sort : 앞으로 가면서 대상과 비교 후 대소를 비교하여 사이로 삽입(1번 인덱스부터 순회한다는 것)

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


<br>

- - -

<br>





<br>

- - -

<br>
