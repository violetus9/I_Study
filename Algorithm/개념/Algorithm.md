## 알고리즘 정리

<br>

[Sort](#Sort)    
[Recursive call](#Recursive-call)    
[DP,DC](#동적-계획법,-분할-정복)    
[Search](#Search)    
[Graph](#Graph)    
[Greedy](#Greedy)    
[그래프 고급](#그래프-고급)    


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

## Search

* Sequential search

  * 앞에서부터 하나씩~

```python
def sequencial(data_list, search_data):
  for idx in range(len(data_list)):
    if data_list[idx] == search_data:
      return idx
  return -1
```
<br>

* Binary search

  * 데이터가 정렬되어 있다는 가정 하에 순차탐색보다 월등히 빠름

  ```python
  def binary_search(data, search):
    if len(data) == 1 and search == data[0]:
      return True
    if len(data) == and search != data[0]:
      return False
    if len(data) == 0
      return False

    medium = len(data) // 2
    if search == data[mediun]:
      return True
    else:
      if search > data[medium]:
        return binary_search(data[medium:], search)
      else:
        return binary_search(data[:medium], search)
  ```

  * O(logn)
  > 순차탐색의 경우 O(n)
<br>

- - -

<br>

## Graph

* Node: 위치, 정점(Vertex)

* Edge: 위치간의 관계를 표시한 선(link, branch)

* 처음과 끝이 중복된다면? > '단순 경로'

* 방향에 대한 제시는 <> 로 한다.
    방향 존재: <A, B>, 방향 무: (A, B)

> 그래프의 종류는 매우 많다. 하지만 그 용어는 일일히 다 외우지말자, 사견이긴 하지만 파생되는 용어가 많다는건 그만큼 원리가 중요하다는 것!
    
* 그래프와 앞서 배운 트리의 차이를 생각 해보자!

  * graph 표현
    ```python
    graph = dict()

    graph['A'] = ['B', 'C']
    graph['B'] = ['A', 'D']
    graph['C'] = ['A', 'G', 'H', 'I']
    graph['D'] = ['B', 'E', 'F']
    graph['E'] = ['D']
    graph['F'] = ['D']
    graph['G'] = ['C']
    graph['H'] = ['C']
    graph['I'] = ['C', 'J']
    graph['J'] = ['I']
    ```
    <br>

* BFS, DFS

  * BFS(Breadth First Search)
    너비 우선 탐색: 정점들과 같은 레벨에 있는 노드들(형제 노드)을 먼저 탐색하는 방식

    * visited queue, need_visited queue 로 나누어 생각한다.
    > 방문했는지, 방문했는게 다른 무언가의 방문이 필요한지

    ```python
    def bfs(graph, start_node):
      visited = list()
      need_visit = list()

      need_visit.append(start_node)

      while need_visit:
        node = need_visit.pop(0)
        if node not in visited:
          visited.append(node)
          need_visit.extend() # extend: 데이터를 붙이는 개념(in js: concat?)

      return visited
    ```
    <br>

  * DFS(Depth First Search)
    정점의 자식들을 먼저 탐색하는 방식(형제의 자식을 타며 순회)

    ```python
    def dfs(graph, start_node):
      visited, need_visit = list(), list()
      need_visit.append(start_node)

      while need_visit
      node = need_visit.pop()
      if node not in visited:
        visited.append(node)
        need_visited.extend(graph[node])

      return visited
    ```
<br>

* 노드와 간선을 V, E 라 본다면 두 알고리즘 모두 O(V + E)의 시간 복잡도를 가진다.
<br>

- - -

<br>

## Greedy

* 매 순간의 최적해를 찾는 방식으로 진행
> 하지만 모든 경우에 최적인 알고리즘은 아니다(반례가 더러 있기에)

* 대표적 예

  * 동전 문제: 지불해야 하는 값이 4720일 때, 1, 50, 100, 500 동전으로 동전 수가 가장 적게 지불하시오
    ```python
    coin_list = [500, 100, 50, 1]

    def min_coin_count(value, coin_list):
      total_count = 0
      details = list()
      coin_list.sort(reverse=True)
      for coin in coin_list:
        coin_num = value // coin
        total_coin_count += coin_num
        value -= coin_num * coin
        details.append([coin, coin_num])
      return total_coin_count, details
    ```
<br>

  * 부분 베낭 문제: 무게 제한이 있는 베낭이 최대 가치를 가지도록 물건을 넣는 문제
    ```python
    # 무게w와 가치v로 표현 가능
    data_list = [(10, 10), (15, 12), (20, 10), (25, 8), (30, 5)]

    def get_max_value(data_list, capacity):
      data_list = sorted(data_list, key = lambda x: x[1] / x[0], reverse = True)
      total_value = 0
      details = list()

      for data in data_list:
        if capacity - data[0] >= 0:
          capacity -= data[0]
          total_value += data[1]
          details.append([data[0], data[1], 1])
        else:
          fraction = capacity / data[0]
          total_value += data[1] * fraction
          details.append([data[0], data[1], fraction])
          break
      return total_value, details
    ```
<br>

- - -

<br>

## 그래프 고급   

* 최단 경로 알고리즘: 두 노드를 잇는 가장 짧은 경로를 찾는 문제

* 종류

  * 전체 쌍 최단 경로: 모든 노드 쌍에 대한 최단 경로를 찾는 문제

  * 단일 출발: 그래프 내 특정 노드와 타 모든 노드 각각의 가장 짧은 경로를 찾는 문제
    * 다익스트라 알고리즘(BFS와 유사, 우선순위 큐 활용할 것임)   
      * 첫 정점을 기준으로 연결 된 정점들 추가하며 최단 거리 갱신하는 기법
      1. 초기화
        첫 정점 기준 배열 선언, 각 정점까지 거리를 저장, 우선순위 큐에 첫 정점, 거리0 넣는다
      2. 우선순위 큐에서 추출한 값 기반, 인접 노드 거리 계산, 업데이트(반복)


<br>

- - -

<br>







