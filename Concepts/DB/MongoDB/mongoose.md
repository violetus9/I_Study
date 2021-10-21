## mongoose

MongoDB ODM 중 가장 유명한 라이브러리.

- DB 연결, 스키마 정의, 스키마 > 모델 변환, 모델을 이용한 데이터 관리
- promise와 callback 사용 가능

_ODM: Object Document Mapping. 객체와 문서를 일대일로 매칭한다. MongoDB 상의 데이터를 Nodejs와 Javascript 객체로 사용할 수 있게 한다는 것._

<br>
<br>

### 연결

**설치**

`npm install mongoose`  
_(글로벌 설치해도 큰 상관은 없다.)_

**연결**

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/DBNAME", { useNewUrlParser });
```

- DBNAME이란 DB와 연결한다.
  _만약 DBNAME이란 DB가 없다면 이를 자동으로 생성해준다._

- 주의할 것은 여러 DB에 연결을 원하는 경우 이 방법으론 해결할 수 없다. 이 `connect` 메서드는 기존의 연결을 갱신한다는 느낌으로, 새로운 입력이 들어오면 그 입력으로 연결하게된다.

- 여러 DB를 연결하고 싶다면 `.createConnection()` 메서드를 사용토록 한다.

  ```js
  const mongoose = require("mongoose");
  const con1 = mongoose.createConnection("mongodb://localhost/db1");
  const con2 = mongoose.createConnection("mongodb://localhost/db2");
  ```

  _이런 느낌~_

- mongoose 5 버전부터는 `useNewUrlParser` 옵션을 지정해 주어야 경고 메세지가 출력되지 않는다.

<br>

### Model 정의

mogdoDB는 데이터의 저장에 document라는 기본 단위를 사용한다. 이는 mongoose에서 제공하는 Schema 인터페이스를 통해 생성할 수 있다.  
_(Scheme와 Schema는 엄연히 다름)_

```js
const Schema = mongoose.Schema,
	ObjectId = Schema.ObjecId;
const ArticleSchema = new Schema({
	author: ObjectId,
	title: String,
	body: String,
	date: Date,
});

// 위에 정의된 Schema를 이렇게 접근한다.
const ArticleModel = mongoose.model("Article", ArticleScheme);
```

<br>

### Model 사용

Model 사용에 있어 생성한 Model의 인스턴스를 또 생성할 필요가 있다. 그리고 그 생성된 인스턴스를 통해 우리는 DB작업을 수행하게 된다.

```js
const instance = new ArticleModel();
instance.title = "hihi";
instance.save((err) => {
	// 'save'의 cb
});
instance.find({}, (err, docs) => {
	// 'find'의 cb
});
```

<br>

### 검색

document의 데이터를 검색하기위해 다음의 메서드를 활용한다.

`find()`, `findOne()`, `findById()`

해당 메서드들은 Model의 인스턴스에서 실행된다.

_검색 구현에 있어선 직접 공식 문서를 참조하는 편이 좋음^^_

<br>

### document 추가

새로운 document를 저장하는 방법이다.

Model을 생성하며 title, body field의 값을 먼저 채우고 article.date와 같은 객체 멤버에 접근하는 방법을 통해 날짜를 부여한다.

최종적으로 저장하기 위해 `.save()` 메서드를 사용하면 된다.

```js
const article = new ArticleModel({ title: "Tilte", body: "Contents" });
article.date = new Date();
article.save((err) => {
	if (err) return handleError(err);
	// save() 성공 후 수행 할 내용
});
```

<br>

### document 삭제

`.remove()` 메서드를 사용한다.

추가적으로 mongoDB 3.2 버전부터 `deleteOne`, `deleteMany` 메서드가 추가되었으니 이 두 메서드를 적극 사용하는 것을 권장!

```js
ArticleModel.remove({ title: "Title" }, (err) => {
	if (err) return handleError(err);
	// remove() 성공 후 수행 할 내용
});
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

https://mongoosejs.com/

https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174385/mongoose-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0
