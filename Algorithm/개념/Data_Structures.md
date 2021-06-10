## 자료구조
* CPU : 영구 저장소
* RAM : 임시 저장소   

자료구조는 RAM을 사용한다.   
CPU에서 가져오는 것보다 월등히 빠르기 때문   
결국 Data처리를 **어떻게 효율적으로** 할까! 가 목적

<br>

- - -

[배열]](#배열)   
[Queue](#Queue)   
[Stack](#Stack)   
[Hash table](#해시-테이블)   

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
