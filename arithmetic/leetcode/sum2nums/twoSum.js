/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    if (temp[target - nums[i]] !== undefined) {
      return [temp[target - nums[i]], i];
    }
    temp[nums[i]] = i;
  }
};


