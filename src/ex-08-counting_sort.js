class BucketSort {
  /**
   *
   * @param {array} input
   */
  static sort(input) {
    const bucket = [];
    const output = [];

    // Fill the bucket
    input.forEach(value => {
      bucket[value] =
        typeof bucket[value] === "undefined" ? 1 : bucket[value] + 1;
    });

    // Get the count from the bucket and put in the output
    bucket.forEach((value, index) => {
      for (let i = 0; i < value; i += 1) {
        output.push(index);
      }
    });
    return output;
  }
}

const ar = [5, 8, 1, 9, 2, 0, 3, 7, 6, 4, 10, 3, 5, 25];
const sorted = BucketSort.sort(ar);
console.log(ar);
console.log(sorted);
