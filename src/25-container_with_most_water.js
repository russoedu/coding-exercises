/**
 * @param {number[]} points
 * @return {number}
 */
function maxArea(height) {
    let result = 0
    let left = 0
    let right = height.length - 1
    
    while (left !== right) {
      const minHeight = Math.min(height[left], height[right])
      result = Math.max(result, (right - left) * minHeight)
      if (height[left] > height[right]) {
        right -= 1
      } else {
        left += 1
      }
    }
    return result
};

/*
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/
const points = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(points))
