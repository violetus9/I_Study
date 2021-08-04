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

- Insertion Sort

  ```js

  ```
