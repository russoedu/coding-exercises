/*
const word = 'PAYPALISHIRING'
              01234567890123
         0 1 2 3 4 5 6 7 8 9 
       0 0     6     12    18
       1 1   5 7   1113  17
       2 2 4   8 10  1416
       3 3     9     15
Characters in row 0 are located at indexes k (2 * numRows - 2) - for numRows = 4: 0, 6, 12, 18...
Characters in row rows - 1 (last row) are located at indexes k ((numRows - 1) + (2 * numRows - 2)) - for numRows = 4: 3, 9, 15
Characters in inner row are located at indexes k (2 * numRows - 2) + i and (k + 1) (2 * numRows - 2) - i
*/

function convert(word, numRows) {
  if (numRows === 1) {
    return word
  }

  let ret = '';
  const cycleLen = 2 * numRows - 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < word.length; j += cycleLen) {
      // the "collumns"
      ret += word[j + i];
      // the "diagonals"
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < word.length)
          ret += word[j + cycleLen - i];
    }
  }
  console.log(ret)
  return ret
}
const word = 'PAYPALISHIRING'
const rows = 4
convert(word, rows)
