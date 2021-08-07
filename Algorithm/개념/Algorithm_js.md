## javascript

<br>

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
