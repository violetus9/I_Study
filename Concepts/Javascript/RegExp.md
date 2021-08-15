## 정규식(JS 기준)

```RegExp
/.../gim
```

- `/`: 시작, 종료 기호
- `...`: 정규 표현식
- `gim`: 플래그

<br>

기본적으로 위의 방식으로 선언된다.  
시작과 종료기호 사이 아무런 표현을 하지 않는 `//`의 경우 일치하는 문자열이 없기에 매칭이 되지 않는다.

<br>

**역시 예시를 통해 보는게 빠르겠다**

주어진 문자열: `AA BB Aa Bb $12,000`

- `g`: 전체를 검사, 정규식 패턴에 맞는 모든 문자(열) 반환
  ```RegExp
  /A/g
  ```
  글로벌 영역에서 A를 찾아라 > ['A', 'A', 'A']

<br>

- `gi`: 전체를 검사하되, 알파벳 대소문자 무시
  ```RegExp
  /A/gi
  ```
  > ['A', 'A', 'A', 'a']

<br>

- 문자열 패턴
  ```RegExp
  /AA/gi
  ```
  > ['AA', 'Aa']

<br>

- `.`: 임의 문자 하나를 의미하는 메타 문자 마침표(.)
  ```RegExp
  /./
  ```
  > ['A'] (맨 앞의 A가 뽑혀져 나왔다)

<br>

- `..`: 문자 두개가 결합된 문자열
  ```RegExp
  /../
  ```
  > ['AA'] (맨 앞의 AA)

<br>

- 대상 문자열 전체를 검색하고싶다면?
  ```RegExp
  /.................../
  ```
  > ['AA BB Aa Bb $12,000']
  >
  > > 갯수만큼, 공백포함 찍어주면 됨니다 ^^

<br>

- 문자열이 너무 길어서 알 수가없다???? 몇개인지..
  ```RegExp
  /./g
  ```
  > ['A', 'A', ' ', ....]
  >
  > > 다만 모든 문자열이 분해되어 문자로 반환된다

<br>

- `+`: 앞 패턴의 반복을 지시하는 메타 문자

  ```RegExp
  /.+/
  ```

  > ['AA BB Aa Bb $12,000']
  >
  > > 불일치가 발생할 때 까지 반복하므로 모든 문자열이 출력된다

  <br>

  ```RegExp
  /A+/
  ```

  > ['AA']
  >
  > > A패턴이 반복되며 공백을 만나는 순간 불일치므로 AA 반환

  <br>

  ```RegExp
  /A+/g
  ```

  > ['AA', 'A']
  >
  > > 대상을 전체로 A하나가 추가로 일치한다

<br>

- A or B or ... 조건의 패턴 정규식

  ```RegExp
  /A|B/g
  ```

  > ['A', 'A', 'B', 'B', 'A', 'B']
  >
  > > A나 B중 일치하는 모든 것을 찾는다

  <br>

  - 분해되지 않은 문자열을 찾고 싶다면

    ```RegExp
    /A+|B+/g
    ```

    > ['AA', 'BB', 'A', 'B']

<br>

- `[]`: 문자 집합 메타 문자

  ```RegExp
  /[AB]/g
  ```

  > ['A', 'A', 'B', 'B', 'A', 'B']
  >
  > > 대괄호 내부 포함 문자는 `or` 처리되어 작동한다

  <br>

  - 앞선 패턴의 반복은 마찬가지로

    ```RegExp
    /[AB]+/g
    ```

    > ['AA', 'BB', 'A', 'B']
    >
    > > 앞선 패턴이 그룹(문자 집합, 하위 표현식 등)이면 그룹 전체를 반복의 대상으로 한다

<br>

- `-`: 범위 지정 메타 문자

  ```RegExp
  /[A-Z]+/g
  ```

  > ['AA', 'BB', 'A', 'B']
  >
  > > 왼쪽 문자를 시작으로 오른쪽 문자까지 순차적으로 문자를 증가, 즉 ABC ... XYZ 인 셈이며 문자 집합 내에서만 사용 가능

  <br>

  ```RegExp
  /[A-Za-z]+/g
  ```

  > ['AA', 'BB', 'Aa', 'Bb']
  >
  > > 범위는 하나의 패턴으로 취급, 위는 모든 알파벳의 대소문자 모두를 의미

<br>

