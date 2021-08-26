## Web Architecture

웹 구동의 기본 구조? 정도로 보자.  
그리고 개론수준의 내용들이니 심도있게 알려면 섹션 하나 파서 공부해ㅡㅡ

<br>

1. **DNS**

Domain Name System.

`www를 가능케 해주는 중요한 요소로 기본적인 DNS는 domain 이름과 IP 주소를 매핑하는 key/value lookup을 제공한다.` 이는 클라이언트가 올바른 서버로 요청을 보낼 수 있는데 꼭 필요하다.

물론 이 외의 내용도 많지만.. 차차 배워보자구

<br>

2. **Load Balancer**

- horizontal scaling & vertical scaling

  우선 horizontal | vertical application scaling에 대해 볼 거다.

  간단히 말하자면 horizontal scaling은 resource pool에 기기를 추가하는 것이고 vertical scaling은 기존 기기의 사양을 높이는 것이다(뭐.. CPU, RAM 등의 것들..).

  <br>

  웹 개발에선 horizontal scaling을 선호한다고 한다. 이유인즉, 하나의 서버가 고장났다던가 네트웤 서버가 불안정하다던가를 예를 들 수 있다. 이를 대처하기 위해서 여러대의 서버를 기용하는 것과 같은 맥락이다.

  또 하나, horizontal scaling은 각기 다른 서버에서 구동함에 다른 백엔드 서비스들(web server, DB, 등)과 커플링을 줄여준다.

  vertical한 방식으로 scale 하는 것은 한계가 있다. App이 필요로 하는 연산을 수행하기에 충분히 큰 컴퓨터를 구비한다는 것은 현실적으로 어렵기 때문이다.

  <br>

- Load Balancer

  본론으로 돌아와서 로드 밸런서라는 것은 `horizontal scaling을 가능케 해주는 소스이다.`

  load balancer는 여러 요청들을 여러 app server중 하나로 전달하며 클라이언트에 응답을 반환한다. 여기서 중요한 점은 반드시 적절한 요청 분배를 통해 하나의 서버가 과부화 되지 않도록 하는데 핵심이다.

<br>

3. **Web Application Servers**

`WAS는 클라이언트의 요청을 받아 핵심 biz 로직을 실행하며 클라이언트의 브라우저에 HTML을 돌려준다.`

이 일을 처리하는데 있어 DB, caching layers, job queues, search services, other microServices..., data/logging queues 등 다른 여러 백엔드 인프라들과 통신하게 된다.

앞서 기술했듯 여러개의 application server는 load balancer에 연결되어 있을 것이다.

application server를 구현하기 위해선 특정 언어와 그 언어에 맞는 web MVC 프레임워크(Express같은)가 필요하다.

<br>

4. **DB servers**

요즘의 web app은 하나 이상의 DB를 통해 정보를 저장한다.  
DB는 데이터 구조를 정의하며, 삽입하고 검색, 업데이트, 삭제등의 기본적인 CRUD 기능을 수행할 수 있다.

또 대부분의 경우 WAS는 DB와 직접 통신하며 각각의 백엔드 서비스는 독립된 각각의 DB를 가지고 있을 것이다.

<br>

- SQL

  Structured Query Language, 관계형 데이터 셋을 검색하는 표준 방법을 제시한다.

  table에 정보를 저장하며 common Ids를 통해 서로 연결된다.

  만약, 거대한 규모의 데이터를 다루기 위해서라면 NoSQL이란 DB 종류도 있다. 하지만 NoSQL DB를 위한 인터페이스조차 SQL로 구성되기에 SQL에대한 개념 이해는 필수!

<br>

5. **Caching Service**

`O(1) 시간 안에 찾아볼 수 있는 key/value data store를 제공한다.`

대부분 app은 이 서비스를 비용이 비싼 연산의 결과를 저장하는데 활용한다. 필요할 때 다시 연산하지 않고 바로 불러올 수 있도록.

쉽게 예를 들어보면 검색 결과를 저장해 결과들을 캐시처리 해놓는다던가 로그인시 보여질 정보나 렌더링 결과, 자동완성 등의 결과를 캐시처리 해놓는다.

많이 쓰이는 caching server 기술은 Redis와 Memcache라고 한다.

<br>

6. **Job Queue & Servers**

대개 web app은 요청에 대한 비동기적 처리를 하는데 이런 `비동기 작업을 가능하게 해주는 구조를 Job Queue라고 한다(보편적인 경우).`(물론 이 말고도 비동기 작업을 가능케 하는 여러 아키텍쳐가 있다.)

