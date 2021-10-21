## BSON

<br>

### JSON

Javascript Object Notation.

Key, Value의 값을 가지며 직관적이며 간단한 표현 방식이다.

사람과 기계 모두가 쉽게 읽을 수 있는 구조를 가지고 있기 때문에 확인하기도 쉽고 구현도 쉬워 여기저기서 사용하는 데이터 형태이다.

<br>

### BSON

Binary JSON

기본적으로 JSON과 동일한 구조를 가지고 있으며 Binary 형태로 변경된 구조이다.

초기 MongoDB 개발 시 JSON을 이용해 개발했다고 하나 이는 다음의 문제가 있었다.

- JSON은 text 기반으로 구문 분석이 느리다.
- JSON은 공간 효율성이 좋지 못하다(DB문제)

이 뿐만 아니라 여러 문제들이 나타났는데, 그를 개선하기 위해 등장한 것이 BSON.

JSON의 장점을 채택하면서 기계가 빠르게 읽을 수 있게 Binary 형태로 변경하여 저장한 형식이다.

<br>

### MongoDB의 BSON & JSON

MongoDB는 내부적으로 BSON을 사용한다. 사람에게 보여질 때는 JSON의 형태로 보여지면서 네트워크 전송 시 BSON 형태로 저장, 전송한다.

_대략 이런 형태_

```json
{"hello": "world"}
->  \x16\x00\x00\x00 // total document size
    \x02  // 0x02 = type String
    hello\x00 // field name
    \x06\x00\x00\x00world\x00 // field value
    \x00  // 0x00 = type E00 ('end of object')
```

그리고 JSON이 문자열, boolean, number, array를 표현할 수 있다는 것에 비해 BSON은 조금 더 디테일한 표현이 가능하다.  
_(number = (Integer, Float, Long, Decimal...))_

이는 사람이 일일히 신경써야 하는 데이터들이 아니다. 내부적으로 유연하게 데이터를 동적으로 저장하고 있으며 이 것이 RDBMS와 큰 차이를 갖게 한다.

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
<br>
<br>
<br>
<br>
<br>

참고

https://koonsland.tistory.com/86
