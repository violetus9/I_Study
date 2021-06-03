# ^0^
[(9012) 괄호](#괄호)   
[(10828)스택](#스택)   
[(10845)큐](#큐)   


----------

<br>

## 괄호
> 9012

  ```python
  n = int(input())

  for _ in range(1):
      lifo = 0
      vps = input()
      for i in vps:
          if i == '(':
              lifo += 1
          elif i == ')':
              lifo -= 1
          if lifo < 0:
              break

      if lifo == 0:
          print('YES')
      else:
          print('NO')
  ```
  * *벌써 몇번째야 제출언어좀 확인해*

<br><br>

----------------------

## 스택
> 10828

	```python
	import sys

	n = int(sys.stdin.readline())
	logBox = []

	for _ in range(n):
			ord = sys.stdin.readline().split()
			if ord[0] == 'push':
					logBox.append(ord[1])
			elif ord[0] == 'top':
					if len(logBox) == 0:
							print(-1)
					else:
							print(logBox[-1])
			elif ord[0] == 'pop':
					if len(logBox) == 0:
							print(-1)
					else:
							print(logBox.pop())
			elif ord[0] == 'size':
					print(len(logBox))
			elif ord[0] == 'empty':
					if len(logBox) == 0:
							print(1)
					else:
							print(0)
	```

<br><br>

----------------------

## 큐
> 10845

	```python
	import sys

	n = int(sys.stdin.readline())
	que = []

	for _ in range(n):
			ord = sys.stdin.readline().split()
			if ord[0] == 'push':
					que.append(ord[1])
			elif ord[0] == 'pop':
					if len(que) == 0:
							print(-1)
					else:
							print(que.pop(0))
			elif ord[0] == 'size':
					print(len(que))
			elif ord[0] == 'empty':
					if len(que) == 0:
							print(1)
					else:
							print(0)
			elif ord[0] == 'front':
					if len(que) == 0:
							print(-1)
					else:
							print(que[0])
			elif ord[0] == 'back':
					if len(que) == 0:
							print(-1)
					else:
							print(que[-1])
	```

<br><br>

----------------------



<br><br>

- - -

<a href='#0'>맨위로</a>

- - -

