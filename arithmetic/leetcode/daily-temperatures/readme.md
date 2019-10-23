# 每日温度

## 题目

array 中等

根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/daily-temperatures
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


## 思路

### 1. 暴力初解

遍历原始数组，每一个元素寻找之后元素是否有一个大于自己，如果有返回下标，如果没有返回0。

```javascript
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let finList = [];
  for(let i = 0; i < T.length; i++) {
    // 查找之后的元素是否有大于自己的, 需要 +1 来获取真正的相对坐标。
    const ind = T.slice(i + 1, T.length).findIndex(item => item > T[i]) + 1;
    finList.push(ind > -1 ? ind : 0);
  }
  return finList;
};
```

结果正确，但是执行时间 4690ms 内存76.4MB 属于最后 8%;


在此基础上优化一哈。

```javascript
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  return T.map((item, i) => {
    const ind = T.slice(i + 1, T.length).findIndex(item2 => item2 > item) + 1;
    return ind > 0 ? ind : 0;
  });
};
```

3080ms 13.10%,  54.1MB 8.33%



