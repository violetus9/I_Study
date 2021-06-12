## 알고리즘 정리

<br>

[Sort](#Sort)   
[Recursive call](#Recursive-call)   
[Tree](#Tree)   

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

## Tree   

Node 와 Branch 를 이용한 사이클을 이루지 않도록 구성한 데이터 구조   
이진트리(Binary)가 많이 사용되며, 탐색에서 많이 사용 됨

* 용어

  * Node: 트리에서 데이터를 저장하는 기본 요소(Branch 정보 포함)
  * Root Node: 최상위 노드
  * Level: 최상위를 0으로, 하위로의 깊이
  * Parent Node, Child Node
  * Leaf Node(Terminal Node): Child Node 가 하나도 없는 노드
  * Sibling(Brother Node): 동일한 Parent Node를 가진 노드
  * Depth: 트리에서 Node가 가질 수 있는 최대 Level

* Binary Tree | Binary Search Tree (BST)

  * 노드의 최대 Branch가 2인 트리
  * BST: 왼쪽 노드는 해당 노드보다 작은, 오른쪽은 큰 값을 가진 트리

* 자료 구조 이진 탐색 트리의 장점과 주요 용도

  * 장점: 탐색 속도 개선 가능(검색에 주로 쓰임)

* Linked list 를 통한 구현
  ```python
  class Node:
    def __init__(self, value):
      self.value = value
      self.left = None
      self.right = None

  class NodeMgmt:
    def __init__(self, head):
      self.head = head

    def insert(self, value):
      self.current_node = self.head
      while True:
        if value < self.current_node.value:
          if self.current_node.left != None:
            self.current_node = self.current_node.left
          else:
            self.current_node.left = Node(value)
            break
        else:
          if self.current_node.right != None:
            self.current_node = self.current_node.right
          else:
            self.current_node.right = Node(value)
            break
  ```

  * 데이터 입력
    ```python
      head = Node(1)
      BST = NodeMgmt(head)
      BST.insert(2)
    ```

  * 이진 탐색 트리 탐색
    ```python
    def search(self, value):
      self.current_node = self.head
      while self.current_node:
        if self.current_node.value == value:
          return True
        elif value < self.current_node.value:
          self.current_node = self.current_node.left
        else:
          self.current_node = self.current_node.right
      return False
    ```

  * 이진 탐색 트리 삭제(복잡할 수도 있으니까 다음처럼 나눠 생각해보자)

    * Leaf Node 삭제
    * Child Node 가 하나인 Node 삭제
    * Child Node 가 두개인 Node 삭제

  * 이진 탐색 트리 삭제 코드 구현과 분석

  

<br>

- - -

<br>







