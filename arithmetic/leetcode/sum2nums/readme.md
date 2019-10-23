# 两数之和

### 题目

array  简单

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 思路

1. 最简单的解法就是使用2个循环遍历，时间复杂度 O(n2)。
2. 进阶的解法是利用 hashMap （在js中使用数组或对象都可以，数组最佳）直接判断内层循环的数字是否存在，时间复杂度 O(n)


### 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = [];
    for (let i=0; i<nums.length; i++) {
        if (temp[target - nums[i]] !== undefined) {
            return [temp[target -nums[i]], i]
        }
        temp[nums[i]] = i;
    }
};
```
