## javascript

<br>

[Sort](#Sort)

[Combinations](#Combinations)

[Permutations](#Permutations)

[LRU](#LRU)

[Dijkstra](#Dijkstra)

[Heap](#Heap)

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
<br>

---

<br>
<br>

### Combinations

조합

1. return, Array set

```js
const combinations = (arr, num) => {
	if (num === 1) return arr.map((e) => [e]);

	const result = [];

	arr.forEach((fix, idx, ori) => {
		const rest = ori.slice(idx + 1);
		const comb = combinations(rest, num - 1);
		const attach = comb.map((e) => [fix, ...e]);
		result.push(...attach);
	});

	return result;
};
```

2. return, String Set

```js
const c = (arr, n) => {
	const l = arr.length;
	if (n === 0 || n === 0) return [""];
	if (l === n) return [arr.join("")];

	const next = arr.slice(1);
	return [...c(next, n - 1).map((v) => `${arr[0]}` + v), ...c(next, n)];
};
```

<br>
<br>

---

<br>
<br>

### Permutations

순열

```js
const permutations = (arr, num) => {
	if (num === 1) return arr.map((e) => [e]);
	const result = [];

	arr.forEach((fix, idx, ori) => {
		const rest = [...ori.slice(0, idx), ...ori.slice(idx + 1)];
		const permu = permutations(rest, num - 1);
		const attach = permu.map((e) => [fix, ...e]);
		result.push(...attach);
	});

	return result;
};
```

<br>
<br>

---

<br>
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
<br>

---

<br>
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

<br>
<br>

---

<br>
<br>

### Heap

트리 기반 자료구조  
Max Heap, Min Heap으로 구분

- peek `O(1)`
- insert `O(logn)`
- delete `O(logn)`

<br>

사용처: OS 우선순위 기반 작업을 스케줄링하는 데 쓰임둥

<br>

**Min Heap**

```js
class Heap {
	constructor() {
		this.heap = [];
	}

	getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;
	getRightChildIdx = (parentIdx) => parentIdx * 2 + 2;
	getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);

	peak = () => this.heap[0];

	insert = (key, val) => {
		const node = { key, val };
		this.heap.push(node);
		this.heapifyUp();
	};

	heapifyUp = () => {
		let idx = this.heap.length - 1;
		const lastInsertedNode = this.heap[idx];

		while (idx > 0) {
			const parentIdx = this.getParentIdx(idx);

			if (this.heap[parentIdx].key > lastInsertedNode.key) {
				this.heap[idx] = this.heap[parentIdx];
				idx = parentIdx;
			} else {
				break;
			}
		}

		this.heap[idx] = lastInsertedNode;
	};

	remove = () => {
		const cnt = this.heap.length;
		const rootNode = this.heap[0];

		if (cnt <= 0) return undefined;
		if (cnt === 1) this.heap = [];
		else {
			this.heap[0] = this.heap.pop();
			this.heapifyDown();
		}

		return rootNode;
	};

	heapifyDown = () => {
		let idx = 0;
		const cnt = this.heap.length;
		const rootNode = this.heap[idx];

		while (this.getLeftChildIdx(idx) < cnt) {
			const leftChildIdx = this.getLeftChildIdx(idx);
			const rightChildIdx = this.getRightChildIdx(idx);

			const smallerChildIdx =
				rightChildIdx < cnt &&
				this.heap[rightChildIdx].key < this.heap[leftChildIdx].key
					? rightChildIdx
					: leftChildIdx;

			if (this.heap[smallerChildIdx].key <= rootNode.key) {
				this.heap[idx] = this.heap[smallerChildIdx];
				idx = smallerChildIdx;
			} else break;
		}

		this.heap[idx] = rootNode;
	};
}
```

<br>

구현된 Heap을 이용해 PQ도 구할 수 있다.

<br>

```js
class PQ extends Heap {
	constructor() {
		super();
	}

	enqueue = (priority, val) => this.insert(priority, val);
	dequeue = () => this.remove();
	isEmpty = () => this.heap.length <= 0;
}
```
