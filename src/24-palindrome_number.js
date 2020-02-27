/**
 * @param {number} index
 */
Number.prototype.charAt = function(index) {
  return (this % (10 ** (index + 1)) - this % (10 ** (index))) / (10 ** index)
}

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome (x) {
  if (x < 0) {
    return false
  }

  const length = Math.ceil(Math.log10(x + 1))
  const centre = Math.floor(length / 2)

  let i = 0
  let j = length - 1
  while (i <= centre) {
    if (x.charAt(i) !== x.charAt(j)) {
      return false
    }
    i++
    j--
  }
  return true
};

const num = -3234554323
console.log(isPalindrome(num))
// console.log(num.charAt(4))

