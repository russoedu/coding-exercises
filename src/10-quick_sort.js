class QuickSort {
  constructor() {
    this.input = [];
    this.length = 0;
  }
  sort(ar) {
    this.input = ar;
    this.length = ar.length;
    console.log(`Unsorted array: [ ${ar} ]
         index: [ 0 1 2 3 4 5 6 7 8 9]`);
    this._quickSort(0, this.length - 1);
  }
  _quickSort(low, high) {
    let i = low;
    let j = high;
    const pivotPoint = Math.floor(low + (high - low) / 2);
    const pivot = this.input[pivotPoint];

    while (i <= j) {
      /* As shown in above image, In each iteration, we will identify a number from left side which is greater then the pivot value, and a number from right side which is less then the pivot value.
      Once search is complete, we can swap both numbers.*/
      while (this.input[i] < pivot) {
        i++;
      }
      while (this.input[j] > pivot) {
        j--;
      }
      if (i <= j) {
        // Swap
        [this.input[i], this.input[j]] = [this.input[j], this.input[i]];

        //         console.log(`low: ${low}, high: ${high}, pivotPoint: ${pivotPoint}, pivot: ${pivot}
        // i: ${i}, j: ${j}, this.input[i]: ${this.input[i]}, this.input[j]: ${this.input[j]}
        // Iterated array: [ ${this.input} ]`);
        // move index to next position on both sides
        i++;
        j--;
      }
      // calls quickSort() method recursively
      if (low < j) {
        this._quickSort(low, j);
      }
      if (i < high) {
        this._quickSort(i, high);
      }
    }
  }
}
const unsorted = [6, 5, 3, 1, 8, 7, 2, 4, 0, 12];
const qs = new QuickSort();
qs.sort(unsorted);
console.log(unsorted);
