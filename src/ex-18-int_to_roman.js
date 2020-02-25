/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const roman = [
    ['', 'M', 'MM', 'MMM'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ]
  num = ('0000' + (num.toString())).substr(num.toString().length);
  console.log(num)
  let result = '';
  for (let i = 0; i < 4; i += 1) {
    const current = typeof num[i] === 'undefined' ? 0 : Number(num[i])
    console.log(current)
    result += roman[i][current];
  }

  return result;
};

const num = 9;
console.log(intToRoman(num));
