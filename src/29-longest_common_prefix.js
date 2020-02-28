/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs === null || typeof strs === 'undefined' || strs.length === 0 ) {
    return ''
  } 
  strs.sort()
  const a1 = strs[0]
  const a2 = strs[strs.length - 1]
  const L = a1.length
  let i = 0

  while(i < L && a1[i] === a2[i]) {
    i++
  }
  return a1.substring(0, i)
};

const inputA = ['flower','flow','flight']
// OutputA: "fl"
const inputB = ['dog', 'dog']
// OutputB: ""

console.log(longestCommonPrefix(inputA))
console.log(longestCommonPrefix(inputB))

