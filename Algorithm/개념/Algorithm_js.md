## javascript

<br>

[Sort](#Sort)

[LRU](#LRU)

[Dijkstra](#Dijkstra)

<br>

---

<br>

### Sort

- Bubble Sort

  ```ts
  const bubbleSort = (data) => {
  	let tmp;
  	let flag;
  	for (let i = 0; i < data.length - 1; i++) {
  		flag = false;
  		tmp = 0;
  		for (let j = 0; j < data.length - i - 1; j++) {
  			if (data[j] > data[j + 1]) {
  				tmp = data[j];
  				data[j] = data[j + 1];
  				data[j + 1] = tmp;
  				flag = true;
  			}
  		}
  		if (flag === false) {
  			return data;
  		}
  	}
  	return data;
  };
  ```

<br>

- Selection Sort

  ```ts
  const selectionSort = (data) => {
  	let minNum;
  	let tmp;
  	for (let i = 0; i < data.length - 1; i++) {
  		minNum = i;
  		for (let j = i + 1; j < data.length; j++) {
  			if (data[minNum] > data[j]) {
  				minNum = j;
  			}
  		}
  		tmp = data[minNum];
  		data[minNum] = data[i];
  		data[i] = tmp;
  	}
  	return data;
  };
  ```

<br>

- Insertion Sort

  ```js
  const insertionSort = (data) => {
  	let tmp;
  	for (let i = 0; i < d.length - 1; i++) {
  		for (let j = i + 1; j >= 0; j--) {
  			if (data[j] < data[j - 1]) {
  				tmp = data[j];
  				data[j] = data[j - 1];
  				data[j - 1] = tmp;
  			}
  		}
  	}
  	return data;
  };
  ```

<br>

- **Quick Sort**

  ```ts
  const quickSort = (data) => {
  	if (data.length <= 1) {
  		return data;
  	}

  	let left = [];
  	let right = [];
  	let pivot = data[0];

  	for (let i = 1; i < data.length; i++) {
  		if (pivot > data[i]) {
  			left.push(data[i]);
  		} else {
  			right.push(data[i]);
  		}
  	}
  	return quickSort(left).concat(pivot, quickSort(right));
  };
  ```

<br>

---

<br>

### LRU

Least Recently Used

캐시 처리 알고리즘 중 하나

```js
class LRU {
	constructor(v) {
		this.size = v;
		this.map = new Map();
		this.head = new Node(0, 0);
		this.tail = new Node(0, 0);
		this.haed.next = this.tail;
		this.tail.prev = this.head;
	}

	put(key, val) {
		let node = new Node(key, val);
		this.map.set(key, node);
		this.insertFront(node);

		if (this.size < this.map.size) {
			this.removeLast();
		}
	}

	get(key) {
		if (!this.map.has(key)) return -1;
		let node = this.map.het(key);
		this.breakAndLink(node);
		this.insertFront(node);
		return node.val;
	}

	breakAndLink(node) {
		let p = node.prev;
		let n = node.next;
		p.next = n;
		n.prev = p;
		node.next = null;
		node.prev = null;
	}

	insertFront(node) {
		let h2 = this.head.next;
		this.head.next = node;
		node.prev = this.head;
		h2.prev = node;
		node.next = h2;
	}

	removeLast() {
		let node = this.tail.prev;
		this.breakAndLink(node);
		this.map.delete(node.key);
	}
}

class Node {
	constructor(key, val) {
		this.key = key;
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

// http://blo9.xyz/2020/08/10/Algorithm/lru_cache/
```

<br>

---

<br>

### Dijkstra

- **Priority Queue**

  condition: [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2]
  ]

  ```js
  function dijkstra(numOfNode, arr) {
  	const graph = Array.from({ length: numOfNode + 1 }, () => []);

  	for (let i = 0; i < arr.length; i++) {
  		let nod = arr[i][0];
  		let nod2 = arr[i][1];
  		let dist = arr[i][2];

  		graph[nod].push([nod2, dist]);
  		graph[nod2].push([nod, dist]);
  	}

  	const distFromStart = Array.from({ length: numOfNode + 1 }, () => Infinity);

  	const queue = [];
  	distFromStart[1] = 0;

  	queue.push([1, 0]);

  	while (queue.length !== 0) {
  		const qDist = queue.map((x) => x[1]);
  		const minDistIdx = qDist.indexOf(Math.min(...qDist));
  		const current = queue[minDistIdx][0];
  		const shortDistInQ = queue[minDistIdx][1];

  		queue.splice(minDistIdx, 1);

  		if (distFromStart[current] < shortDistInQ) continue;

  		for (let j = 0; j < graph[current].length; j++) {
  			const near = graph[current][j][0];
  			const distNear = graph[current][j][1] + shortDistInQ;

  			if (distFromStart[near] > distNear) {
  				distFromStart[near] = distNear;
  				queue.push([near, distNear]);
  			}
  		}
  	}

  	return distFromStart;
  }
  ```
