## 자료구조

- CPU : 영구 저장소
- RAM : 임시 저장소

자료구조는 RAM을 사용한다.  
CPU에서 가져오는 것보다 월등히 빠르기 때문  
결국 Data처리를 **어떻게 효율적으로** 할까! 가 목적

<br>

---

[python 기본](#python-기본)  
[배열](#배열)  
[Queue](#Queue)  
[Stack](#Stack)  
[Linked List](#Linked-List)  
[Hash table](#Hash-table)  
[Tree](#Tree)  
[Heap](#Heap)

---

<br>

## python 기본

- int
  `python 3 / 3 # 1.0 type(3 // 3) # int `

  - 유리수 연산이 필요하다면 tuple로 분자 분모를 따로 처리하자
    <br>

- string

  - immutable

    - list로 변환하여 사용할 것

  - +, \* 연산 조심!

    > join() method를 활용하자(속도가 빠름)

  - slicing을 사용할 때는 새 객체를 생성하게되므로 효율적으로 사용할 것

  - chr(), ord() 활용
    `python chr(65) ord('A') `
    <br>

- boolean

  - if ~ and ~ or
    <br>

- List

  - list comprehension 활용하기, append보다 속도가 빠르기도 함, set등의 자료에도 적용 가능한 방법

    ```python
    list_arr = [i for i in range(100) if i%2 == 0]
    ```

  - sort, sorted
    : sort는 원본을 훼손
    : sorted는 정렬된 복사본을 리턴

  - len, sum, max, min 활용

  - slicing, [-1]음수인덱스 활용

  - reduce, filter 활용
    <br>

- Tuple

  - 초기 상태 표현시 코드가 길어지는 것 방지

    ```python
    a, b, c = 1, 2, 3
    ```

    <br>

  - Map과 함께 사용하여 입력 받기

    ```python
    a, b = map(int, input().split())
    ```

    <br>

  - 돈시에 변해야 하는 객체에 효율적 표현 가능
    `python a, b = b, a (swap) `
    <br>

- Dictionary

  - key, value 활용
    <br>

- Set

  - 중복 체크(set(list)) 활용

    ```python
    def isChk(lst):
      return len(lst) == len(set(lst))
    ```

  - 집합류의 연산에 활용 가능하나, 시간복잡도가 크다
    <br>

---

<br>

## 배열

자료들이 메모리 주소에 순서대로 정렬되어 저장되어있음  
iterate 해야하는 경우 최적!

- push, pop 'O(1)'  
  배열 끝 요소를 처리하기만 하면 됨
- shift, splice 'O(n)'  
  배열 맨 앞 요소를 처리함에 나머지 요소의 인덱스 **재할당**

### **정리**

검색이 빠름,<br>
전체 자료를 검색하지 않는 선에서 처리가 빠름(like push,...)<br>
그러나 수정이 일어나는 부분에서 느려질 수 있음(배열을 순회하는 경우)<br>
JS는 동적인 배열, Java는 정적인 배열

<br>

---

<br>

## Queue

FIFO(First In First Out), LILO(Last ~), 먼저 넣은 데이터를 가장 먼저 꺼낼 수 있는 구조

- Enqueue: 큐에 데이터 넣는 기능
- Dequeue: 큐에서 데이터 꺼내는 기능
- python에서 queue lib을 제공한다

  - Queue(), LifoQueue(), PriorityQueue() 외에도 여러 정책 적용된 큐들이 있씀
    <br>

  - 간단한 사용 예를 봅시다

  ```python
  import queue
  data_queue = queue.Queue()
  data_queue.put('one')
  data_queue.put(2)
  data_queue.size()   # 2
  data_queue.get()    # 'one'
  data_queue.size()   # 1
  ```

  - LifoQueue(), PriorityQueue()

  ```python
  import queue
  data_queue = queue.LifoQueue()
  data_queue.put('one')
  data_queue.put(2)
  data_queue.get()    # 2

  data_queue_Pri = queue.PriorityQueue()
  data_queue_Pri.put((1, 'one'))  # 튜플로 입력해! 우선순위, 자료 순으로
  data_queue_Pri.put((5, 2))
  data_queue_Pri.put((10, 3))
  data_queue_Pri.get()  # (1, 'one')
  ```

  <br>

- _큐는 어디에 많이 사용될까?_  
  멀티 태스킹을 위한 프로세스 스케줄링 방식을 구현하기 위해 많이 사용됨(OS)
  <br>

- list로 구현해보기

```python
queue_list = list()
def enqueue(data)
  queue_list.append(data)
def dequeue()
  data = queue_list[0]
  del queue_list[0]
  return data

for idx in range(10):
  enqueue(idx)
len(queue_list)   # 10
dequeue()         # 1
dequeue()         # 2
```

<br>

---

<br>

## Stack

데이터를 제한적으로 접근할 수 있는 구조  
한쪽 끝에서만 자료를 넣거나 빼는 구조  
LIFO or FILO

- 쓰임  
  컴퓨터 내부 프로세스 구조의 함수 동작 방식

  ```python
  def recursive(data):
    if data < 0:
      print('ended')
    else:
      print(data)
      recursive(data - 1)
      print('returned', data)

  recursive(2)
  # 2
  # 1
  # 0
  # ended
  # returned 0
  # returned 1
  # returned 2
  ```

- 주요 기능

  - push(): 데이터를 스택에 넣기
  - pop(): 데이터를 스택에서 빼기

- 장점

  - 구조 단순, 구현이 쉬움
  - 데이터 저장/읽기 속도가 빠름

- 단점

  - 데이터 최대 갯수를 미리 정해야 한다  
    (파이썬 재귀는 1000번까지 호출이 가능)
  - 저장 공간의 낭비가 심할 수 있음

- list로 구현해보기

```python
data_stack = list()
data_stack.append(1)
data_stack.append(2)
data_stack.pop()
```

<br>

---

<br>

## Linked List

떨어진 곳에 존재하는 데이터를 화살표로 연결해서 관리하는 데이터 구조, 배열의 개선

- 용어

  - Node: 데이터 저장 단위 (데이터값, 포인터)
  - Pointer: 각 노드 안에서 다음이나 이전의 노드와의 연결 정보를 가지고 있는 공간

- 구현

```python
class Node:
  def __init__(self, data, next=None):
    self.data = data
    self.next = next

def add(data):
  node = head
  while node.next:
    node = node.next
  node.next = Node(data)

node1 = Node(1)
node2 = Node(2)
node1.next = node2
head = node1
for idx in range(1, 10):
  add(idx)
```

<br>

- 장점

  - 미리 데이터 공간을 할당하지 않아도 됨

- 단점

  - 연결을 위한 별도의 데이터 공간이 필요, 저장공간 효율 이 높지 않음
  - 연결 정보를 찾는 시간이 필요, 접근이 느림
  - 중간 데이터 삭제시 연결을 재구성해야 함
    <br>

- 노드의 추가

```python
node3 = Node(1.5)

node = head
search = True
while search:
  if node.data == 1:
    search = False
  else:
    node = node.next

node_next = node.next
node.next = node3
node3.next = node_next
```

<br>

- 객체지향적으로 linked list 구현하기

```python
class Node:
  def __init__(self, data, next=None):
    self.data = data
    self.next = next

class NodeMgmt:
  def __init__(self, data):
    self.head = Node(data)

  def add(self, data):
    if self.head == '':
      self.head = Node(data)
    else:
      node = self.head
      while node.next:
        node = node.next
      node.next = Node(data)

  def desc(self):
    node = self.head
    while node:
      print(node.data)
      node = node.next
```

- 노드의 삭제

```python
def delete(self, data):
  if self.head == '':
    print('해당 값을 가진 노드가 없어')
    return
  if self.head.data == data:
    temp = self.head
    self.head = self.head.next
    del temp
  else:
    node = self.head
    while node.next:
      if node.next.data:
        temp = node.next
        node.next = node.next.next
        del temp
        return
      else:
        node = node.next
```

<br>

- 다양한 linked list의 구조

  - Double Linked List: 항상 앞에서의 접근인 단점을 개선

  ```python
  class Node:
    def __init__(self, data, prev=None, next=None):
      self.prev = prev
      self.data = data
      self.next = next

  class NodeMgmt:
    def __init__(self, data):
      self.head = Node(data)
      self.tail = self.head

    def insert(self, data):
      if self.head == None:
        self.head = Node(data)
        self.tail = self.head
      else:
        node = self.head
        while node.next:
          node = node.next
        new = Node(data)
        node.next = new
        new.prev = node
        self.tail = new

    def desc(self):
      node = self.head
      while node:
        print(node.data)
        node = node.next

    def search_from_head(self, data):
      if self.head == None:
        return False

      node = self.head
      while node:
        if node.data == data:
          return node
        else:
          node = node.next
      return False

    def search_from_tail(self, data):
      if self.head == None:
        return False

      node = self.tail
      while node:
        if node.data == data:
          return node
        else:
          node = node.prev
      return False

    # 기존 노드 앞에 추가하는
    def insert_before(self, data, before_data):
      if self.head == None:
        self.head = Node(data)
        return True
      else:
        node = self.tail
        while node.data != before_data:
          node = node.prev
          if node == None:
            return False
        new = Node(data)
        before_new = node.prev
        before_new.next = new
        new.prev = before_new
        new.next = node
        node.prev = new
        return True
  ```

  <br>

---

<br>

## Hash table

Key, Value 쌍으로 데이터가 저장됨<br>
키는 유니크, 키하나에 밸류하나 매핑<br>
검색, 삽입, 삭제, 조회 모두 빠름<br>
근데 주소 할당이 다소 무작위적임<br>
python => dictionary!
<br>

- 용어

  - Hash: 임의 값을 고정 길이로 변환하는 것
  - Hashing Function: Key에 대해 산술연산을 이용해 데이터 위치를 찾을 수 있는 함수
  - Hash Value | Hash Address: Key를 해싱함수로 연산해서 해시 값을 알아내고 이를 기반으로 해시 테이블에서 해당 Key에 대한 데이터 위치를 일관성 있게 찾을 수 있음
  - Slot: 한 개의 데이터를 저장할 수 있는 공간
  - 저장할 데이터에 대해 Key를 추출할 수 있는 별도 함수도 존재할 수 있음

- 간단 예

  - Hash table
    ```python
    hash_table = list([i for i in range(10)]) # list comprehension
    hash_table
    ```
  - Hash function(Division법 사용)
    ```python
    def hash_func(key):
      return key % 5
    ```
  - Hash table로 저장 \* 데이터에 따라 필요시 key 생성 방법 정의가 필요함

    ````python
    data1 = 'A'
    print(ord(data1[0])) # ord(): 문자의 ASCII

        def storage_data(data, value):
          key = ord(data[0])
          hash_address = hash_func(key)
          hash_table[hash_address] = value
        ```
        * data를 저장하고 불러보자
        ```python
        storage_data('A', '991199')

        def get_data(data):
          key = ord(data[0])
          hash_address = hash_func(key)
          return hash_table[hash_address]

        get_data('A')   # '991199'
        ```

    <br>
    ````

- 장점

  - 데이터 저장/읽기 속도가 빠름
  - 키에 대한 데이터가 있는지 중복 확인이 쉽다

- 단점

  - 저장공간을 좀 더 필요로 한다
  - 해시충돌을 해결하기 위한 추가적 자료구조 필요

- 주요 사용

  - 검색이 많이 필요한 경우
  - 저장, 삭제, 읽기가 빈번한 경우
  - 캐시 구현시(중복 확인이 쉬움!)

- list 변수를 활용한 hash table

```python
hash_table = list([0 for i in range(8)])

def get_key(data):
  return hash(data)   # hash()란 내장함수를 이용

def hash_function(key):
  return key % 8

def save_data(data, value):
  hash_address = hash_function(get_key(data))
  hash_table[hash_address] = value

def read_data(data):
  hash_address = hash_function(get_key(data))
  return hash_table[hash_address]
```

<br>

- 해시 충돌  
  서로 다른 키가 같은 해시를 가지면 발생
  완벽한 조건을 만족시켜주는 해시함수를 구현하기 어렵(거의 불가능),  
  기본적으로 키 사이즈에 비해 hash map의 사이즈가 작아서 충돌이 날 수 밖에없다
  <br>

- Collision(충돌) 해결 알고리즘(좋은 해시 함수 사용하기)

  - Chaining(개발해싱 | Open Hashing 기법중 하나): linked List 사용

    ```python
    def get_key(data):
      return hash(data)

    def hash_function(key):
      return key % 8

    def save_data(data, value):
      index_key = get_key(data)
      hash_address = hash_function(index_key)
      if hash_table[hash_address] != 0:
        for index in range(len(hash_table[hash_address])):
          if hash_table[hash_address][index][0] == index_key:
            hash_table[hash_address][index][1] = value
            return
        hash_table[hash_address].append([index_key.value])
      else:
        hash_table[hash_address] = [[index_key.value]]

    def read_data(data):
      idx_key = get_key(data)
      hash_address = hash_function(idx_key)
      if hash_table[hash_address] != 0:
        for idx in range(len(hash_table[hash_address])):
          if hash_table[hash_address][idx][0] == idx_key:
            return hash_table[hash_address][idx][1]
        return None
      else:
        return None
    ```

  - Linear Probing(폐쇄 해싱 | Close Hashing 기법중 하나): 저장공간 활용

    ```python
    def get_key(data):
      return hash(data)

    def hash_function(key):
      return key % 8

    def save_data(data, value):
      index_key = get_key(data)
      hash_address = hash_function(index_key)
      if hash_table[hash_address] != 0:
        for index in range(hash_address, len(hash_table)):
          if hash_table[index] == 0:
            hash_table[index] = [index_key, value]
            return
          elif hash_table[index][0] = index_key:
            hash_table[index][1] = value
            return
      else:
        hash_table[hash_address] = [index_key, value]

    def read_data(data):
      idx_key = get_key(data)
      hash_address = hash_function(idx_key)
      if hash_table[hash_address] != 0:
        for idx in range(hash_address, len(hash_table)):
          if hash_table[idx] == 0:
            return None
          elif hash_table[idx][0] == idx_key:
            return hash_table[idx][1]
      else:
        return None
    ```

  - 빈번한 충돌을 개선하는 기법(함수재정의 or 해시테이블 저장공간 확대)
    ```python
    # 데이터 수에 비례하게 늘리는 것
    hash_table = list([None for i in range(16)])
    def hash_function(key):
      return key % 16
    ```

- 해시 함수와 키 생성 함수(참고)

  - SHA(Secure Hash Algorithm)

    - SHA-1
      ```python
      import hashlib
      data = 'test'.encode()
      hash_object = hashlib.sha1()
      hash_object.update(b'test')    # 바이트로 변환
      hex_dig = hash_object.hexdigest() # 보통 16진수로 많이 추출
      print(hex_dig)  # 16진수 결과 도출
      ```
    - SHA-256
      - 다 같은데 hashlib.sha256()

- 시간 복잡도 일반적으로 O(1)을 기대, 그러나 충돌이 있으면 좀 늘어날 수 있음(모두 충돌인 경우) O(n)
  <br>

---

<br>

## Tree

Node 와 Branch 를 이용한 사이클을 이루지 않도록 구성한 데이터 구조  
이진트리(Binary)가 많이 사용되며, 탐색에서 많이 사용 됨

- 용어

  - Node: 트리에서 데이터를 저장하는 기본 요소(Branch 정보 포함)
  - Root Node: 최상위 노드
  - Level: 최상위를 0으로, 하위로의 깊이
  - Parent Node, Child Node
  - Leaf Node(Terminal Node): Child Node 가 하나도 없는 노드
  - Sibling(Brother Node): 동일한 Parent Node를 가진 노드
  - Depth: 트리에서 Node가 가질 수 있는 최대 Level

- Binary Tree | Binary Search Tree (BST)

  - 노드의 최대 Branch가 2인 트리
  - BST: 왼쪽 노드는 해당 노드보다 작은, 오른쪽은 큰 값을 가진 트리

- 자료 구조 이진 탐색 트리의 장점과 주요 용도

  - 장점: 탐색 속도 개선 가능(검색에 주로 쓰임)

- Linked list 를 통한 구현

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

  - 데이터 입력

    ```python
      head = Node(1)
      BST = NodeMgmt(head)
      BST.insert(2)
    ```

  - 이진 탐색 트리 탐색

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

  - 이진 탐색 트리 삭제(복잡할 수도 있으니까 다음처럼 나눠 생각해보자)

    - Leaf Node 삭제
    - Child Node 가 하나인 Node 삭제
    - Child Node 가 두개인 Node 삭제

  - 이진 탐색 트리 삭제 코드 구현과 분석

    ```python
    def delete(self, value):
      searched = False
      self.current_node = self.head
      self.parent = self.head
      while self.current_node:
        if self.current_node.value == value:
          searched = True
          break
        elif value < self.current_node.value:
          self.parent = self.current_node
          self.current_node = self.current_node.left
        else:
          self.parent = self.current_node
          self.current_node = self.current_node.right

      if searched == False:
        return False

    ## 이후부터 Case에 맞는 코드 작성
    ```

    <br>

    - case 1. 삭제할 Node가 leaf Node

      > self.current_node가 삭제할 Node, self.parent는 삭제할 Node의 Parent Node인 상태

      ```python
      if self.current_node.left == None and self.current_node.right == None:
        if value < self.parent.value:
          self.parent.left = None
        else:
          self.parent.right = None
        del self.current_node
      ```

    - case 2. 삭제할 Node가 Child Node를 가지고 있는 경우

      ```python
      if self.current_node.left != None and self.current_node.right == None:
        if value < self.parent.value:
          self.parent.left = self.current_node.left
        else:
          self.parent.right = self.current_node.left
      elif self.current_node.left == None and self.current_node.right != None:
        if value < self.parent.value:
          self.parent.left = self.current_node.right
        else:
          self.parent.right = self.current_node.right
      ```

    - case 3. 삭제할 Node가 Child Node를 두 개 가지고 있는 경우

      > 삭제할 Node가 Parent Node의 왼쪽에 있을 때

      ```python
      if self.current_node.left != None and self.current_node.right != None:  #case3
        if value < self.parent.value:   #3-1
          self.change_node = self.current_node.right
          self.change_node_parent = self.current_node.right
          while self.change_node.left != None:
            self.change_node_parent = self.change_node
            self.change_node = self.change_node.left
          if self.change_node.right != None:
            self.change_node_parent.left = self.change_node.right
          else:
            self.change_node_parent.left = None
          self.parent.left = self.change_node
          self.change_node.right = self.current_node.right
          self.change_node.left = self.current_node.left
      ```

      > 삭제할 Node가 Parent Node의 오른쪽에 있을 때

      ```python
      else:   #3-2
        self.change_node = self.current_node.right
        self.change_node_parent = self.current_node.right
        while self.change_node.left != None:
          self.change_node_parent = self.change_node
          self.change_node = self.change_node.left
        if self.change_node.right != None:
          self.change_node_parent.left = self.change_node.right
        else:
          self.change_node_parent.left = None
        self.parent.right = self.change_node
        self.change_node.left = self.current_node.left
        self.change_node.right = self.current_node.right
      ```

- random lib를 활용한 test code  
  0~999 중 임의 100개 추출, 이진탐색트리에 입력, 검색, 삭제

  ```python
  import random
  bst_nums = set()
  while len(bst_nums) != 100:
    bst_nums.add(random.randint(0, 999))

  # 선택 된 100개의 숫자를 이진 탐색 트리에 입력, 임의로 루트노드 500
  head = Node(500)
  binary_tree = NodeMgmt(head)
  for num in bst_nums:
    binary_tree.insert(num)

  # 입력한 100개의 숫자 검색 (검색 기능 확인)
  for num in bst_nums:
    if binary_tree.search(num) == False:
      print('search failed', num)

  # 입력한 100개의 숫자 중 10개의 숫자 랜덤 선택
  delete_nums = set()
  bst_nums = list(bst_nums)
  while len(delete_nums) != 10:
    delete_nums.add(bst_nums[random.randint(0, 99)])

  # 선택된 10개 삭제 (삭제 기능 확인)
  for del_num in delete_nums:
    if binary_tree.delete(del_num) == False:
      print('delete failed', del_num)
  ```

  <br>

- 시간 복잡도와 단점

  - n개의 노드를 가진다면 O(logn)

    > 한 번 실행시 50%의 실행시간을 단축한다는 의미

  - 트리 구조가 depth = node인 경우 배열과 다를 것이 없다
    <br>

---

<br>

## Heap

데이터에서 최대값과 최소값을 빠르게 찾기 위해 고안된 완전 이진 트리(Complete Binary Tree)

> 배열의 최대최소는 O(n), 힙은 O(logn)
> <br>

- Max Heap

  - 각 노드의 값은 해당 노드의 자식 노드가 가진 값보다 크거나 같음

- Min Heap

  - 최대힙의 걍 반대

- 이진 트리와의 차이

  - Heap은 각 노드의 값이 자식 노드보다 크거나 같음(Max Heap의 경우)

  - 이진 탐색 트리는 왼쪽 자식 노드의 값이 가장 작고, 그 다음 부모 노드, 그 다음 오른쪽 자식 노드 값이 가장 큼

  - 이진 탐색 트리는 탐색을 위한, 힙은 최대/최소 검색을 위한 구조라고 생각하면 된다.

- Heap 구현

  - 보통 배열로 많이 표현함(root노드를 1부터 지정하면 편하다)

  ```python
  5 // 2  # 2로 나눈 몫이 부모의 인덱스
  2 * 2 # 2로 곱한 값이 왼쪽 자식 인덱스
  2 * 2 + 1 # 오른쪽 자식 인덱스
  # 완전 이진 트리 이기에 가능한 방법!
  ```

  <br>

  - 데이터 삽입

    ```python
    class Heap:
      def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)

      def move_up(self, inserted_idx):
        if inserted_idx <= 1:
          return False

        parent_idx = inserted_idx // 2
        if self.heap_array[inserted_idx] > self.heap_array[parent_idx]:
          return True
        else:
          return False

      def insert(self, data):
        if len(self.heap_array) == 0:
          self.heap_array.append(None)
          self.heap_array.append(data)
          return True

        self.heap_array.append(data)

        inserted_idx = len(self.heap_array) - 1

        while self.move_up(inserted_idx):
          parent_idx = inserted_idx // 2
          self.heap_array[inserted_idx], self.heap_array[parent_idx] = self.heap_array[parent_idx], self.heap_array[inserted_idx]
          inserted_idx = parent_idx

        return True
    ```

    <br>

  - test

    ```python
    heap = Heap(15)
    heap.insert(10)
    heap.insert(8)
    heap.insert(5)
    heap.insert(4)
    heap.insert(20)
    print(heap.heap_array)
    ```

    <br>

  - 데이터 삭제 (Max Heap)

    **보통 삭제는 최상단 노드(root)를 삭제하는 것이 일반적**  
    힙의 용도는 최대나 최소값을 root노드에 놓아, 바로 꺼내 쓸 수 있도록 하는 것

    - delete1

    ```python
    class Heap:
      def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data):

      def move_down(self, popped_idx):
        left_child_popped_idx = popped_idx * 2
        right_child_popped_idx = popped_idx * 2 + 1

        # case1 왼쪽 자식 노드도 없을 때
        if left_chile_popped_idx >= len(self.heap_array):
          return False
        # case2 오른쪽 자식 노드만 없을 때
        elif right_child_popped_idx >= len(self.heap_array):
          if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
            return True
          else:
            return False
        # case3 좌, 우 자식 노드 모두 있을 때
        else:
          if self.heap_array[left_child_popped_idx] > self.heap_array[right_child_popped_idx]:
            if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
              return True
            else:
              return False
          else:
            if self.heap_array[popped_idx] < self.heap_array[right_child_popped_idx]:
              return True
            else:
              return False

      def pop(self):
        if len(self.heap_array) <= 1:
          return None

        returned_data = self.heap_array[1]
        self.heap_array[1] = self.heap_array[-1]
        del self.heap_array[-1]
        popped_idx = 1

        while self.move_down(popped_idx):
          left_child_popped_idx = popped_idx * 2
          right_child_popped_idx = popped_idx * 2 + 1

          # case2 오른쪽 자식 노드만 없을 때
          if right_child_popped_idx >= len(self.heap_array):
            if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
              self.heap_array[popped_idx], self.heap_array[left_child_popped_idx] = self.heap_array[left_child_popped_idx], self.heap_array[popped_idx]
              popped_idx = left_child_popped_idx

          # case3 좌, 우 자식 노드 모두 있을 때
          else:
            if self.heap_array[left_child_popped_idx] > self.heap_array[right_child_popped_idx]:
              if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                self.heap_array[popped_idx], self.heap_array[left_child_popped_idx] = self.heap_array[left_child_popped_idx], self.heap_array[popped_idx]
                popped_idx = left_child_popped_idx
            else:
              if self.heap_array[popped_idx] < self.heap_array[right_child_popped_idx]:
                self.heap_array[popped_idx], self.heap_array[right_child_popped_idx] = self.heap_array[right_child_popped_idx], self.heap_array[popped_idx]
                popped_idx = right_child_popped_idx

        return returned_data
    ```

    - _heap 전체에 대한 테스트 코드_

      ```python
      heap = Heap(15)
      heap.insert(10)
      heap.insert(8)
      heap.insert(5)
      heap.insert(4)
      heap.insert(20)
      heap.heap_array

      heap.pop()

      heap.heap_array
      ```

      <br>

- Heap 시간 복잡도

  - 트리의 높이를 h라 표기

  - n개의 노드를 가지는 heap에 데이터 삽입, 삭제시 최악의 경우 root노드에서 leaf노드까지 비교해야 한다.  
    h = log2n 에 가까우므로 시간 복잡도는 `O(logn)`

    _(빅오 표기법서 log의 밑은 2이다)_

## <br><br><br><br><br>
