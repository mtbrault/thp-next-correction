let fs = require('fs');

class TriHandler {
	constructor(filename) {
		this.numberList = [];
		this.count = 0;
		try {
			const list = fs.readFileSync(filename, 'utf8').split(" ");
			for (let i = 0; i < list.length; i++) {
				const value = parseFloat(list[i]);
				if (!value && value !== 0)
					return console.log("Bad args in file");
				this.numberList.push(value);
			}
		} catch (error) {
			console.log('Error during file reading');
			return;
		}
	}

	bubbleSort = () => {
		let array = this.numberList.slice(); //on slice pour copier le tableau et ne pas modifier le tableau initial
		let nbComp = 0;

		for (let i = array.length - 1; i >= 1; i--) {
			for (let j = 0; j < i; j++) {
				nbComp++;
				if (array[j + 1] < array[j]) {
					let stock = array[j + 1];
					array[j + 1] = array[j];
					array[j] = stock;
				}
			}
		}
		console.log(`Tri à bulle: ${nbComp} comparaisons`);
	}

	selectSort = () => {
		let array = this.numberList.slice();
		let min;
		let nbComp = 0;
		let stock;

		for (let i = 0; i < array.length - 1; i++) {
			min = i;
			for (let j = i + 1; j < array.length; j++) {
				if (array[j] < array[min])
					min = j;
				nbComp++;
			}
			if (min != i) {
				stock = array[min];
				array[min] = array[i];
				array[i] = stock;
			}
		}
		console.log(`Tri par sélection: ${nbComp} comparaisons`);
	}

	insertionSort = () => {
		let array = this.numberList.slice();
		let nbComp = 0;

		for (let i = 1; i < array.length; i++) {
			let x = array[i];
			let j = i;
			for (; j > 0 && array[j - 1] > x; j--) {
				nbComp++;
				array[j] = array[j - 1];
			}
			array[j] = x;
		}
		console.log(`Tri par insertion: ${nbComp} comparaisons`);
	}

	/*insertionSort = () => {
		let array = this.numberList.slice();
		let sort = [];
		let size;
		let nbComp = 0;

		sort.push(array.shift());
		while (array.length != 0) {
			size = sort.length;
			for (let i = 0; i < size; i++) {
				nbComp++;
				if (sort[i] > array[0]) {
					sort.splice(i, 0, array.shift());
					break;
				}
				else if ((i + 1) >= sort.length)
					sort.push(array.shift());
			}
		}
		console.log(`Tri par insertion: ${nbComp} comparaisons`);
	}*/

	algoQuick = (array) => {
		if (array.length <= 1) return array;
		var pivot = array[array.length - 1];
		var left = [];
		var right = [];
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] < pivot) {
				left.push(array[i])
			} else {
				right.push(array[i])
			}
			this.count++;
		}
		return [...this.algoQuick(left), pivot, ...this.algoQuick(right)];
	}

	quickSort = () => {
		let array = this.numberList.slice();
		this.algoQuick(array);

		console.log(`Tri rapide: ${this.count} comparaisons`);
	}

	/*quickSort = () => {
		let array = this.numberList.slice();

		console.log(`Tri rapide: ${this.algoQuick(array, 0, array.length - 1)} comparaisons`);
		console.log(array.toString());
	}*/
}

if (!process.argv[2]) {
	console.log('You need to select a file');
	return -1;
}

const test = new TriHandler(process.argv[2]);
test.selectSort();
test.insertionSort();
test.bubbleSort();
test.quickSort();
