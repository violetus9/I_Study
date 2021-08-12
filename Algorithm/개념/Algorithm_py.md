## 알고리즘 정리

<br>

[Sort](#Sort)  
[Recursive call](#Recursive-call)  
[DP,DC](#동적-계획법,-분할-정복)  
[Search](#Search)  
[Graph](#Graph)  
[Greedy](#Greedy)  
[그래프 고급](#그래프-고급)

---

## Some Tips

<br>

[BFS와 DFS](#BFS와-DFS)  
[수학 알고리즘](#수학-알고리즘)

---

<br>

## Sort

- **Bubble sort** : 이어진 두 값을 비교 후 참일 때 자리 변경

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

- **Selection sort** : 선택 후 순회하여 보다 작은 최소값을 선택 후 자리 변경

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

- **Insertion sort** : 앞으로 가면서 대상과 비교 후 대소를 비교하여 사이로 삽입(1번 인덱스부터 순회한다는 것)

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

- **Quick sort**: 기준점(pivot)을 정해 보다 작은 데이터는 왼쪽, 큰 데이터는 오른쪽으로 모으는 함수를 작성, 재귀를 이용, 함수의 리턴은 left + pivot + right

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

- use list comprehension

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

- 병합정렬과 유사, 시간 복잡도는 O(n log n)

  > 극단적인 경우 O(n^2)
  > <br>

- **Merge sort**: 재귀를 활용, 리스트를 반으로 size=1까지 자름, 정렬 불능까지 재귀, 이후 각 부분에 대한 병합 시행

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

---

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

_이 경우 시간복잡도, 공간복잡도 둘 모두 O(n)_
<br>

- 재귀는 스택의 한 예로 볼 수 있다.

- 재귀의 몇가지 패턴을 봅시다

  - 곱연산
    ```python
    def multiple(num):
      if num <= 1:
        return num
      return num * multiple(num - 1)
    ```
  - 리스트합
    ```python
    def sum_list(data):
      if len(data) <= 1:
        return data[0]
      return data[0] + sum_list(data[1:])
    ```
  - 회문(palindrome)
    ```python
    def palindrome(string):
      if len(string) <= 1:
        return True
      if string[0] == string[-1]:
        return palindrome(string[1:-1])
      else:
        return False
    ```
  - **정수 n를 1, 2, 3의 조합으로 나타내는 방법**

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
    ````

---

<br>

## 동적 계획법, 분할 정복

- Dynamic Programming

  - 상향식 접근법
  - 입력 크기가 작은 부분 문제를 해결 후 이 해를 활용한 큰 문제의 해결
  - Memorization 기법 활용
    - Memorization: 이전 계산 값을 저장, 다시 계산하지 않도록 하는 기술로 전체 실행 속도를 빠르게 한다

- Divide and Conquer

  - 하향식 접근법
  - 문제를 나눌 수 없을 때까지 나누어 각각을 풀며 다시 합병하며 해를 구함

    - 재귀로 구현

- 차이점

  - DP: 부분 문제는 중복, 상위 문제 접근시 재활용, Memorization O
  - DC: 부분 문제는 중복되지 않음, Memorization X

- DP 예

  - 피보나치 수열

    ````python # 재귀를 활용
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
    ````

---

<br>

## Search

- Sequential search

  - 앞에서부터 하나씩~

```python
def sequencial(data_list, search_data):
  for idx in range(len(data_list)):
    if data_list[idx] == search_data:
      return idx
  return -1
```

<br>

- Binary search

  - 데이터가 정렬되어 있다는 가정 하에 순차탐색보다 월등히 빠름

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

  - O(logn)
    > 순차탐색의 경우 O(n)
    > <br>

---

<br>

## Graph

- Node: 위치, 정점(Vertex)

- Edge: 위치간의 관계를 표시한 선(link, branch)

- 처음과 끝이 중복된다면? > '단순 경로'

- 방향에 대한 제시는 <> 로 한다.
  방향 존재: <A, B>, 방향 무: (A, B)

> 그래프의 종류는 매우 많다. 하지만 그 용어는 일일히 다 외우지말자, 사견이긴 하지만 파생되는 용어가 많다는건 그만큼 원리가 중요하다는 것!

- 그래프와 앞서 배운 트리의 차이를 생각 해보자!

  - graph 표현

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

- BFS, DFS

  - BFS(Breadth First Search)
    너비 우선 탐색: 정점들과 같은 레벨에 있는 노드들(형제 노드)을 먼저 탐색하는 방식

    - visited queue, need_visited queue 로 나누어 생각한다.

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

  - DFS(Depth First Search)
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

- 노드와 간선을 V, E 라 본다면 두 알고리즘 모두 O(V + E)의 시간 복잡도를 가진다.
  <br>

---

<br>

## Greedy

- 매 순간의 최적해를 찾는 방식으로 진행

  > 하지만 모든 경우에 최적인 알고리즘은 아니다(반례가 더러 있기에)

- 대표적 예

  - 동전 문제: 지불해야 하는 값이 4720일 때, 1, 50, 100, 500 동전으로 동전 수가 가장 적게 지불하시오

    ````python
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

    ````

  - 부분 베낭 문제: 무게 제한이 있는 베낭이 최대 가치를 가지도록 물건을 넣는 문제

    ```python # 무게w와 가치v로 표현 가능
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
    ````

---

<br>

## 그래프 고급

- 최단 경로 알고리즘: 두 노드를 잇는 가장 짧은 경로를 찾는 문제

- 종류

  - 전체 쌍 최단 경로: 모든 노드 쌍에 대한 최단 경로를 찾는 문제

  - 단일 출발: 그래프 내 특정 노드와 타 모든 노드 각각의 가장 짧은 경로를 찾는 문제

    - 다익스트라 알고리즘(BFS와 유사, 우선순위 큐 활용할 것임)
      - 첫 정점을 기준으로 연결 된 정점들 추가하며 최단 거리 갱신하는 기법
      1. 초기화
         첫 정점 기준 배열 선언, 각 정점까지 거리를 저장, 우선순위 큐에 첫 정점, 거리0 넣는다
      2. 우선순위 큐에서 추출한 값 기반, 인접 노드 거리 계산, 업데이트(반복)

  - 다익스트라

    - heapq이용(우선순위 큐): 데이터가 리스트 형태인 경우, 0번 인덱스를 우선순위로 인지하여 우선순위가 낮은 순으로 pop가능

    ```python
    import heapq
    queue = []
    heapq.heappush(queue, [2, 'A'])
    heapq.heappush(queue, [5, 'B'])
    heapq.heappush(queue, [1, 'C'])
    heapq.heappush(queue, [7, 'D'])

    # 트리구조이기에 완전 정렬처럼 보이진 않는다
    print(queue)

    # 뽑아내면 우선순위에 맞게 나온다
    for idx in range(len(queue)):
      print(heapq.heappop(queue))
    ```

    - 예제가 될 그래프

      ```python
      mygraph = {
        'A':{'B':8,'C':1,'D':2},
        'B':{},
        'C':{'B':5,'D':2},
        'D':{'E':3,'F':5},
        'E':{'F':1},
        'F':{'A':5}
      }
      ```

    - 다익스트라 구현을 해보쟈

      ```python
      import heapq

      def dijkstra(graph, start):
        distances = {node: float('inf') for node in graph}
        distances[start] = 0
        queue = []
        heapq.heappush(queue, [distances[start], start])

        while queue:
          current_dist.current_node = heapq.heappop(queue)

          if distances[currnet_node] < current_dist:
            continue

          for adjacent, weight in graph[current_node].items():
            distance = current_dist + weight

            if distance < distances[adjacent]:
              distances[adjacent] = distance
              heapq.heappush(queue, [distance, adjacent])

        return distances

      # 시연
      dijkstra(mygraph, 'A')
      ```

      <br>

    - 시간 복잡도

      크게 두가지 과정을 거침

      1. 각 노드마다 인접한 간선들을 모두 검사하는 과정  
         각 노드를 최대 한 번씩 방문하므로(노드간 경로가 존재하는 경우만), 그래프의 모든 간선은 최대 한 번씩 검사

      2. 우선순위 큐에 노드/거리 정보를 넣고 삭제(pop)하는 과정  
         우선순위 큐에 가장 많은 노드, 거리 정보가 있는 경우 정보를 넣고 삭제하는 과정이 최악의 시간소요

      **결국** : O(E) + O(ElogE) = O(E + ElogE) = O(ElogE)

<br>

---

<br>

---

## 알고리즘 푸는 몇가지 팁들

> 기본 개념은 숙지하고 봐야 이해하기 쉬울거에요

<br>

---

<br>

## BFS와 DFS

- **BFS** : 너비 우선 탐색  
  Queue

- **DFS** : 깊이 우선 탐색  
   Recursion or Stack

- 탐색은 다음의 능력을 판별하기 위한 용도로 쓰임

  1. 구현  
     BFS/DFS, 백트래킹에 수많은 조건

  - 부분 상태 탐색(위치 이동, 수)

    > 상태에 대한 체크를 할 수 있는 함수가 필요

  - 전체 상태 탐색(전체 map)

    > N차원 배열을 조정하는 방법(주로 2차원이지만)

  - 그 외로는..

    1. Flood Fill

    > 어느 특정 그룹을 같은 색으로 칠하는 알고리즘!

    2. 트리 순회

    > 트리에 대한 추상적인 사고가 잡혀있는지 알기위함.. 대체로 쉬운편~

  2. 알고리즘 지식
     알고리즘을 아니모르니~

     1. 위상 정렬(Topological Sort)
     2. 최소 신장 트리(MST)
     3. 최단 거리

_거창한 것들이 있어도 결국 핵심은 구현이다_

<br>

**구현?**

> 어떤 내용을 구체적인 사실로 나타나게 하는 것!

<br>

---

<br>

## 수학 알고리즘

코테에서 다루는 수학은 정수론, 기하가 대표적

- **정수론**

  - **GCD/LCM**  
    최대공약수, 최소공배수? >> 유클리드 호제법

    - GCD

      ```python
      # 방법 1: 단순 반복
      def gcd_native(a, b):
        for i in range(min(a, b), 0, -1):
          if a%i==0 and b%i==0: return i

      # 방법 2: 유클리드 호제법
      def gcd(a, b):
        if a%b==0: return b
        return gcd(b, a%b)

      # 방법 2-2: 반복으로 변경
      def gcd2(a, b):
        while a%b != 0 : a, b = b, a%b
        return b

      # 방법 3: math의 gcd이용
      import math
      math.gcd(1, 2)

      print(gcd(10, 24))
      print(gcd2(10, 24))
      print(gcd_native(10, 24))
      print(math.gcd(10, 24))
      # 모두 2 출력, 아래로 갈수록 속도가 빠름
      ```

    - LCM  
      LCM은 GCD를 이용해 구한다  
      python이 아닌 경우 int overflow발생 가능하기에 a/gcd(a,b)\*b 순으로 이용하는 것을 추천

    ```python
    def lcm(a, b):
      return a*b/gcd(a,b)
    ```

  <br>

  - 소수 체크 & 소인수 분해

    ```python
    # 관용적으로 isPrime 이란 함수명을 사용 여기선 그냥 prime_ck
    def prime_ck(N):
      for i in range(2, N):
        if N%i==0: return False
        if i*i > N break
      return True

    # 소인수분해 기본
    def prime_factorization(N):
      P, fac = 2, []
      while p**2 <= N:
        if N%p==0:
          N //= p
          fac.append(p)
        else:
          p += 1
      if N > 1: fac.append(N)
      return fac
    ```

  이런 알고리즘이 단 한번 사용되거나 빠르게 체크를 원할 때는 좋다만 여러 쿼리를 묻는 경우 시간복잡도가 꽤 크다.  
   이런 경우 소수 리스트를 미리 만드는 방법이 있는데 이것이 에라토스테네스의 체

  <br>

  - **에라토스테네스의 체**

    ```python
    # 체를 활용한 소수 리스트 구하기
    def era_prime(N):
      A, p = [0 for _ in range(N+1)], []
      for i in range(2, N):
        if A[i] == 0: p.append(i)
        else: continue
        for j in range(i**2, N, i):
          A[j] = 1
      return p

    # 소수 리스트 있는 경우 소인수분해
    # 소수 리스트 크기는 sqrt(N)보다 커야함
    def prime_factorization_2(N, p):
      fac = []
      for i in p:
        if N==1 or N>i*i: break
        while N%i == 0:
          fac.append(i)
          N //= 0
      return fac
    ```

    - 위를 활용하면 다음과 같은 문제를 풀 수 있다

      ```python
      # 활용 1: 소인수의 개수
      def era_factor_count(N):
        A = [0 for _ in range(N+1)]
        for i in range(2, N):
          for j in range(i, N, i):
            A[j] += 1
        return A

      # 활용 2: 소인수의 합
      def era_factor_sum(N):
        A = [0 for _ in range(N+1)]
        for i in range(2, N):
          for j in range(i, N, i):
            A[j] += i
        return A

      # 활용 3: 소인수분해
      def era_factorization(N):
        A = [0 for _ in range(N+1)]
        for i in range(2, N):
          if A[i] == 1: continue
          for j in range(i, N, i):
            A[j] = i
        return A
      ```

  <br>

  - 거듭제곱 연산  
    거듭제곱을 단순반복이 아닌 효율적으로 하는 방법을 알아보자

    ```python
    # C/C++ style (or Java)
    def pow_advanced(a, b, mod):
      ret = 1
      while b > 0:
        if b%2: ret = ret * a % mod
        a, b = a * a % mod, b//2
      return ret
    ```

    _파이썬은 그냥 pow써_

<br>

---

<br>
