function getLastDigit(num) {
  const unit = num % 10
  num = (num - unit) / 10
  return {
    num,
    unit
  }
}
/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let response = 0
  // let i = 0
  while(Math.abs(x) > 0) {
    let lastDigit = getLastDigit(x)
    response = (response * 10) + lastDigit.unit
    x = lastDigit.num
  }
  if (response > 0 && response > 2 ** 31 - 1 || response < 0 && Math.abs(response) > 2 ** 31) {
    response = 0
  }
  console.log(response)  
  return response
};

reverse(-123)
