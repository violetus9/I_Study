## Singleton

모듈 패턴의 변형이라고 볼 수 있다.

하나의 인스턴스를 생성하는 패턴, 레지스트리와 같은 설정 파일이나 게임(의 실행은 한번만 되야 함) 경우 여러개 생성되는 것을 피해야 하기에 싱글톤 패턴을 사용한다. 적용은 간단히 처음 네임스페이스를 만들 때 사용하면 된다.

하나의 인스턴스를 메모리에 등록 후, 여러 스레드가 동시에 해당 인스턴스를 공유하여 사용할 수 있다. 요청이 많은 곳에서 사용하면 효율을 높일 수 있다.

주의할 점은 싱글턴 패턴 생성시 `Concurrency`문제를 고려하여 설계하여야 한다.

> _[Concurrency](../Javascript/Concurrency_Event-Loop.md)_

<br>
<br>

### Java의 싱글톤

싱글톤 패턴 하면 특징으로 private 생성자를 가진다는것, static method를 사용한다는 것이 있겠다.

```java
class Connection {
  static private Connection _inst = null;
  private int count = 0;
  static public Connection get() {
    if (_inst == null) {
      _inst = new Connection();
      return _inst;
    }
    return _inst;
  }

  public void count() {count++;}
  public int getCount() {return count;}
}

public class testcon {
  public static void main(String[] args) {
    Connection c1 = Connection.get();
    c1.count();
    Connection c2 = Connection.get();
    c2.count();
    Connection c3 = Connection.get();
    c3.count();
    System.out.print(c1.getCount());
  }
}
```

<br>

### Javascript의 싱글톤

사실 내용적으로 자바와 크게 다른 점은 없다.

```javascript
var singleton = (function () {
	var instance;
	var a = "hello";
	function initiate() {
		return {
			a: a,
			b: function () {
				alert(a);
			},
		};
	}
	return {
		getInstance: function () {
			if (!instance) {
				instance = initiate();
			}
			return instance;
		},
	};
})();
var first = singleton.getInstance();
var second = singleton.getInstance();
console.log(first === second); // true;
```

JS의 경우 객체 리터럴이 싱글톤 패턴의 대표적인 예이나 모든 속성이 공개되어 있다. 싱글톤 패턴은 private하게 만들어져야 한다.

위 코드의 포인트는 IIFE인데 이 IIFE가 비공개 변수를 만들 수 있도록 돕는 역할을 한다. 즉시실행함수의 내부에 초기화 함수와 인스턴스 변수를 만들어 주고, 이 때 만들어진 초기화 함수의 내용이 실제 객체가 되는 것.

IIFE의 return부터 코드의 흐름대로 따라가다보면 인스턴스가 존재하는 경우 기존의 인스턴스를 바로 반환한다. ('복사된다'의 개념이 아니라 그냥 기존의 것을 반환한다)

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

2021 정보처리기사 실기 3회 복기

https://webdevtechblog.com/%EC%8B%B1%EA%B8%80%ED%84%B4-%ED%8C%A8%ED%84%B4-singleton-pattern-db75ed29c36
