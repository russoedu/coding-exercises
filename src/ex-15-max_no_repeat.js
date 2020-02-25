/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if (s.length <= 1) {
    return s.length;
  }
  // Begining of the window
  let start = 0;
  // end of the window
  let end = 1;
  let longest = 1;

  // Run until the window end reaches the end of the string
  while (end < s.length) {
    // define the window
    const subS = s.slice(start, end);
    // define the char to be searched
    const search = s[end];
    // look for the position of the search char in the window
    const position = subS.indexOf(search);
    // If the search was found in the window
    if (position !== -1) {
      // define a new start
      start = start + position + 1;
    }
    // Move the window
    end++;
    // Set the longest whilst the repeated search was not found
    longest = Math.max(longest, end - start);
  }
  return longest;
}

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