jobs가 들어가는 queue와 이 job을 수행하는 하나 이상의 job servers(workers)로 구성된다.

`job queue는 비동기적으로 실행되어야 하는 job 목록을 저장한다.` 가장 간단한 버전은 FIFO queue. 대부분의 경우는 우선순위 큐를 많이 사용한다.

초기엔 job queue만으로 충분했지만.. 이메일 발송과 같은 시간에 민감한 작업들을 처리하기 위해서 우선순위 큐가 도입됐다.

`job servers는 job을 수행한다.` job queue를 폴링하여 수행할 job이 있는 경우 queue에서 job을 꺼내 실행한다.

실제 구성에 대해선 직접 찾아보자.. 다양하기 때문.

<br>

7. **Full-text Search Service**

사용자의 텍스트 입력(query)에 대한 가장 연관성 있는 검색 기능은 아니지만, 많은 서비스가 제공하는 기능이다. 이런 기능을 가능케 해주는 기술을 'full-text search'라고 부르는데 inverted index를 활용하여 검색어를 포함하는 문서를 빠르게 검색한다.

> inverted index?  
> 검색된 키워드에 대해 키값으로 삼고 키워드를 가진 데이터의 인덱스를 밸류로 저장하는 방식

DB자체에서 직접 full-text search를 처리하기도 하지만 보통으 검색 서비스를 분리하여 inverted index를 계산, 저장하고 query interface를 제공한다.

요즘 유행하는 플랫폼은 ElasticSearch.

<br>

8. **Services**

app이 일정 수준에 도달했을 때 별도의 application으로 제공되어야 하는 서비스들이 있다.

예시로 이해하자

- 결제 서비스는 신용카드 결제를 위한 인터페이스를 제공한다.

- HTML > PDF 서비스는 HTML을 PDF로 변환시키는 간단한 인터페이스를 제공한다.

- Content 서비스는 동영상, 오디오, 이미지에 대한 metadata를 저장하며 컨텐츠를 다운로드하거나 그 이력을 조회하는 인터페이스를 제공한다.

<br>

9. **Data**

요즘 대부분의 app들은 어느 수준에 도달했을 때, 데이터 수집, 저장, 분석을 위해 data pipeline을 사용한다.

- pipeline의 3단계

  1. app이 사용자 상호작용에 관한 데이터를 firehose에 전송하고 firehose는 데이터를 즉각 처리할 수 있는 streaming interface를 제공한다.

  보통의 가공되지 않은 데이터는 변환되거나 정보가 추가되어 또 다른 firehose에 전달된다. 대표적으로 AWS의 Kinesis, Kafka는 이런 목적을 위한 기술이다.

  2. 가공되지 않은 데이터와 변환, 추가된 데이터는 cloud storage에 저장된다.  
     (AWS Kinesis는 firehose란 설정을 제공하며 이를 통해 간단하게 cloud storage (S3)에 저장이 가능하다.)

  3. 변환, 추가된 데이터는 분석을 위해 data warehouse에 올라간다.  
     회사의 규모에 따라 사용하는 기술이 다른데 스타트업은 주로 AWS Redshift, 그 이상급은 Oracle이나 다른 warehouse 기술을 사용하며 충분히 큰 data set의 경우는 분석을 위해 Hadoop과 같은 NoSQL MapReduce 기술을 사용한다.

<br>

10. **Cloud storage**

`인터넷 상에서 데이터를 저장하고 접근, 공유하는 간단한, Scalable한 방법이다.`

이 저장소를 통해 HTTP위에서 RESTful API를 통해 local 파일 시스템의 파일들을 저장하며 접근할 수 있다.

Amazon의 S3은 현대 가장 인기있는 cloud storage.

<br>

11. **CDN**

Content Delivery Nerwork.

`HTML, CSS, JS와 같은 정적 파일을 단일 origin server서 제공하는 것 보다 빠르게 제공하는 기술이다.`

컨텐츠 자체를 전세계에 분포된 edge 서버를 통해 분산하며 사용자들은 origin server가 아닌 edge 서버를 통해 다운로드 받는다.

어떤 web app은 CSS, JS, 이미지, 동영상과 같은 asset들을 제공하기 위해 CDN을 사용하기도 하며 어떤 app은 정적 HTML 파일을 제공하는데 사용하기도 한다.

하지만 CDN을 적극적으로 신용해서는 안되는 것이, edge 서버가 맛이 가는 경우 원활한 서비스 제공을 못할 가능성이 높다.
