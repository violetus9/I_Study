## 그리디, 정답률 50% 이상

_뒤로가기 누르면 목록으로 돌아와짐!_

<br>

[(5585) 거스름돈](#거스름돈)  
[(10162)전자레인지](#전자레인지)

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

<br>

---

<br>
