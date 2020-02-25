/**
 *
 * @param {number} num
 */
function isPrime(num) {
  const sqrt = Math.floor(Math.sqrt(num) + 1);

  if (num === 0 || num === 1) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  if (num % 2 === 0 || num === 1) {
    return false;
  }
  for (let i = 3; i < sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const num = 127;
console.log(isPrime(num));
