class BubbleSort {
  static sort(ar) {
    console.log(`Unsorted array: [ ${ar} ]`);

    for (let i = 0; i < ar.length; i += 1) {
      for (let j = ar.length - 1; j > i; j -= 1) {
        console.log(
          `Iteration: ar[${j}]=${ar[j]}, ar[${j - 1}]=${ar[j - 1]}: [ ${ar} ]`
        );
        if (ar[j] < ar[j - 1]) {
          [ar[j - 1], ar[j]] = [ar[j], ar[j - 1]];
        }
      }
    }
    console.log(`  Sorted Array: [ ${ar} ]`);
  }
}

const ar = [5, 8, 1, 2, 0, 3, 6, 7];

BubbleSort.sort(ar);
