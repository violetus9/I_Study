## 미분류 문제들

> 나중에 많아지면 사전순이나 번호순 정렬 만들면 조흘듯

> > 문제를 본 후 뒤로가기를 누르면 다시 목록으로 올라와요

<br>

[(15969)행복](#행복)  
[(10539)수빈이와 수열](#수빈이와-수열)  
[(17269)이름궁합 테스트](#이름궁합-테스트)  
[(17389)보너스 점수](#보너스-점수)  
[(1920) 수 찾기](#수-찾기)  
[(16165)걸그룹 마스터 준석이](#걸그룹-마스터-준석이)  
[(17224)APC는 왜 서브태스크 대회가 되었을까?](#APC는-왜-서브태스크-대회가-되었을까?)  
[(9037) The candy war](#The-candy-war)  
[(16769)Mixing Milk](#Mixing-Milk)  
[(2480) 주사위 세개](#주사위-세개)  
[(2484) 주사위 네개](#주사위-네개)  
[(16675)두 개의 손](#두-개의-손)  
[(17413)단어 뒤집기2](#단어-뒤집기2)  
[(16956)늑대와 양](#늑대와-양)  
[(14620)꽃길](#꽃길)  
[(1012) 유기놈 배추](#유기농-배추)  
[(16768)Mooyo Mooyo](#Mooyo-Mooyo)  
[(12100)2048](#2048)  
[(17406)배열 돌리기](#배열-돌리기)  
[(11055)가장 큰 증가 부분 수열](#가장-큰-증가-부분-수열)  
[(2167) 2차원 배열의 합](#2차원-배열의-합)  
[(2920) 음계](#음계)  
[(2798) 블랙잭](#블랙잭)  
[(1874) 스택 수열](#스택-수열)  
[(1966) 프린터 큐](#프린터-큐)  
[(5397) 키로거](#키로거)  
[(5397) SHA-256](#SHA256)  
[(4195) 친구 네트워크](#친구-네트워크)  
[(1932) 정수 삼각형](#정수-삼각형)  
[(2750) 수 정렬하기](#수-정렬하기)  
[(1427) 소트인사이드](#소트인사이드)  
[(10814)나이순 정렬](#나이순-정렬)  
[(11650)좌표 정렬하기](#좌표-정렬하기)  
[(10989)수 정렬하기3](#수-정렬하기3)  
[(2747) 피보나치 수](#피보나치-수)  
[(1074) Z](#Z)

<br>

---

<br>

## 행복

> 15969

```python
n, score = int(input()), list(map(int, input().split()))
print(max(score) - min(score))
```

<br>

---

<br>

## 수빈이와 수열

> 10539

```python
n, li = int(input()), list(map(int, input().split()))
answer = [li[0]]

for i in range(1, n):
    answer.append(li[i] * (i + 1) - sum(answer))

for i in answer:
    print(i, end=' ')
```

<br>

---

<br>

## 이름궁합 테스트

> 17269

```python
n, m = map(int, input().split())
a, b = input().split()
li = [3, 2, 1, 2, 4, 3, 1, 3, 1, 1, 3, 1, 3,
      2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]

ab = ''
min_nm = min(n, m)

for i in range(min_nm):
    ab += a[i] + b[i]

ab += a[min_nm:] + b[min_nm:]

answer_li = [li[ord(i) - ord('A')] for i in ab]

for i in range(n + m - 2):
    for j in range(n + m - 1 - i):
        answer_li[j] += answer_li[j + 1]

print("{}%".format(answer_li[0] % 10*10 + answer_li[1] % 10))
```

<br>

---

<br>

## 보너스 점수

> 17389

```python
n, s = int(input()), input()

score, bonus = 0, 0

for idx, OX in enumerate(s):
    if OX == 'O':
        score += idx + 1 + bonus
        bonus += 1
    else:
        bonus = 0

print(score)
```

<br>

---

<br>

## 수 찾기

> 1920

```python
n, a = int(input()), {i: 1 for i in map(int, input().split())}
m = input()

for i in list(map(int, input().split())):
    print(a.get(i, 0))
```

<br>

---

<br>

## 걸그룹 마스터 준석이

> 16165

```python
N, M = map(int, input().split())

team_mem, mem_team = {}, {}

for i in range(N):
    team_name, mem_num = input(), int(input())
    team_mem[team_name] = []
    for j in range(mem_num):
        name = input()
        team_mem[team_name].append(name)
        mem_team[name] = team_name

for i in range(M):
    name, q = input(), int(input())
    if q:
        print(mem_team[name])
    else:
        for mem in sorted(team_mem[name]):
            print(mem)
```

<br>

---

<br>

## APC는 왜 서브태스크 대회가 되었을까?

> 17224

```python
N, L, K = map(int, input().split())

easy, hard = 0, 0

for i in range(N):
    sub1, sub2 = map(int, input().split())
    if sub2 <= L:
        hard += 1
    elif sub1 <= L:
        easy += 1

# hard 문제
ans = min(hard, K) * 140

# easy
if hard < K:
    ans += min(K-hard, easy) * 100

print(ans)
```

<br>

---

<br>

## The candy war

> 9037

```python
def check(N, candy):
    for i in range(N):
        if candy[i] % 2 == 1:
            candy[i] += 1
    return len(set(candy)) == 1


def teacher(N, candy):
    tmp_list = [0 for i in range(N)]
    for idx in range(N):
        if candy[idx] % 2:
            candy[idx] += 1
        candy[idx] //= 2
        tmp_list[(idx+1) % N] = candy[idx]

    for idx in range(N):
        candy[idx] += tmp_list[idx]
    return candy


def process():
    N, candy = int(input()), list(map(int, input().split()))
    cnt = 0
    while not check(N, candy):
        cnt += 1
        candy = teacher(N, candy)
    print(cnt)


for i in range(int(input())):
    process()
```

_N이 별로 크지 않다? >> 단순 구현일 가능성이 크다_
<br>

---

<br>

## Mixing Milk

> 16769

```python
C, M = list(), list()

for i in range(3):
    a, b = map(int, input().split())
    C.append(a)
    M.append(b)

for i in range(100):
    idx = i % 3
    nxt = (idx+1) % 3
    M[idx], M[nxt] = max(M[idx] - (C[nxt] - M[nxt]), 0), min(C[nxt], M[nxt] + M[idx])

for i in M:
    print(i)
```

<br>

---

<br>

## 주사위 세개

> 2480

```python
li = sorted(list(map(int, input().split())))

if len(set(li)) == 1:
    print(10000 + li[0] * 1000)
elif len(set(li)) == 2:
    print(1000 + 100 * li[1])
else:
    print(li[2] * 100)
```

<br>

---

<br>

## 주사위 네개

> 2484

```python
def money():
    li = sorted(list(map(int, input().split())))
    if len(set(li)) == 1:
        return li[0] * 5000 + 50000
    if len(set(li)) == 2:
        if li[1] == li[2]:
            return 10000 + li[1] * 1000
        else:
            return 2000 + (li[1] + li[2]) * 500
    for i in range(3):
        if li[i] == li[i+1]:
            return 1000 + li[i] * 100
    return li[-1] * 100


N = int(input())
print(max(money() for i in range(N)))
```

<br>

---

<br>

## 두 개의 손

> 16675

```python
ML, MR, TL, TR = ('SPR'.index(i) for i in input().split())

if ML == MR and (ML+2)%3 in [TL, TR]:
    print('TK')
elif TL == TR and (TL+2)%3 in [ML, MR]:
    print('MS')
else:
    print('?')
```

_문자를 숫자로 매핑해서쓰는 방법_
<br>

---

<br>

## 단어 뒤집기2

> 17413

```python
S, tmp = input(), ''
flag = False

for i in S:
    if i == ' ':
        if not flag:
            print(tmp[::-1], end=' ')
            tmp = ''
        else:
            print(" ", end='')
    elif i in '<':
        flag = True
        print(tmp[::-1] + '<', end='')
        tmp = ''
    elif i in '>':
        flag = False
        print('>', end='')
    else:
        if flag:
            print(i, end='')
        else:
            tmp += i

print(tmp[::-1])
```

<br>

---

<br>

## 늑대와 양

> 16956

```python
R, C = map(int, input().split())
# string이 immutable, 변환이 어려워 리스트로 받는다
M = [list(input()) for i in range(R)]

dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
ck = False

for i in range(R):
    for j in range(C):
        if M[i][j] == 'W':
            for w in range(4):
                ii, jj = i + dx[w], j + dy[w]
                if ii < 0 or ii == R or jj < 0 or jj == C:
                    continue
                if M[ii][jj] == 'S':
                    ck = True

if ck:
    print(0)
else:
    print(1)
    for i in range(R):
        for j in range(C):
            if M[i][j] not in 'SW':
                M[i][j] = 'D'

for i in M:
    print(''.join(i))
```

<br>

---

<br>

## 꽃길

> 14620

```python
N = int(input())
G = [list(map(int, input().split())) for i in range(N)]

ans = 10000
dx, dy = [0, 0, 0, 1, -1], [0, 1, -1, 0, 0]


def ck(li):
    ret = 0
    flo = []
    for flower in li:
        x = flower // N
        y = flower % N
        if x == 0 or x == N-1 or y == 0 or y == N-1:
            return 10000
        for w in range(5):
            flo.append((x+dx[w], y+dy[w]))
            ret += G[x+dx[w]][y+dy[w]]
    if len(set(flo)) != 15:
        return 10000
    return ret


for i in range(N*N):
    for j in range(N*N):
        for k in range(N*N):
            ans = min(ans, ck([i, j, k]))

print(ans)
```

<br>

---

<br>

## 유기농 배추

> 1012

```python
import sys
sys.setrecursionlimit(10000)

B, ck = [], []
dx, dy = [1, 0, -1, 0], [0, 1, 0, -1]


def dfs(x, y):
    global B, ck
    if ck[x][y] == 1:
        return
    ck[x][y] = 1
    for i in range(4):
        xx, yy = x + dx[i], y + dy[i]
        if B[xx][yy] == 0 or ck[xx][yy] == 1:
            continue
        dfs(xx, yy)


def process():
    global B, ck
    M, N, K = map(int, input().split())
    B = [[0 for i in range(M+2)] for _ in range(N+2)]
    ck = [[0 for i in range(M+2)] for _ in range(N+2)]
    for _ in range(K):
        X, Y = map(int, input().split())
        B[Y+1][X+1] = 1
        ans = 0
    for i in range(1, N+1):
        for j in range(1, M+1):
            if B[i][j] == 0 or ck[i][j] == 1:
                continue
            dfs(i, j)
            ans += 1
    print(ans)


for _ in range(input()):
    process()
```

_재귀함수 깊이가 제한되지 않으면 터질 수 있기에 깊이를 제한하는 것이 필요함_

<br>

---

<br>

## Mooyo Mooyo

> 16768

```python
def new_array(N):
    return [[False for i in range(10)] for _ in range(N)]


N, K = map(int, input().split())
M = [list(input()) for _ in range(N)]
ck = new_array(N)
ck2 = new_array(N)
dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]


def dfs(x, y):
    ck[x][y] = True
    ret = 1
    for i in range(4):
        xx, yy = x + dx[i], y + dy[i]
        if xx < 0 or xx >= N or yy < 0 or yy >= 10:
            continue
        if ck[xx][yy] or M[x][y] != M[xx][yy]:
            continue
        ret += dfs(xx, yy)
    return ret


def dfs2(x, y, val):
    ck2[x][y] = True
    M[x][y] = '0'
    for i in range(4):
        xx, yy = x + dx[i], y + dy[i]
        if xx < 0 or xx >= N or yy < 0 or yy >= 10:
            continue
        if ck2[xx][yy] or M[xx][yy] != val:
            continue
        dfs2(xx, yy, val)


def down():
    for i in range(10):
        tmp = []
        for j in range(N):
            if M[j][i] != '0':
                tmp.append(M[j][i])
        for j in range(N-len(tmp)):
            M[j][i] = '0'
        for j in range(N-len(tmp), N):
            M[j][i] = tmp[j-N+len(tmp)]


while True:
    exist = False
    ck = new_array(N)
    ck2 = new_array(N)
    for i in range(N):
        for j in range(10):
            if M[i][j] == '0' or ck[i][j]:
                continue
            res = dfs(i, j)
            if res >= K:
                dfs2(i, j, M[i][j])
                exist = True
    if not exist:
        break
    down()

for i in M:
    print(''.join(i))
```

<br>

---

<br>

## 2048

> 12100

```python
from copy import deepcopy

N = int(input())
B = [list(map(int, input().split())) for i in range(N)]


def rotate90(B, N):
    NB = deepcopy(B)
    for i in range(N):
        for j in range(N):
            NB[j][N-i-1] = B[i][j]
    return NB


def convert(li, N):
    new_list = [i for i in li if i]
    for i in range(1, len(new_list)):
        if new_list[i-1] == new_list[i]:
            new_list[i-1] *= 2
            new_list[i] = 0
    new_list = [i for i in new_list if i]
    return new_list + [0] * (N-len(new_list))


def dfs(N, B, count):
    ret = max([max(i) for i in B])
    if count == 0:
        return ret
    for _ in range(4):
        X = [convert(i, N) for i in B]
        if X != B:
            ret = max(ret, dfs(N, X, count-1))
        B = rotate90(B, N)
    return ret


print(dfs(N, B, 5))
```

_문제 풀이에 있어 전역변수의 사용을 줄이는 쪽으로 생각하기_

<br>

---

<br>

## 배열 돌리기

> 17406

```python
from copy import deepcopy

N, M, K = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(N)]
Q = [tuple(map(int, input().split())) for _ in range(K)]
dx, dy = [1, 0, -1, 0], [0, -1, 0, 1]

ans = 10000


def value(arr):
    return min([sum(i) for i in arr])


def convert(arr, qry):
    (r, c, s) = qry
    r, c = r-1, c-1
    new_arr = deepcopy(arr)
    for i in range(1, s+1):
        rr, cc = r-i, c+i
        for w in range(4):
            for d in range(i*2):
                rrr, ccc = rr + dx[w], cc + dy[w]
                new_arr[rrr][ccc] = arr[rr][cc]
                rr, cc = rrr, ccc
    return new_arr


def dfs(arr, qry):
    global ans
    if sum(qry) == K:
        ans = min([ans, value(arr)])
        return
    for i in range(K):
        if qry[i]:
            continue
        new_arr = convert(arr, Q[i])
        qry[i] = 1
        dfs(new_arr, qry)
        qry[i] = 0


dfs(A, [0 for i in range(K)])
print(ans)
```

<br>

---

<br>

## 가장 큰 증가 부분 수열

> 11055

```python
import copy

N, A = int(input()), list(map(int, input().split()))

DP = copy.deepcopy(A)

for i in range(1, N):
    for j in range(i):
        if A[i] > A[j]:
            DP[i] = max(A[i] + DP[j], DP[i])

print(max(DP))
```

<br>

---

<br>

## 2차원 배열의 합

> 2167

```python
N, M = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(N)]
DP = [[0 for i in range(M+1)] for _ in range(N+1)]

for i in range(1, N+1):
    for j in range(1, M+1):
        DP[i][j] = DP[i-1][j] + DP[i][j-1] - DP[i-1][j-1] + A[i-1][j-1]

for _ in range(int(input())):
    i, j, x, y = map(int, input().split())
    print(DP[x][y] - DP[i-1][y] - DP[x][j-1] + DP[i-1][j-1])
```

<br>

---

<br>

## 음계

> 2920

```python
n = list(map(int, input().split()))

asc = True
des = True

for i in range(len(n) - 1):
    if n[i] < n[i+1]:
        des = False
    else:
        asc = False

if asc:
    print('ascending')
elif des:
    print('descending')
else:
    print('mixed')
```

<br>

---

<br>

## 블랙잭

> 2798

```python
a, b = list(map(int, input().split()))
li = list(map(int, input().split()))

leng = len(li)
answer = 0

for i in range(0, leng):
    for j in range(i+1, leng):
        for k in range(j+1, leng):
            sum_n = li[i] + li[j] + li[k]
            if sum_n <= b:
                answer = max(sum_n, answer)

print(answer)
```

<br>

---

<br>

## 스택 수열

> 1874

```python
n = int(input())
count = 1
stack = []
stack_answer = []

for i in range(1, n + 1):
  data = int(input())
  while count <= data:
    stack.append(count)
    count += 1
    stack_answer.append('+')
  if stack[-1] == data:
    stack.pop()
    stack_answer.append('-')
  else:
    print('NO')
    exit(0)
print('\n'.join(stack_answer))
```

<br>

---

<br>

## 프린터 큐

> 1966

```python
cases = int(input())

for _ in range(cases):
    n, m = map(int, input().split())
    queue = list(map(int, input().split()))
    queue = [(i, idx) for idx, i in enumerate(queue)]

    cnt = 0
    while True:
        if queue[0][0] == max(queue, key=lambda x: x[0])[0]:
            cnt += 1
            if queue[0][1] == m:
                print(cnt)
                break
            else:
                queue.pop(0)
        else:
            queue.append(queue.pop(0))
```

<br>

---

<br>

## 키로거

> 5397

```python
N = int(input())

for _ in range(N):
    l_stack = []
    r_stack = []
    data = input()
    for i in data:
      if i == '-':
        if l_stack:
          l_stack.pop()
      elif i == '<':
        if l_stack:
          r_stack.append(l_stack.pop())
      elif i == '>':
        if r_stack:
          l_stack.append(r_stack.pop())
      else:
        l_stack.append(i)
    l_stack.extend(reversed(r_stack))
    print(''.join(l_stack))
```

<br>

---

<br>

## SHA256

> 10930

```python
import hashlib

data = input()
hash_data = data.encode()
result = hashlib.sha256(hash_data).hexdigest()
print(result)
```

<br>

---

<br>

## 친구 네트워크

> 4195

```python
def find(x):
  if x == parent[x]:
    return x
  else:
    p = find(parent[x])
    parent[x] = p
    return p


def union(x, y):
  x = find(x)
  y = find(y)
  if x != y:
    parent[y] = x
    number[x] += number[y]


cases = int(input())

for _ in range(cases):
  parent = dict()
  number = dict()
  f = int(input())

  for _ in range(f):
    x, y = input().split()
    if x not in parent:
      parent[x] = x
      number[x] = 1
    if y not in parent:
      parent[y] = y
      number[y] = 1

    union(x, y)
    print(number[find(x)])
```

<br>

---

<br>

## 정수 삼각형

> 1932

```python
N = int(input())
A = [[0 for _ in range(N+1)] for i in range(N+1)]
DP = [[0 for _ in range(N+1)] for i in range(N+1)]

for i in range(1, N+1):
    tmp = list(map(int, input().split()))
    for j in range(1, i+1):
        A[i][j] = tmp[j-1]

for i in range(1, N+1):
    for j in range(1, i+1):
        DP[i][j] = max(DP[i-1][j-1], DP[i-1][j]) + A[i][j]

print(max(DP[-1]))
```

<br>

---

<br>

## 수 정렬하기

> 2750

```python
n = int(input())

tmp_li = []

for i in range(n):
    nums = int(input())
    tmp_li.append(nums)

tmp_li.sort()
for i in tmp_li:
    print(i)

# 선택 정렬
n = int(input())
array = list()

for _ in range(n):
    array.append(int(input()))

for i in range(n):
    min_index = i
    for j in range(i + 1, n):
        if array[min_index] > array[j]:
            min_index = i
    array[i], array[min_index] = array[min_index], array[i]

for i in array:
    print(i)
```

<br>

---

<br>

## 소트인사이드

> 1427

```python
tmp_li = [int(s) for s in str(input())]
tmp_li.sort(reverse=True)
answer = ''

for s in tmp_li:
    answer += str(s)

print(answer)

# 다른 풀이
array = input()
for i in range(9, -1, -1):
    for j in array:
        if int(j) == i:
            print(i, end='')
```

<br>

---

<br>

## 나이순 정렬

> 10814

```python
n = int(input())

tmp_li = []

for _ in range(n):
    data = input().split()
    tmp_li.append((int(data[0]), data[1]))

tmp_li = sorted(tmp_li, key=lambda x: x[0])

for i in tmp_li:
    print(i[0], i[1])
```

<br>

---

<br>

## 좌표 정렬하기

> 11650

```python
n = int(input())

tmp_li = []

for _ in range(n):
    x, y = map(int, input().split())
    tmp_li.append((x, y))

tmp_li = sorted(tmp_li)
for i in tmp_li:
    print(i[0], i[1])
```

<br>

---

<br>

## 수 정렬하기3

> 10989

```python
import sys
n = int(sys.stdin.readline())
tmp_li = [0] * 10001

for _ in range(n):
    data = int(sys.stdin.readline())
    tmp_li[data] += 1

for i in range(10001):
    if tmp_li[i] != 0:
        for j in range(tmp_li[i]):
            print(i)
```

<br>

---

<br>

## 피보나치 수

> 2747

```python
n = int(input())
a, b = 0, 1
while n:
    a, b = b, a+b
    n -= 1

print(a)

#
def fibo(n, a, b):
    if n == 1:
        return print(a)
    return fibo(n-1, b, a+b)


print(fibo(int(input()), 0, 1))
```

<br>

---

<br>

## Z

> 1074

```python
def solution(n, x, y):
  global result
  if n == 2:
    if x == X and y == Y:
      print(result)
      return
    result += 1
    if x == X and y + 1 == Y:
      print(result)
      return
    result += 1
    if x + 1 == X and y == Y:
      print(result)
      return
    result += 1
    if x + 1 == X and y + 1 == Y:
      print(result)
      return
    result += 1
    return

  solution(n / 2, x, y)
  solution(n / 2, x, y + n / 2)
  solution(n / 2, x + n / 2, y)
  solution(n / 2, x + n / 2, y + n / 2)


result = 0
N, X, Y = map(int, input().split())
solution(2 ** N, 0, 0)

## solve.2 ##
N, r, c = map(int, input().split())
# Z : 0,0 기준 x, y의 숫자


def Z(sz, x, y):
    if sz == 1:
        return 0
    sz //= 2
    for i in range(2):
        for j in range(2):
            if x < sz * (i+1) and y < sz * (j+1):
                return (i*2+j) * sz*sz + Z(sz, y-sz*i, y-sz*j)


print(Z(2**N, r, c))
```

<br>

---

<br>
