## 미분류 문제들

<br>

[(15969)행복](#행복)   
[(10539)수빈이와 수열](#수빈이와-수열)   
[(17269)이름궁합 테스트](#이름궁합-테스트)   
[(17389)보너스 점수](#보너스-점수)   
[(2920) 음계](#음계)   
[(2798) 블랙잭](#블랙잭)   
[(1874) 스택 수열](#스택-수열)   


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
cnt = 1
stack = []
stack_answer = []

```

<br>

- - -

<br>


<br>

- - -

<br>











