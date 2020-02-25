/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const merged = [];

  while (typeof nums1[0] !== "undefined" || typeof nums2[0] !== "undefined") {
    if (typeof nums2[0] === "undefined" || nums1[0] < nums2[0]) {
      merged.push(nums1.shift());
    } else {
      merged.push(nums2.shift());
    }
  }

  console.log(merged);
  if (merged.length % 2 !== 0) {
    return merged[Math.floor(merged.length / 2)];
  } else {
    const m = merged.length / 2;
    return (merged[m - 1] + merged[m]) / 2;
  }
}

const nums1 = [-6, 3, 7, 8, 13, 17];
const nums2 = [-2, -1, 9];

console.log(findMedianSortedArrays(nums1, nums2));
