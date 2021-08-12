## 그래프 기본 정답률 40% 이상

<br>

[(11724)연결 요소의 개수](#연결-요소의-개수)  
[(11724)연결 요소의 개수](#연결-요소의-개수)  
[(11724)연결 요소의 개수](#연결-요소의-개수)

<br>

---

<br>

## 연결 요소의 개수

> 11724

```python
def dfs(node):
  chk[node] = True
  for next_node in gph[node]:
    if not chk[next_node]:
      dfs(next_node)

n, m = map(int, input().split())
gph = [[] for _ in range(n + 1)]
chk = [False for _ in range(n + 1)]

for _ in range(m):
  h, c = map(int, input().split())
  gph[h].append(c)
  gph[c].append(h)

con = 0
for i in range(1, n + 1):
  if not chk[i]:
    con += 1
    dfs(i)

print(con)
```

_python은 시간초과~ pypy3는 통과~_

<br>

---

<br>
