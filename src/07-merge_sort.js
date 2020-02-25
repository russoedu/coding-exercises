class MergeSort {
  static sort(input, start = 0, end = input.length - 1) {
    let mid = Math.floor((start + end) / 2);
    console.log(
      `start: ${start} (${input[start]}), end: ${end} (${
        input[end]
      }) [ ${input} ]`
    );

    if (start < end) {
      MergeSort.sort(input, start, mid);
      MergeSort.sort(input, mid + 1, end);
    }

    let i = 0;
    let first = start;
    let last = mid + 1;

    let tmp = new Array(end - start + 1);

    while (first <= mid && last <= end) {
      tmp[i++] = input[first] < input[last] ? input[first++] : input[last++];
    }
    while (first <= mid) {
      tmp[i++] = input[first++];
    }
    while (last <= end) {
      tmp[i++] = input[last++];
    }
    i = 0;
    while (start <= end) {
      input[start++] = tmp[i++];
    }
  }
}

const ar = [5, 8, 1, 9, 2, 0, 3, 7, 6, 4, 10];
MergeSort.sort(ar);
console.log(ar);