- 특수문자를 찾아보자

  `$`의 경우 정규식 내부적으로 쓰이기 때문에 `\`를 이용한다

  ```RegExp
  /\$12,000/g
  ```

  > ['$12,000']

  <br>

  ```RegExp
  /\$[0-9]+/g
  ```

  > ['$12']

  <br>

  ```RegExp
  /\$[0-9,]+/g
  ```

  > ['$12,000']

  - 금액에 소수점이 있다면 마찬가지로 `/\$[0-9,.]+/g`
  - 소수점이 아닌 순수 문자 `.`을 찾고 싶다면 `/\./g`
    > ['.']

<br>

- `\d`: 숫자 0-9를 의미한다

  ```RegExp
  /\d/g
  ```

  > ['1', '2', '0', '0', '0']

<br>

- `\D`: 숫자가 아닌 모든 문자

  ```RegExp
  /\D/g
  ```

  > ['A', 'A', ' ', 'B', 'B', ' ', ..., '$', ',', ...]

<br>

- `\w`: 영문자를 의미, [a-zA-Z_0-9]의 축약형.
  영문자에 `_`와 숫자가 포함된다.

  ```RegExp
  /\w/g
  ```

  > ['A', 'A', 'B', 'B', 'A', 'a', ..., '1', '2', '0', ...]

<br>

- `\W`: 영문자 이외의 모든 문자, [^a-za-z_0-9]를 의미
  여기서 캐럿 `^`은 not의 의미를 가진다

  ```RegExp
  /\W/g
  ```

  > [' ', ' ', ' ', ' ', '$', ',']

<br>

- http: https: httpss: 를 찾아보쟈

  ```RegExp
  /http:/g
  ```

  > ['http:']
  >
  > > 이 방식으로 세 경우 모두를 찾을 수 없다.. `https:`로 검색해도 마찬가지..

  <br>

  ```RegExp
  /http:|https:/g
  ```

  > ['http:', 'https:']
  >
  > > 이 방법은 뭐.. 찾아지긴 하지만 과도하게 길어진다. 그럴거면 정규식 왜써

<br>

- `*`: 앞의 문자가 없거나 1번 이상 나타나는 패턴과 일치

  ```RegExp
  /https*:/g
  ```

  > ['http:', 'https:', 'httpss:']
  >
  > > 만약 httpss를 원하지 않는다면?

  <br>

  - `?`: 앞 문자가 없거나 한 번만 나타나는 패턴과 일치시킴

  ```RegExp
  /https?:/g
  ```

  > ['http:', 'https:']

<br>

## HTTP URL 추출하기

- 여러 도메인이 주어졌다.

  `http://www.static.com:8080/a.jpg`  
  `A: https://admin.static-best.io/show?no-1`  
  `B: https://static-best.site.org/show.jsp?no-1`  
  `http://static best.net/#!/ibare`  
  `http://static.net/#!/ibare`

  이 중 정상적인 http 도메인을 를 찾고싶다

  <br>

  1. 프로토콜 문자열 일치

     `/https?:/g`

  2. 메타 문자 구분해서 슬래쉬 찾기

     `/https?:\/\//g`

  3. 도메인 문자 패턴이 다양하므로 캐럿을 이용

     `/https?:\/\/[^:\/\s]+/g`

     > 패턴의 불일치가 발생할 때 까지 반복을 지정한다: `+`

  4. 잘못된 도메인이 일치되는 문제점을 마침표와 알파벳으로 끝나는 패턴으로 제한

     `/https?:\/\/[^:\/\s]+\.\w+/g`

  5. 포트가 생략된 아이와 표출된 아이를 거르기

     `/https?:\/\/]^:\/\s]+\.\w+(:\d+)?/g`

     > `()`를 통해 패턴을 그룹화 할 수 있다

  6. 대상 문자열의 첫 번째 나타나는 문자 지정 메타 문자 캐럿`^`

     `/^https?:\/\/]^:\/\s]+\.\w+(:\d+)?/g`

  7. `m`: 대상 문자열의 줄바꿈을 인식, 멀티 라인 모드 사용 플래그  
     멀티 라인 모드 활성화의 결과로 캐럿의 효과가 각 라인으로 확대되어 각 라인의 첫 번째에서 시작되는 도메인만 일치된다

     `/^https?:\/\/]^:\/\s]+\.\w+(:\d+)?/gm`

  - 위 절차의 결과

    > ['http://www.static.com:8080', 'http://static.net']

<br>

## 반복 패턴

```css
.brand {
	font-size: 22px;
	color: #ff0000;
	background-color: #00ff00;
	border-color: #ddd;
	margin: 10px 10px 10px 5px;
	padding: 2em 1em 2em 1em;
}
```

1. #으로 시작되는 16진수 컬러 값을 추출하기 위한 문자 집합 패턴

   `/#[0-9A-Fa-f]/g`

2. 패턴의 반복 횟수 지정

   `/#[0-9A-Fa-f\{3,6}/g`

   > 3에서 6까지 반복을 하겠다는 의미로 #ddd도 포함시킨다

3. 세미콜론까지 무한 반복형태로 하되, 세미콜론은 빼고싶다

   `/#[0-9A-Fa-f]+(?=;)/g`

   > 전방 탐색 연산자 `(?=)`로 추출시 세미콜론 제거

   - _후방 탐색 연산자 `(?<=)`는 JS RegExp에서 지원되지 않아요_

<br>

## 역참조를 이용한 범위 지정

```html
<article>
	<h1>Tim Cook didn't address Apple's real privacy problem</h1>
	<h2>Tim Cook didn't address Apple's real privacy problem</h2>
	<h2>Tim Cook didn't address Apple's real privacy problem</h2>
	<h3>Tim Cook didn't address Apple's real privacy problem</h3>
	<h4>Tim Cook didn't address Apple's real privacy problem</h4>
</article>
```

- `<h1>`태그 사이 모든 문자 찾기

  `/<h1>.+<\/h1>/g`

- 하위 표현식 `()`을 지정하는 역참조를 활용, 여는 태그와 닫는 태그의 형태가 같은 태그만을 뽑아내는 용도로 쓰임  
  하위 표현식이 1개 이상인 경우 `\1`, `\2`, `\3` 과 같이 지정한다

  `/<h([1-6])>.+<\/g\1>/g`

  > `([1-6])`에 해당하는 참조를 `\1`이 일치시킨다

<br>

## JS 활용 예

```JS
var targetText = 'http: vs. https: or httpss:';
var matches = targetText.match(/https?:/g);

console.log(matches);
// Array ['http:', 'https:']

targetText = targetText.replace(/https?:/g, 'protocol');
console.log(targetText);
// 'protocol vs. protocol or httpss:'
```

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

Reference: https://www.slideshare.net/ibare/ss-39274621
