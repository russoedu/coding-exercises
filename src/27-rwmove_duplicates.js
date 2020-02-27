/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let i = 0
  while(typeof nums[i + 1] !== 'undefined') {
    console.log(`num[i]: ${nums[i]}, next: ${nums[i+1]}`)
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
    } else {
      i += 1
    }
  }
  return nums.length
};

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))
console.log(nums)
