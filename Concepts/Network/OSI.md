## OSI

Open System Interconnection Reference Model

국제 표준화 기구 (ISO)에서 개발한 모델로, 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것.  
`이질적인 시스템, HW와 SW간 상호 접속을 위한 개념을 규정하기 위해서~ 란 느낌`

덕분에 통신 과정의 흐름을 한 눈에 이해하기 쉬워졌다. 유지 보수적인 측면에서도 이슈가 생긴 단계만 고치면 된다는 장점이 있다.

<br>

- **동작 원리**

  - OSI 7계층은 응용, 표현, 세션, 전송, 네트워크, 데이터링크, 물리 계층으로 나뉜다.

  - 캡슐: 데이터 전송 시 7계층에서 1계층으로 각 층마다 인식이 가능한 헤더를 데이터에 추가하여 하위 계층으로 전달한다.

  - 디캡슐: 데이터 수신 시 1계층에서 7계층으로 해당 헤더를 제거하며 상위 계층으로 전달한다.

  - 이렇게 최종적으로 순수한 데이터가 전송되게 된다.

<br>

### 1. 물리 계층 (Physical Layer)

전기적, 기계적인 기능적 특성을 이용하여 통신 케이블을 통한 데이터 전송을 한다.

통신 단위는 비트. 전기적 on/off를 1과 0으로 나타내는 것이다.

이 계층은 데이터를 전달만할 뿐, 데이터의 종류와 에러 여부는 관여하지 않는다.

통신 케이블, 허브, 리피터 등의 장비가 이에 속한다.

<br>

### 2. 데이터 링크 계층 (DataLink Layer)

물리 계층의 송수신 데이터의 전달을 돕는 계층.

MAC 주소(물리적 주소)를 가지고 통신이 이루어지며 오류를 찾거나 재전송하는 역할도 수행한다. 전송 단위는 Frame이라 부른다.

브리지, 스위치 등이 이 계층에 속한다.

또한 Point to Point 간 신뢰성을 갖춘 전송을 보장하기 위해 물리 계층에서 관여하지 않는 에러 처리나 CRC 기반의 오류 제어, 흐름 제어를 수행한다.

<br>

### 3. 네트워크 계층 (Network Layer)

데이터를 목적지까지 안전하고 빠르게 전달하는 기능(라우팅)을 수행한다. 최적의 경로로 설정할 수 있어야 한다.

데이터의 목적지인 컴퓨터의 주소를 IP 주소라고 하며 네트워크 계층의 헤더에 속해있다.

이 계층에서의 단위는 Packet(Package + Bucket).

<br>

### 4. 전송 계층 (Transport Layer)

end to end, 양 단의 사용자들이 신뢰성있는 데이터를 주고받게 하는 역할을 담당한다.

효율적이고 신뢰성있는 데이터 전송을 위해 오류 검출, 복구, 흐름제어, 중복검사 등을 수행한다.

대표적으로 TCP, UDP가 있으며 Segment라는 데이터 단위를 사용한다.

TCP 연결시 3-way handshake 방식으로 목적지와 패킷을 교환하며 연결을 수행하고 연결 종료시 4-way handshake 방식을 사용한다.  
다만 신뢰성을 보장한다는 장점의 이면에는 연결을 계속 유지해야 하기때문에 자원 소모가 발생한다는 단점이 있다.

UDP 프로토콜은 비 연결성 프로토콜이다. 데이터를 빠르게 전송하는 방식이다. 데이터가 목적지에 도달했는지는 관심이 없으며 이는 TCP 보다 오버헤드가 적기에 스트리밍이나 연속성을 띄는 서비스에 사용한다.

<br>

### 5. 세션 계층 (Session Layer)

양 단의 응용 프로세스가 통신을 관리하기 위한 방법을 제공한다.

단방향 통신(Simplex), 반이중 통신(half-duplex), 전이중 통신(Full Duplex)같은 통신과 함께 세션 연결을 총체적으로 관리한다.

통신하는 사용자들을 동기화하고 오류 복구 명령들을 일괄적으로 다룬다.

대표적으로 OS가 이 계층에 해당한다.

<br>

### 6. 표현 계층 (Presentation Layer)

코드 간의 번역을 담당하여 사용자 시스템에서 데이터 형식상의 차이라는 부담을 덜어준다.

응용 계층으로 받거나 전송하는 데이터의 인코딩, 디코딩이 이루어지는 계층인 것이다. MIME 인코딩이나 암호화, 복호화 등의 작업이 이 계층에서 이뤄진다.

데이터를 어떻게 표현할 것인지에 대한 표준화 역할을 맡는 계층이다.

<br>

### 7. 응용 계층 (Application Layer)

프로그램의 목적에 맞는 통신 규약을 결정하는 계층.

한마디로 사용자 인터페이스를 제공하는 계층이라고 보면 된다.

HTTP, FTP 등의 프로토콜이 이 계층에 속한다.

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

https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95