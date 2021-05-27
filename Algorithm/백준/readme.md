## JS로 풀기

<br>

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

