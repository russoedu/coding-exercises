// How do you find the largest and smallest number in an unsorted integer array?

/**
 *
 * @param {array} ar
 */
function findMinMax(ar) {
  let min = Infinity;
  let max = -Infinity;

  ar.forEach((item, index) => {
    min = Math.min(item, min);
    max = Math.max(item, max);
  });

  return {
    min,
    max
  };
}
const ar = [325, 215, 56, 98, 13, 7, 245, 326, 708, 45, 1];

console.log(findMinMax(ar));
