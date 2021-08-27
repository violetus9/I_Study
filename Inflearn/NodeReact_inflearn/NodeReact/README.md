# 따라하며 배우는 노드, 리액트 시리즈 - 기본 강의

# 오류 기록   
###### 에러 입력할 때 ctrl+f 로 검색 되게끔 에러메세지 키워드 써주기
***
## npm cmdlet
###### 깃배시에서 npm실행할 때 오류가 출력됐음

<img src="./img/error_node_path.PNG" width="70%" height="auto" title="error" alt="errorNodePath"></img>    
경로문제 >> 환경변수에 경로를 추가하자!    
***

## db서버 연결문제
###### MongooseServerSelectionError: Could not connect to any servers in your MongoDster. One common reason is that you're trying to access the database from an 't whitelisted. Make sure your current IP address is on your Atlas cluster's t: https://docs.atlas.mongodb.com/security-whitelist/   
카페로 와서 했더니 ip주소가 바뀜! >> 집에서 하든가 whitelist라는거에 지금 환경을 신뢰할 수 있는 접속으로 인식하게 해야함
***