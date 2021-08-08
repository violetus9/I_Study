## 미분류 문제들

> 너무 많아져서 분리 20210808

<br>

[(2751) 수 정렬하기 2](#수-정렬하기-2)  
[(11004)K번째 수](#K번째-수)

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

<br>

---

<br>
