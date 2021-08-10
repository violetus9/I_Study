## 그리디 정답률 50% 이상

<br>

[(2720) 세탁소 사장 동혁](#세탁소-사장-동혁)  
[(5585) 거스름돈](#거스름돈)  
[(10162)전자레인지](#전자레인지)  
[(11399)ATM](#ATM)

<br>

---

<br>

## 세탁소 사장 동혁

> 2720

```python
N = int(input())
C = [25, 10, 5, 1]
ans = []

for _ in range(N):
    M = int(input())
    tmp = []
    for i in C:
        tmp.append(M//i)
        M %= i
    ans.append(tmp)

for i in ans:
    for j in i:
        print(j, end=' ')
```

<br>

---

<br>

## 거스름돈

> 5585

```python
money = 1000 - int(input())
change = [500, 100, 50, 10, 5, 1]
ans = 0

for i in change:
    ans += money//i
    money %= i

print(ans)
```

<br>

---

<br>

## 전자레인지

> 10162

```python
T = int(input())
B = [300, 60, 10]
ans = []

for i in B:
    if T // i:
        ans.append(T // i)
        T %= i
    else:
        ans.append(0)

if T:
    print(-1)
else:
    for i in ans:
        print(i, end=' ')
```

<br>

---

<br>

## ATM

> 11399

```python
N = int(input())
P = list(map(int, input().split()))
P.sort()
for i in range(N - 1):
    P[i + 1] += P[i]
print(sum(P))
```

<br>

---

<br>

<br>

---

<br>
