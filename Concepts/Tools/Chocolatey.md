## chocolatey

window OS 용 패키지 매니저

MAC의 brew같은 느낌

jdk8을 받는다고 가정했을 때, 여러 과정을 거치는데 이 모든 과정을  
`choco install jdk8 -y` 한 줄로 해결할 수 있다. 업데이트도 동일

<br>
<br>

### 설치

- **cmd.exe**

cmd.exe를 관리자 권한으로 실행한 다음 다음을 입력

`@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`

- **powerShell.exe**

마찬가지로 관리자 권한으로 실행한 다음 입력

`Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`

<br>
<br>

### 패키지 처리

<br>

- **검색**

해당 링크에서 설치 가능한 프로그램을 확인한다

`https://chocolatey.org/packages`

명령어로 수행할 경우 `choco search 패키지명`

<br>

- **설치**

`choco install 패키지명`

스크립트 실행 생략은 `-y` 옵션을 주면 된다.

<br>

- **설치된 패키지 확인**

`choco list --localonly`

<br>

- **업데이트**

`choco upgrade 패키지명`

패키지명에 `chocolatey`를 입력하면 프로그램 자체 업그레이드도 가능하다.

<br>

- **삭제**

`choco uninstall 패키지명`

<br>
<br>

_chocolatey 사용에 있어 기본 설치 경로는 C드라이브이다. 용량 확인은 필수._

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

https://kutar37.tistory.com/entry/chocolatey-%EC%9C%88%EB%8F%84%EC%9A%B0-%ED%8C%A8%ED%82%A4%EC%A7%80%EB%A7%A4%EB%8B%88%EC%A0%80
