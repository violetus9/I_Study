## 언어별 입력 방법

[JavaScript](#JavaScript)   
[python](#python)   

---------------------
---------------------

<br>

## JavaScript

1. readline 모듈
    ```javaScript
    /********** 한 줄 입력 **********/

    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.on('line', function(line) {
      console.log(line);

      rl.close();
    }).on("close", function() {
      process.exit();
    });


    /********* 여러 줄 입력 *********/

    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.on('line', function (line) {
      const input = line.split(' ');
    })
      .on('close', function () {
      console.log(input);
      process.exit();
    });
    ```

<br><br> 
    
2. fs 모듈
    ```javaScript
    /********** 한 줄 입력 **********/
    
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');

    
    /********* 여러 줄 입력 *********/

    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split('\n');

    let count = input[0];
    let numbers = [];

    for (let i = 1; i < input.length; i++) {
      if (input[i] !== '') {
        numbers.push(input[i].split(' '));
      }
    }

    ```
    * *line : 입력값, 문자열*


---------------------
---------------------

## python
  
1. input()
  ```python
  data = list(map(int, input().split()))
  ```

<br>

2. sys.stdin.readline()
  ```python
  import sys

  # 2차원 리스트 입력시
  li = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

  # 문자열 입력시
  text = sys.stdin.readline().rstrip()  
  ```

  * input() 으로 받는 입력보다 sys 이용하는 편이 더 빠르대

-----------------------