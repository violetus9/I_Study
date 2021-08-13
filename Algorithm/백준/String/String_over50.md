## 문자열 처리 정답률 50% 이상

<br>

[(10953)A+B-6](#A+B-6)  
[(11719)그대로 출력하기 2](#그대로-출력하기-2)  
[(11721)열 개씩 끊어 출력하기](#열-개씩-끊어-출력하기)

<br>

---

<br>

## A+B-6

> 10953

```python
n = int(input())
for _ in range(n):
  a, b = map(int, input().split(','))
  print(a + b)
```

<br>

---

<br>

## 그대로 출력하기 2

> 11719

```python
while True:
  try:
    print(input())
  except EOFError:
    break
```

<br>

---

<br>

## 열 개씩 끊어 출력하기

> 11721

```python
s = input()
cnt = 0
for e in s:
  cnt += 1
  print(e, end='')
  if cnt % 10 == 0:
    print()
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
<br>

---

<br>
