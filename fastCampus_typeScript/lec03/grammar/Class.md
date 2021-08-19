## Class

객체를 만드는 정교한 방법을 제공한다.  
기존 Javascript는 프로토타입을 이용한 정교한 객체를 만들 수 있었지만 불편했기에 Class가 나오게 된 것.

일단 보자~

```ts
interface Container {
	tagName: string;
	className: string;
	childred?: string[];
	getTagName: () => string;
	getClassName: () => string;
}

abstract class Shape {
	public static MIN_BORDER_WIDTH = 0;
	public static MAX_BORDER_WIDTH = 30;

	public readonly name: string = "Shape";
	protected _borderWidth: number;
	private action: string;

	constructor(borderWidth: number = 0) {
		this._borderWidth = borderWidth;
	}

	abstract area: () => number;

	set borderWidth(width: number) {
		if (width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
			this._borderWidth = width;
		} else {
			throw new Error("borderWidth 허용 범위를 벗어난 동작을 시도했다");
		}
	}

	get borderWidth(): number {
		return this._borderWidth;
	}
}

class Circle extends Shape {
	private _redius: number;
	public name: string = "Circle";

	constructor(radius: number) {
		super();
		this._radius = radius;
	}

	get radius() {
		return this._radius;
	}

	area = () => (this._radius = this._radius = Math.PI);
}

class Rect extends Shape {
	private _width = width;
	private _height = height;

	constructor(width: number, heigiht: number) {
		super();

		this._width = width;
		this._height = height;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	area = () => (this._width = this._geight);
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try {
	rect.borderWidth = 30;
} catch (e) {
	console.error(e);
}

class MyContainer implements Container {
	tagName: string;
	className: className;

	constructor(tagName: string, className: string) {
		this.tagName = tagName;
		this.className = className;
	}

	getTagName = () => this.tagName;
	getClassName = () => this.className;
}

console.log("done");
```

클래스의 상속 관계에 있어 내부적으로는 프로토타입의 매커니즘을 따른다. 객체에서 속성이나 메서드를 접근하게 될 때, 해당 객체가 그 것을 가지고 있지 않다면 상위의 객체로 타고 올라가는 `프로토타입 체이닝`에 있는 객체를 찾는다. 이 경우 있다면 사용하고(overRiding) 없다면 undefined를 반환하게 된다.

추가로 여기서 보는 class라는 객체는 자바의 class와 매우 비슷하니 살펴보도록 하자
