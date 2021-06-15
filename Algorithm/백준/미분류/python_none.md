## 미분류 문제들

<br>

[(2920) 음계](#음계)   
[(2798) 블랙잭](#블랙잭)   
[(1874) 스택 수열](#스택-수열)   


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











