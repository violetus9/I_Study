// queue test

/******************* splice ********************/
const init1 = new Array(100000).fill(0);
const startSpl = new Date().getTime();
for (let i = 0; i < init1.length; i++) {
	init1.splice(0, 1);
}
const endSpl = new Date().getTime();
console.log(`splice : ${endSpl - startSpl} ms`);

/******************* shift ********************/
const init2 = new Array(100000).fill(0);
const startSft = new Date().getTime();
for (let i = 0; i < init2.length; i++) {
	init2.shift();
}
const endSft = new Date().getTime();
console.log(`shift : ${endSft - startSft} ms`);

/******************* Qclass ********************/
class Node {
	constructor(elem) {
		this.elem = elem;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	push(elem) {
		const node = new Node(elem);
		if (this.head === null) {
			this.head = node;
			this.head.next = this.tail;
		} else {
			this.tail.next = node;
		}

		this.tail = node;
		this.size += 1;
	}

	length() {
		return this.size;
	}

	popLeft() {
		const popped = this.head;
		this.head = this.head.next;
		this.size -= 1;
		return popped;
	}

	print() {
		let current = this.head;
		while (current) {
			console.log(current.elem);
			current = current.next;
		}
	}
}

const init3 = new Queue();
for (let i = 0; i < 100000; i++) {
	init3.push(0);
}
const startQcl = new Date().getTime();
for (let i = 0; i < init3.length; i++) {
	init3.popLeft();
}
const endQcl = new Date().getTime();
console.log(`Qclass : ${endQcl - startQcl} ms`);
