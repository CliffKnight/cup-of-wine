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

这个思路基本差不多了，最多也就是将slice 从 i 开始 后面不用加1，但是这种小优化不会带来质变。

失误，其实可以完全不适用 slice 的。

```javascript
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  return T.map((item, i) => {
    const ind = T.findIndex((item2, ind1) => ind1 > i && item2 > item) - i; // 这里是绝对值 需要减去 i
    return ind > -1 ? ind : 0;
  });
};
```

然而： 3800ms 10%, 43MB 19%

因为findIndex其实也类似遍历，所以时间复杂度接近 O(n2)

如何才能遍历一次解决问题呢？

### 2. 尝试空间换时间

想了半天还是需要多次遍历。

### 3. 查答案

解法1：单调栈。 

其实我在2中已经很接近这个算法了，被我遗弃了。。。

单调栈意思就是栈内元素维持一定的递增或者递减。

解题思路：

1. 维持一个单调递增栈，用来存放 T 的元素索引。
2. 对比当前元素和栈顶元素的值。
3. 如果当前元素大于栈顶元素对应的 T 值，那么就找到了栈顶元素的结果，栈顶元素出栈，继续判断下一个元素。
4. 如果当前元素小于栈顶元素对应的 T 值，那么将当前元素的索引入栈。
5. 如果最后都没有找到合适的，说明不存在，默认值为0的话就不用处理了。


```javascript
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const { length } = T;
  const final = new Array(length).fill(0);
  const stack = [];
  for (let i = 0; i < length; i ++) {
    while(stack.length && T[i] > T[stack[stack.length - 1]]) {
      const sIndex = stack.pop();
      final[sIndex] = i - sIndex;
   }
    stack.push(i);
  }
  return final;
};
```

152ms 97%, 42MB 58%

结果还可以。看看能不能优化。

使用map代替for，并且不使用final. 搞不定 因为不是最后final不是在当前map就填写的。

### 3. 动态规划 DP

讲道理我是第一次听到这个说法，我果然是渣渣。


