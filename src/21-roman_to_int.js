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
  const conv = new Map()
  conv.set('M', 1000),
  conv.set('CM', 900)
  conv.set('D', 500)
  conv.set('CD', 400)
  conv.set('C', 100)
  conv.set('XC', 90)
  conv.set('L', 50)
  conv.set('XL', 40)
  conv.set('X', 10)
  conv.set('IX', 9)
  conv.set('V', 5)
  conv.set('IV', 4)
  conv.set('I', 1)

  let num = 0
  let i = 0

  while(i < roman.length) {
    const double = roman[i] + roman[i + 1]
    const single = roman[i]
    if (conv.has(roman[i] + roman[i + 1])) {
      num += conv.get(roman[i] + roman[i + 1])
      i += 2
    } else {
      num += conv.get(roman[i])
      i += 1
    }
  }
  console.log(num)
  return num
};

const roman = 'MCMXXXVI'
romanToInt(roman)
