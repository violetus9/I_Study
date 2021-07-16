## 미분류 문제들

> 나중에 많아지면 사전순이나 번호순 정렬 만들면 조흘듯

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
