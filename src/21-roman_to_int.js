/*
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 MCMXXXVI
 1936
*/
/**
 * @param {string} roman
 * @return {number}
 */
function romanToInt(roman) {
  const conv = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let num = 0
  let i = 0

  while(i < roman.length) {
    const double = roman[i] + roman[i + 1]
    const single = roman[i]
    if (typeof conv[double] !== 'undefined') {
      num += conv[double]
      i += 2
    } else if (typeof conv[single] !== 'undefined') {
      num += conv[single]
      i += 1
    } else {
      throw new Error('Not a roman number')
    }
  }
  console.log(num)
  return num
};

const roman = 'MCMXXXVI'
romanToInt(roman)
