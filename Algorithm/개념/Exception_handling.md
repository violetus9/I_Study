## 예외처리를 알아보자
   
> 경우에 따라 많이 다르기에 감을 익히는 것이 중요하다.
<br>

1. 논리/비트 연산자 활용

    ```python
    a, b = 10, 20

    # and, or을 잘 활용하자
    if a > b and a % 10 == 0:
      print(a)

    # 비트 연산자
    1 << 2, 1 & 1, 1 | 1, 1 ^ 1
    ```
<br>

2. 상태를 나타내는 자료 활용

    ```python
    N = 71
    check = False

    for i in range(1, N):
      if N % i == 0:
        print("Not Prime")
        check = True
        break

    if not check:
      print("Prime")
    ```
<br>

3. 나누어 진행

    ```python
    def isPrime(N):
      for i in range(2, N):
        if N % i == 0:
          return False
      return True


    for N in range(10, 100):
      if isPrime(N):
        print("{} if Prime".format(N))
      else:
        print("Not Prime")

    
    # 단순 조건문 등을 함수로 만들면 간결하다
    def isRange(a, b, N, M):
      return 0 <= a < N and 0 <= b < N
    ```
<br>

4. 여러 자료구조와 메서드, 함수 사용
  
    * palindrome
    
      ```python
      S = "hello"

      # case 1
      for idx in S:
        if S(idx) != S[len(S)-idx-1]:
          print("Not Palin")

      # case 2
      if S == S[::-1]:
        print("isPalin")
      ```

    * unique

      ```python
      def isUnique(li):
        return len(li) == len(set(li))
      ```
<br>

5. 미리 처리한 케이스와 처리할 케이스 정리

    ```python
    # 1. 예제 케이스
    # 2. 조건 A
    # 3. 조건 B
    # 4. 조건 AB
    ```
<br>

6. 예제, 최소, 최대, 예외, 랜덤 케이스 생성

  * 이 부분은 확실히 경험의 영역이기에 많이 접해보는편이 답이다!
