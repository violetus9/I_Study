## 문자열을 형태가 다른 문자열로 변환하기

<br>

```js
const simpleCamel = (test, splitter = ' ') => text.split(splitter)
                    .map((word, wi) => word.split('')
                    .map((c, ci) => wi > 0 && ci === 0 ? c.toUpperCase() : c.toLowerCase())
                    .join(''))
                    .join('');

function convertCamelName(name)) {
  let camelNmae = '';

  for (let i = 0, newSpace = false; i < name.length; i++) {
    if (name[i] == ' ') {
      newSpace = true;
      continue;
    }

    if (newSpace) {
      camelName = camelName + name[i].toUpperCase();
      newSpace = false;
    } else {
      camelName = camelName + name[i].toLowerCase();
    }
  }

  return camelName;
}

const camelName1 = convertCamelName('kim min tae');
const camelName2 = simpleCamel('KIM MIN TAE');

console.log(camelName1);
console.log(camelName2);
```

공백으로 주어진 문자열에 대해 CamelCase로 나타내는 방법이다.

두 코드 스타일은 배열 연산 위주인가, 반복문 연산 위주인가의 차이가 있다. 장단은 없고 단순 스타일의 차이이니 익숙한, 혹은 팀원의 스타일에 맞춰 코딩하자~
