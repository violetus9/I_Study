## 자료구조 정답률 50% 이상

<br>

[(2164) 카드2](#카드2)  
[(10773)제로](#제로)  
[(10866)덱](#덱)

<br>

---

<br>

## 카드2

> 2164

```python
from collections import deque
n = int(input())
q = deque()
for i in range(1, n + 1):
  q.append(i)

while len(q) != 1:
  q.popleft()
  q.append(q.popleft())
print(*q)
```

<br>

---

<br>

## 제로

> 10773

```python
k = int(input())
li = []

for _ in range(k):
    tmp = int(input())
    if tmp != 0:
        li.append(tmp)
    else:
        li.pop()

print(sum(li))
```

<br>

---

<br>

## 덱

> 10866

```python
from collections import deque
import sys
input = sys.stdin.readline

q = deque()
m = int(input())

for i in range(m):
    li = list(input().split())
    if len(li) == 2:
        if li[0] == 'push_back':
            q.append(int(li[1]))
        elif li[0] == 'push_front':
            q.appendleft(int(li[1]))
    else:
        if li[0] == 'front':
            if len(q) == 0:
                print(-1)
            else:
                print(q[0])
        elif li[0] == 'back':
            if len(q) == 0:
                print(-1)
            else:
                print(q[-1])
        elif li[0] == 'size':
            print(len(q))
        elif li[0] == 'empty':
            if len(q) == 0:
                print(1)
            else:
                print(0)
        elif li[0] == 'pop_back':
            if len(q) == 0:
                print(-1)
            else:
                res = q.pop()
                print(res)
        elif li[0] == 'pop_front':
            if len(q) == 0:
                print(-1)
            else:
                res = q.popleft()
                print(res)
```

<br>

---

<br>

<br>

---

<br>
