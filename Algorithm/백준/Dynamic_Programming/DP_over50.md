## DP 정답률 50% 이상

<br>

[(9095) 123더하기](#123더하기)  
[(9655) 돌 게임](#돌-게임)  
[(10870)피보나치 수 5](#피보나치-수-5)  
[(11048)이동하기](#이동하기)  
[(11052)카드 구매하기](#카드-구매하기)  
[(11054)가장 긴 바이토닉 부분 수열](#가장-긴-바이토닉-부분-수열)  
[(11660)구간 합 구하기 5](#구간-합-구하기-5)  
[(11727)2xn타일링2](#2xn타일링2)

<br>

---

<br>

## 123더하기

> 9095

```python
def checker(n):
    if n == 1:
        return 1
    if n == 2:
        return 2
    if n == 3:
        return 4
    return checker(n - 3) + checker(n - 2) + checker(n - 1)


N = int(input())
for _ in range(N):
    print(checker(int(input())))
```

<br>

---

<br>

## 돌 게임

> 9655

```python
n = int(input())
if n%2 == 0: print('CY')
else: print('SK')
```

<br>

---

<br>

## 피보나치 수 5

> 10870

```python
def fibo(n):
  if n == 0:
    return 0
  if n == 1:
    return 1
  return fibo(n - 2) + fibo(n - 1)

print(fibo(int(input())))
```

<br>

---

<br>

## 이동하기

> 11048

```python
y, x = map(int, input().split())
labirinth = [[0] for _ in range(y + 1)]
for i in range(1, y + 1):
  labirinth[i] += (list(map(int, input().split())))
labirinth[0] += [0] * x

for i in range(1, y + 1):
  for j in range(1, x + 1):
    labirinth[i][j] = labirinth[i][j] + \
      max(labirinth[i - 1][j], labirinth[i][j - 1])

print(labirinth[y][x])
```

<br>

---

<br>

## 카드 구매하기

> 11052

```python
N = int(input())
P = [0] + list(map(int, input().split()))
dp = [0 for _ in range(N + 1)]

for i in range(1, N + 1):
  for j in range(1, i + 1):
    dp[i] = max(dp[i], dp[i - j] + P[j])

print(dp[-1])
```

<br>

---

<br>

## 가장 긴 바이토닉 부분 수열

> 11054

```python
N = int(input())
A = list(map(int, input().split()))
dp = [1] * N
dp2 = [1] * N

for i in range(1, N):
    for j in range(i):
        if A[i] > A[j]:
            dp[i] = max(dp[i], dp[j] + 1)

for i in range(N - 2, -1, -1):
    for j in range(N - 1, i, -1):
        if A[i] > A[j]:
            dp2[i] = max(dp2[i], dp2[j] + 1)

res = 0

for i in range(N):
    if (dp[i] + dp2[i]) > res:
        res = dp[i] + dp2[i]

print(res)
```

<br>

---

<br>

## 구간 합 구하기 5

> 11660

```python
import sys
input = sys.stdin.readline
n, m = map(int, input().split())
prob = [[0] for _ in range(n + 1)]
dp = [[0] * (n + 1) for _ in range(n + 1)]

for i in range(1, n + 1):
  prob[i] += list(map(int, input().split()))

for i in range(1, n + 1):
  for j in range(1, n + 1):
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + prob[i][j]

for _ in range(m):
  x1, y1, x2, y2 = map(int, input().split())

  print(dp[x2][y2] - dp[x1-1][y2] - dp[x2][y1-1] + dp[x1-1][y1-1])
```

<br>

---

<br>

## 2xn타일링2

> 11727

```python
N = int(input())
dp = [0, 1, 3]

for i in range(3, N + 1):
  dp.append(dp[i - 1] + 2 * dp[i - 2])
print(dp[N] % 10007)
```

<br>

---

<br>

<br>

---

<br>

<br>

---

<br>
