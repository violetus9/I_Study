## 자료구조
* CPU : 영구 저장소
* RAM : 임시 저장소   

자료구조는 RAM을 사용한다.   
CPU에서 가져오는 것보다 월등히 빠르기 때문   
결국 Data처리를 **어떻게 효율적으로** 할까! 가 목적

<br>

- - -

[배열](#배열)   
[Queue](#Queue)   
[Stack](#Stack)   
[Hash table](#해시-테이블)   
[Linked List](#Linked-List)   

----------------
<br>

## 배열
자료들이 메모리 주소에 순서대로 정렬되어 저장되어있음   
iterate 해야하는 경우 최적!

* push, pop 'O(1)'   
배열 끝 요소를 처리하기만 하면 됨
* shift, splice 'O(n)'   
배열 맨 앞 요소를 처리함에 나머지 요소의 인덱스 **재할당**

### **정리**
검색이 빠름,<br>
전체 자료를 검색하지 않는 선에서 처리가 빠름(like push,...)<br>
그러나 수정이 일어나는 부분에서 느려질 수 있음(배열을 순회하는 경우)<br>
JS는 동적인 배열, Java는 정적인 배열

<br>

--------------
<br>

## Queue
FIFO(First In First Out), LILO(Last ~), 먼저 넣은 데이터를 가장 먼저 꺼낼 수 있는 구조

* Enqueue: 큐에 데이터 넣는 기능
* Dequeue: 큐에서 데이터 꺼내는 기능
* python에서 queue lib을 제공한다
  * Queue(), LifoQueue(), PriorityQueue() 외에도 여러 정책 적용된 큐들이 있씀
<br>

  * 간단한 사용 예를 봅시다
  ```python
  import queue
  data_queue = queue.Queue()
  data_queue.put('one')
  data_queue.put(2)
  data_queue.size()   # 2
  data_queue.get()    # 'one'
  data_queue.size()   # 1
  ```

  * LifoQueue(), PriorityQueue()
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

* *큐는 어디에 많이 사용될까?*   
멀티 태스킹을 위한 프로세스 스케줄링 방식을 구현하기 위해 많이 사용됨(OS)
<br>

* list로 구현해보기
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

--------------
<br>

## Stack
데이터를 제한적으로 접근할 수 있는 구조   
한쪽 끝에서만 자료를 넣거나 빼는 구조   
LIFO or FILO

* 쓰임   
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

* 주요 기능

  * push(): 데이터를 스택에 넣기
  * pop(): 데이터를 스택에서 빼기

* 장점

  * 구조 단순, 구현이 쉬움
  * 데이터 저장/읽기 속도가 빠름

* 단점

  * 데이터 최대 갯수를 미리 정해야 한다   
    (파이썬 재귀는 1000번까지 호출이 가능)
  * 저장 공간의 낭비가 심할 수 있음   

* list로 구현해보기
```python
data_stack = list()
data_stack.append(1)
data_stack.append(2)
data_stack.pop()
```
<br>

--------------
<br>

## Linked List

떨어진 곳에 존재하는 데이터를 화살표로 연결해서 관리하는 데이터 구조, 배열의 개선

* 용어

  * Node: 데이터 저장 단위 (데이터값, 포인터)
  * Pointer: 각 노드 안에서 다음이나 이전의 노드와의 연결 정보를 가지고 있는 공간

* 구현
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

* 장점

  * 미리 데이터 공간을 할당하지 않아도 됨

* 단점

  * 연결을 위한 별도의 데이터 공간이 필요, 저장공간 효율 이 높지 않음   
  * 연결 정보를 찾는 시간이 필요, 접근이 느림
  * 중간 데이터 삭제시 연결을 재구성해야 함
<br>

* 노드의 추가

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

* 객체지향적으로 linked list 구현하기

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

* 노드의 삭제

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

* 다양한 linked list의 구조

  * Double Linked List: 항상 앞에서의 접근인 단점을 개선
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

--------------
<br>

## 해시 테이블
Key, Value 쌍으로 데이터가 저장됨   
키는 유니크, 키하나에 밸류하나 매핑   


* 해시 충돌   
서로 다른 키가 같은 해시를 가지면 발생
완벽한 조건을 만족시켜주는 해시함수를 구현하기 어렵(거의 불가능)당   
기본적으로 키 사이즈에 비해 hash map의 사이즈가 작아서 충돌이 날 수 밖에없다   

* 해결 방법
  * Separate chaning   
  : Linked list로 연결연결...
  * Open addressing   
  : 비어있는 공간 활용

### **정리**
검색, 삽입, 삭제, 조회 모두 빠름<br>
근데 주소 할당이 다소 무작위적임

<br>

----------------


<br><br><br><br><br>
-----------
