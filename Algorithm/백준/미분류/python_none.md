## 미분류 문제들

<br>

[(15969)행복](#행복)   
[(10539)수빈이와 수열](#수빈이와-수열)   
[(17269)이름궁합 테스트](#이름궁합-테스트)   
[(17389)보너스 점수](#보너스-점수)   
[(1920) 수 찾기](#수-찾기)   
[(16165)걸그룹 마스터 준석이](#걸그룹-마스터-준석이)   
[(2920) 음계](#음계)   
[(2798) 블랙잭](#블랙잭)   
[(1874) 스택 수열](#스택-수열)   
[(1966) 프린터 큐](#프린터-큐)   
[(5397) 키로거](#키로거)   
[(5397) SHA-256](#SHA256)   
[(4195) 친구 네트워크](#친구-네트워크)   
[(1932) 정수 삼각형](#정수-삼각형)   


<br>

- - -

<br>

## 행복
> 15969

```python
n, score = int(input()), list(map(int, input().split()))
print(max(score) - min(score))
```
<br>

- - -

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

- - -

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

- - -

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

- - -

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

- - -

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

- - -

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

- - -

<br>
<br>

- - -

<br>
<br>

- - -

<br>
<br>

- - -

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

- - -

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

- - -

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

- - -

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

- - -

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

- - -

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

- - -

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

- - -

<br>
<br>

- - -

<br>











