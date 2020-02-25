// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// initial idea
// for - each possible word (two loops) from one side and from the other at the same time
// put in a hash and compare if there is a match
//  get the bigger size match

/**
 * @param {string} s
 * @param {number} left
 * @param {number} right
 */
// cbbc
// L  R
function expandAroundCenter(word, left, right) {
  let L = left
  let R = right
  while (L >= 0 && R < word.length && word[L] === word[R]) {
      L--;
      R++;
  }
  // console.log('R', R, 'L', L)
  return R - L - 1
}

/**
 * @param {string} word
 * @return {string}
 */
var longestPalindrome = function(word) {
  if (word === null || word === '') {
    return ''
  }
  let start = 0
  let end = 0
  
  for (let i = 0; i < word.length; i += 1) {
    console.log('i', i, '-----------------')
    let len1 = expandAroundCenter(word, i, i)
    let len2 = expandAroundCenter(word, i, i + 1)
    console.log(len1, len2)
    let len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }
  return word.substring(start, end + 1)
};

const word = "cbbd"
console.log(longestPalindrome(word))
