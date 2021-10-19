## JVM 메모리 구조

- **JVM?**

  Java Virtual Machine.

  자바 가상 머신으로 자바와 OS 사이 중개자 역할을 수행한다. 이로써 자바는 OS에 구애받지 않고 프로그램을 실행할 수 있게 된다. 또한, GC를 사용한 자동 메모리 관리를 수행하고 여타 HW와 다르게 레지스터 기반이 아닌 스택 기반으로 동작한다.

<br>

### 실행 단계

1. Java Code(.java)

2. JAVAC compiler

3. Byte Code(.class)

4. JVM

5. OS

번호 순서대로 프로세스를 진행한다. 만약 다른 OS에서 만든 자바 소스 파일을 윈도우에서 열고자 한다면 윈도우용 JVM을 설치하면 된다.  
_(JVM은 OS에 종속적)_

<br>
<br>

### JVM 메모리 구조

JVM의 구조를 크게 나누면 GC, Execution Engine, Class Loader, Runtime Data Area. 네 가지로 나눌 수 있다.

<br>

- **Class Loader**

  JVM 내로 클래스 파일을 로드하고 링크를 통해 배치하는 작업을 수행하는 모듈. 런타임시 동적으로 클래스를 로드한다.

- **Execution Engine**

  Class Loader를 통해 JVM 내의 Runtime Data Area에 배치된 Byte Code들을 명령어 단위로 읽어 실행한다.  
  최초 JVM이 나왔을 당시 인터프리터 방식이었기에 속도는 느렸지만 JIT 컴파일러 방식을 통해 보완했다.  
  JIT는 Byte Code를 어셈블러같은 네이티브 코드로 바꿈으로써 실행은 빠르나 변환에 비용이 발생한다. 따라서 JVM은 모든 코드를 JIT 컴파일러 방식으로 실행치 않고 인터프리터 방식을 사용하다가 일정 기준을 초과했을 시 JIT 컴파일러 방식으로 실행한다.

- **GC(Garbage Collector)**

  GC는 힙 메모리 영역에 생성된 객체들 중 참조되지 않은 객체들을 탐색 후 제거하는 역할을 수행한다. 다만 수행하는 정확한 타이밍은 알 수 없다.

- **Runtime Data Area**

  JVM의 메모리 영역. Java Application을 실행할 때 사용되는 데이터들을 적재하는 영역이다.

  - Method Area
  - Heap Area
  - Stack Area
  - PC Register
  - Native Method Stack

  으로 나눌 수 있다.

  <br>

  - Method Area

    모든 Thread가 공유하는 메모리 영역. Class, Interface, Method, Field, Static 변수 등의 Byte Code를 보관.

  - Heap Area

    모든 Thread가 공유. new 키워드를 통해 생성된 객체와 배열이 생성되는 영역.  
    Method 영역에 로드 된 클래스만 생성이 가능하고 GC가 참조하지 않는 메모리를 확인하고 제거하는 영역.  
    내부적으로 또 몇가지 영역으로 나뉜다.

  - Stack Area

    Method 호출 시마다 각각의 Stack Frame(Method만을 위한 공간)이 생성한다. 그리고 Method 내부에서 사용되는 값들을 저장하며 호출된 Method의 매개변수, 지역변수, 반환 값 및 연산시 일어나는 값들을 임시로 저장한다.  
    Method 수행이 끝나면 프레임별로 삭제한다.

  - PC Register

    Thread가 시작될 때 생성. Thread마다 하나씩 존재하며 Thread가 어떤 부분을 무슨 명령으로 실행해야할 지에 대해 기록하는 부분으로 현재 수행중인 JVM 명령의 주소를 갖는다.

  - Native method stack

    자바 외 언어로 작성된 네이티브 코드를 위한 메모리 영역.

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
<br>
<br>
<br>
<br>
<br>

참고

https://steady-coding.tistory.com/305
