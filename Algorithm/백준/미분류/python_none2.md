## 미분류 문제들

> 너무 많아져서 분리 20210808

<br>

[(2751) 수 정렬하기 2](#수-정렬하기-2)  
[(11004)K번째 수](#K번째-수)  
[(1543) 문서 검색](#문서-검색)  
[(1568) 새](#새)  
[(1302) 베스트셀러](#베스트셀러)  
[(1668) 트로피 진열](#트로피-진열)  
[(1236) 성 지키기](#성-지키기)  
[(2110) 공유기 설치](#공유기-설치)  
[(1939) 중량제한](#중량제한)  
[(1991) 트리 순회](#트리-순회)  
[(2250) 트리의 높이와 너비](#트리의-높이와-너비)  
[(1927) 최소 힙](#최소-힙)  
[(1715) 카드 정렬하기](#카드-정렬하기)  
[(1766) 문제집](#문제집)  
[(1904) 01타일](#01타일)  
[(12865)평범한 배낭](#평범한-배낭)  
[(11053)가장 긴 증가하는 부분 수열](#가장-긴-증가하는-부분-수열)  
[(9251) LCS](#LCS)  
[(1495) 기타리스트](#기타리스트)  
[(2655) 가장높은탑쌓기](#가장높은탑쌓기)  
[(1260) DFS와 BFS](#DFS와-BFS)  
[(1697) 숨바꼭질](#숨바꼭질)  
[(2606) 바이러스](#바이러스)  
[(1012) 유기농 배추](#유기농-배추)  
[(1325) 효율적인 해킹](#효율적인-해킹)  
[(2012) 등수 매기기](#등수-매기기)  
[(1092) 배](#배)  
[(10282)해킹](#해킹)  
[(2212) 센서](#센서)  
[(1461) 도서관](#도서관)  
[(1781) 컵라면](#컵라면)

<br>

---

<br>

## 수 정렬하기 2

> 2751

```python
# merge sort
def mergeS(arr):
  if len(arr) <= 1:
    return arr
  mid = len(arr) // 2
  left = mergeS(arr[:mid])
  right = mergeS(arr[mid:])
  i, j, k = 0, 0, 0

  while i < len(left) and j < len(right):
    if left[i] < right[j]:
      arr[k] = left[i]
      i += 1
    else:
      arr[k] = right[j]
      j += 1
    k += 1

  if i == len(left):
    while j < len(right):
      arr[k] = right[j]
      j += 1
      k += 1
  elif j == len(right):
    while i < len(left):
      arr[k] = left[i]
      i += 1
      k += 1

  return arr

N = int(input())
arr = []
for _ in range(N):
  arr.append(int(input()))
arr = mergeS(arr)
for d in arr:
  print(d)

# use lib
n = int(input())
arr = []

for _ in range(n):
  arr.append(int(input()))
arr = sorted(arr)
for d in arr:
  print(d)
```

<br>

---

<br>

## K번째 수

> 11004

```python
N, K = map(int, input().split())
arr = list(map(int, input().split()))
arr = sorted(arr)

print(arr[K - 1])
```

<br>

---

<br>

## 문서 검색

> 1543

```python
S = str(input())
string = str(input())
print(len(S.split(string)) - 1)

# 다른 풀이
doc = input()
word = input()
idx = 0
res = 0
while len(doc) - idx >= len(word):
  if doc[idx:idx + len(word)] == word:
    res += 1
    idx += len(word)
  else:
    idx += 1
print(res)
```

<br>

---

<br>

## 새

> 1568

```python
N = int(input())
res = 0
K = 1
while N != 0:
  if K > N:
    K = 1
  N -= K
  K += 1
  res += 1
print(res)
```

<br>

---

<br>

## 베스트셀러

> 1302

```python
N = int(input())
books = {}

for _ in range(N):
  book = input()
  if book not in books:
    books[book] = 1
  else:
    books[book] += 1

target = max(books.values())
arr = []

for book, number in books.items():
  if number == target:
    arr.append(book)

print(sorted(arr)[0])
```

<br>

---

<br>

## 트로피 진열

> 1668

```python
def checker(li):
  now = li[0]
  res = 1
  for i in range(1, len(li)):
    if now < li[i]:
      res += 1
      now = li[i]
  return res

N = int(input())
li = []

for _ in range(N):
  li.append(int(input()))

print(checker(li))
li.reverse()
print(checker(li))
```

<br>

---

<br>

## 성 지키기

> 1236

```python
N, M = map(int, input().split())
li = []
for _ in range(N):
  li.append(input())

row = [0] * N
col = [0] * M

for i in range(N):
  for j in range(M):
    if li[i][j] == 'X':
      row[i] = 1
      col[j] = 1

row_cnt = 0
for i in range(N):
  if row[i] == 0:
    row_cnt += 1
col_cnt = 0
for i in range(M):
  if col[i] == 0:
    col_cnt += 1

print(max(row_cnt, col_cnt))
```

<br>

---

<br>

## 공유기 설치

> 2110

```python
N, C = list(map(int, input().split()))
li = []

for _ in range(N):
  li.append(int(input()))
li = sorted(li)

start = 1
end = li[-1] - li[0]
res = 0

while(start <= end):
  mid = (start + end) // 2
  value = li[0]
  cnt = 1
  for i in range(1, len(li)):
    if li[i] >= value + mid:
      value = li[i]
      cnt += 1
  if cnt >= C:
    start = mid + 1
    res = mid
  else:
    end = mid - 1

print(res)
```

<br>

---

<br>

## 중량제한

> 1939

```python
from collections import deque

N, M = map(int, input().split())
adj = [[] for _ in range(N + 1)]

def bfs(c):
  queue = deque([start_node])
  visited = [False] * (N + 1)
  visited[start_node] = True
  while queue:
    x = queue.popleft()
    for y, weight in adj[x]:
      if not visited[y] and weight >= c:
        visited[y] = True
        queue.append(y)
  return visited[end_node]

start = 1000000000
end = 1

for _ in range(M):
  x, y, weight = map(int, input().split())
  adj[x].append((y, weight))
  adj[y].append((x, weight))
  start = min(start, weight)
  end = max(end, weight)

start_node, end_node = map(int, input().split())
res = start

while(start <= end):
  mid = (start + end) // 2
  if bfs(mid):
    res = mid
    start = mid + 1
  else:
    end = mid - 1

print(res)
```

<br>

---

<br>

## 트리 순회

> 1991

```python
class Node:
  def __init__(self, data, left_node, right_node):
    self.data = data
    self.left_node = left_node
    self.right_node = right_node

def pre_order(node):
  print(node.data, end='')
  if node.left_node != '.':
    pre_order(tree[node.left_node])
  if node.right_node != '.':
    pre_order(tree[node.right_node])

def in_order(node):
  if node.left_node != '.':
    in_order(tree[node.left_node])
  print(node.data, end='')
  if node.right_node != '.':
    in_order(tree[node.right_node])

def post_order(node):
  if node.left_node != '.':
    post_order(tree[node.left_node])
  if node.right_node != '.':
    post_order(tree[node.right_node])
  print(node.data, end='')

N = int(input())
tree = {}
for i in range(N):
  data, left_node, right_node = input().split()
  tree[data] = Node(data, left_node, right_node)

pre_order(tree['A'])
print()
in_order(tree['A'])
print()
post_order(tree['A'])
```

<br>

---

<br>

## 트리의 높이와 너비

> 2250

```python
class Node:
  def __init__(self, number, left_node, right_node):
    self.parent = -1
    self.number = number
    self.left_node = left_node
    self.right_node = right_node

def in_order(node, lev):
  global lev_depth, x
  lev_depth = max(lev_depth, lev)
  if node.left_node != -1:
    in_order(tree[node.left_node], lev + 1)
  lev_min[lev] = min(lev_min[lev], x)
  lev_max[lev] = max(lev_max[lev], x)
  x += 1
  if node.right_node != -1:
    in_order(tree[node.right_node], lev + 1)

n = int(input())
tree = {}
lev_min = [n]
lev_max = [0]
root = -1
x = 1
lev_depth = 1

for i in range(1, n + 1):
  tree[i] = Node(i, -1, -1)
  lev_min.append(n)
  lev_max.append(0)

for _ in range(n):
  number, left_node, right_node = map(int, input().split())
  tree[number].left_node = left_node
  tree[number].right_node = right_node
  if left_node != -1:
    tree[left_node].parent = number
  if right_node != -1:
    tree[right_node].parent = number

for i in range(1, n + 1):
  if tree[i].parent == -1:
    root = i

in_order(tree[root], 1)
res_lev = 1
res_width = lev_max[1] - lev_min[1] + 1

for i in range(2, lev_depth + 1):
  width = lev_max[i] - lev_min[i] + 1
  if res_width < width:
    res_lev = i
    res_width = width

print(res_lev, res_width)
```

<br>

---

<br>

## 최소 힙

> 1927

```python
import heapq

n = int(input())
heap = []
res = []

for _ in range(n):
  data = int(input())
  if data == 0:
    if heap:
      res.append(heapq.heappop(heap))
    else:
      res.append(0)
  else:
    heapq.heappush(heap, data)

for data in res:
  print(data)
```

<br>

---

<br>

## 카드 정렬하기

> 1715

```python
import heapq
n = int(input())
heap = []

for i in range(n):
  data = int(input())
  heapq.heappush(heap, data)

res = 0

while len(heap) != 1:
  one = heapq.heappop(heap)
  two = heapq.heappop(heap)
  sum_value = one + two
  res += sum_value
  heapq.heappush(heap, sum_value)

print(res)
```

<br>

---

<br>

## 문제집

> 1766

```python
import heapq
n, m = map(int, input().split())
li = [[] for i in range(n + 1)]
deg = [0] * (n + 1)
heap = []
res = []

for _ in range(m):
  x, y = map(int, input().split())
  li[x].append(y)
  deg[y] += 1

for i in range(1, n + 1):
  if deg[i] == 0:
    heapq.heappush(heap, i)

res = []

while heap:
  data = heapq.heappop(heap)
  res.append(data)
  for y in li[data]:
    deg[y] -= 1
    if deg[y] == 0:
      heapq.heappush(heap, y)

for i in res:
  print(i, end=' ')
```

<br>

---

<br>

## 01타일

> 1904

```python
N = int(input())

dp = [0] * 1000001
dp[1] = 1
dp[2] = 2

for i in range(3, N + 1):
  dp[i] = (dp[i - 2] + dp[i - 1]) % 15746

print(dp[N])
```

<br>

---

<br>

## 평범한 배낭

> 12865

```python
n, k = map(int, input().split())
dp = [[0] * (k + 1) for _ in range(n + 1)]

for i in range(1, n + 1):
  w, v = map(int, input().split())
  for j in range(1, k + 1):
    if j < w:
      dp[i][j] = dp[i - 1][j]
    else:
      dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - w] + v)

print(dp[n][k])
```

<br>

---

<br>

## 가장 긴 증가하는 부분 수열

> 11053

```python
n = int(input())
li = list(map(int, input().split()))
dp = [1] * n

for i in range(1, n):
  for j in range(i):
    if li[j] < li[i]:
      dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))
```

<br>

---

<br>

## LCS

> 9251

```python
# LCS(Longest Common Subsequence) : 최장 공통 부분 수열
s1 = input()
s2 = input()
dp = [[0] * (len(s1) + 1) for _ in range(len(s2) + 1)]

for i in range(1, len(s2) + 1):
  for j in range(1, len(s1) + 1):
    if s2[i - 1] == s1[j - 1]:
      dp[i][j] = dp[i - 1][j - 1] + 1
    else:
      dp[i][j] = max(dp[i][j - 1], dp[i - 1][j])

print(dp[len(s2)][len(s1)])
```

<br>

---

<br>

## 기타리스트

> 1495

```python
n, s, m = map(int, input().split())
li = list(map(int, input().split()))
dp = [[0] * (m + 1) for _ in range(n + 1)]
dp[0][s] = 1

for i in range(1, n + 1):
  for j in range(m + 1):
    if dp[i - 1][j] == 0:
      continue
    if j - li[i - 1] >= 0:
      dp[i][j - li[i - 1]] = 1
    if j + li[i - 1] <= m:
      dp[i][j + li[i - 1]] = 1

res = -1
for i in range(m, -1, -1):
  if dp[n][i] == 1:
    res = i
    break

print(res)
```

<br>

---

<br>

## 가장높은탑쌓기

> 2655

```python
n = int(input())
li = []
li.append((0, 0, 0, 0))
for i in range(1, n + 1):
  a, h, w = map(int, input().split())
  li.append((i, a, h, w))

li.sort(key=lambda data: data[3])

dp = [0] * (n + 1)
for i in range(1, n + 1):
  for j in range(i):
    if li[i][1] > li[j][1]:
      dp[i] = max(dp[i], dp[j] + li[i][2])

max_value = max(dp)
idx = n
res = []

while idx != 0:
  if max_value == dp[idx]:
    res.append(li[idx][0])
    max_value -= li[idx][2]
  idx -= 1

res.reverse()
print(len(res))
[print(i) for i in res]
```

<br>

---

<br>

## DFS와 BFS

> 1260

```python
from collections import deque

def dfs(v):
  print(v, end=' ')
  visited[v] = True
  for e in adj[v]:
    if not(visited[e]):
      dfs(e)

def bfs(v):
  q = deque([v])
  while q:
    v = q.popleft()
    if not(visited[v]):
      visited[v] = True
      print(v, end=' ')
      for e in adj[v]:
        if not visited[e]:
          q.append(e)

n, m, v = map(int, input().split())
adj = [[] for _ in range(n + 1)]

for _ in range(m):
  x, y = map(int, input().split())
  adj[x].append(y)
  adj[y].append(x)

for e in adj:
  e.sort()

visited = [False] * (n + 1)
dfs(v)
print()
visited = [False] * (n + 1)
bfs(v)
```

<br>

---

<br>

## 숨바꼭질

> 1697

```python
from collections import deque

MAX = 100001
n, k = map(int, input().split())
li = [0] * MAX

def bfs():
  q = deque([n])
  while q:
    posit = q.popleft()
    if posit == k:
      return li[posit]
    for next_posit in (posit - 1, posit + 1, posit * 2):
      if 0 <= next_posit < MAX and not li[next_posit]:
        li[next_posit] = li[posit] + 1
        q.append(next_posit)

print(bfs())
```

<br>

---

<br>

## 바이러스

> 2606

```python
n = int(input())
m = int(input())
adj = [[] for _ in range(n + 1)]
visited = [False] * (n + 1)
cnt = 0

for _ in range(m):
  x, y = map(int, input().split())
  adj[x].append(y)
  adj[y].append(x)

def dfs(now_pos):
  global cnt
  cnt += 1
  visited[now_pos] = True
  for next_pos in adj[now_pos]:
    if not visited[next_pos]:
      dfs(next_pos)

dfs(1)
print(cnt - 1)
```

<br>

---

<br>

## 유기농 배추

> 1012

```python
import sys
sys.setrecursionlimit(100000)

def dfs(x, y):
  visited[x][y] = True
  directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
  for dx, dy in directions:
    nx, ny = x + dx, y + dy
    if nx < 0 or nx >= n or ny < 0 or ny >= m:
      continue
    if li[nx][ny] and not visited[nx][ny]:
      dfs(nx, ny)

for _ in range(int(input())):
  m, n, k = map(int, input().split())
  li = [[0] * m for _ in range(n)]
  visited = [[False] * m for _ in range(n)]
  for _ in range(k):
    y, x = map(int, input().split())
    li[x][y] = 1
  res = 0
  for i in range(n):
    for j in range(m):
      if li[i][j] and not visited[i][j]:
        dfs(i, j)
        res += 1

  print(res)
```

<br>

---

<br>

## 효율적인 해킹

> 1325

```python
from collections import deque

n, m = map(int, input().split())
gph = [[] for _ in range(n + 1)]

for _ in range(m):
  x, y = map(int, input().split())
  gph[y].append(x)

def bfs(v):
  q = deque([v])
  visited = [False] * (n + 1)
  visited[v] = True
  cnt = 1
  while q:
    v = q.popleft()
    for e in gph[v]:
      if not visited[e]:
        q.append(e)
        visited[e] = True
        cnt += 1
  return cnt

res = []
max_v = -1

for i in range(1, n + 1):
  c = bfs(i)
  if c > max_v:
    res = [i]
    max_v = c
  elif c == max_v:
    res.append(i)
    max_v = c

for e in res:
  print(e, end=' ')
```

<br>

---

<br>

## 등수 매기기

> 2012

```python
n = int(input())
li = []

for _ in range(n):
  li.append(int(input()))

li.sort()

res = 0
for i in range(1, len(li) + 1):
  res += abs(i - li[i - 1])

print(res)
```

<br>

---

<br>

## 배

> 1092

```python
import sys

n = int(input())
c = list(map(int, input().split()))

m = int(input())
b = list(map(int, input().split()))

if max(c) < max(b):
  print(-1)
  sys.exit()

posit = [0] * n
chk = [False] * m
c.sort(reverse=True)
b.sort(reverse=True)

res = 0
cnt = 0

while True:
  if cnt == len(b):
    break
  for i in range(n):
    while posit[i] < len(b):
      if not chk[posit[i]] and c[i] >= b[posit[i]]:
        chk[posit[i]] = True
        posit[i] += 1
        cnt += 1
        break
      posit[i] += 1
  res += 1

print(res)
```

<br>

---

<br>

## 해킹

> 10282

```python
import heapq
import sys
input = sys.stdin.readline

def dijkstra(start):
  heap_data = []
  heapq.heappush(heap_data, (0, start))
  distance[start] = 0
  while heap_data:
    dist, now = heapq.heappop(heap_data)
    if distance[now] < dist:
      continue
    for i in adj[now]:
      cost = dist + i[1]
      if distance[i[0]] > cost:
        distance[i[0]] = cost
        heapq.heappush(heap_data, (cost, i[0]))

for _ in range(int(input())):
  n, m, start = map(int, input().split())
  adj = [[] for i in range(n + 1)]
  distance = [1e9] * (n + 1)
  for _ in range(m):
    x, y, cost = map(int, input().split())
    adj[y].append((x, cost))
  dijkstra(start)
  cnt = 0
  max_dist = 0
  for i in distance:
    if i != 1e9:
      cnt += 1
      if i > max_dist:
        max_dist = i
  print(cnt, max_dist)
```

<br>

---

<br>

## 센서

> 2212

```python
import sys

n = int(input())
k = int(input())

if k >= n:
  print(0)
  sys.exit()

li = list(map(int, input().split()))
li.sort()

dist = []
for i in range(1, n):
  dist.append(li[i] - li[i - 1])
dist.sort(reverse=True)

for i in range(k - 1):
  dist[i] = 0

print(sum(dist))
```

<br>

---

<br>

## 도서관

> 1461

```python
import heapq

n, m = map(int, input().split())
li = list(map(int, input().split()))
pos = []
neg = []
max_dist = max(max(li), -min(li))

for i in li:
  if i > 0:
    heapq.heappush(pos, -i)
  else:
    heapq.heappush(neg, i)

res = 0
while pos:
  res += heapq.heappop(pos)
  for _ in range(m - 1):
    if pos:
      heapq.heappop(pos)

while neg:
  res += heapq.heappop(neg)
  for _ in range(m - 1):
    if neg:
      heapq.heappop(neg)

print(-res * 2 - max_dist)
```

_참고로 말하자면 힙큐는 우선순위 순으로 pop된다_

<br>

---

<br>

## 컵라면

> 1781

```python
import heapq

n = int(input())
li = []
q = []

for i in range(n):
  a, b = map(int, input().split())
  li.append((a, b))
li.sort()

for i in li:
  a = i[0]
  heapq.heappush(q, i[1])
  if a < len(q):
    heapq.heappop(q)

print(sum(q))
```

<br>

---

<br>
