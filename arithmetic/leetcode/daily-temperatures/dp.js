/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const final = new Array(T.length).fill(0);
  // 最后一个是 0, 从倒数第二个开始
  for (let i = T.length - 2; i >= 0; i--) {
    if (T[i + 1] > T[i]) {
      final[i] = 1;
      continue;
    }
    if (final[i + 1] <= 0) {
      continue;
    }
    let k = 1;
    while (final[k + i] > 0 && T[k + i] <= T[i]) {
      k = final[k + i] + k;
    }
    if (T[k + i] > T[i]) {
      final[i] = k;
    }
  }
  return final;
};

const testData = [73, 74, 75, 71, 69, 72, 76, 73];
const testData2 = [89,62,70,58,47,47,46,76,100,70];
const testData3 = [55,38,53,81,61,93,97,32,43,78];
const testData4 = [34,80,80,34,34,80,80,80,80,34];

const result = dailyTemperatures(testData);
const result2 = dailyTemperatures(testData2);
const result3 = dailyTemperatures(testData3);
const result4 = dailyTemperatures(testData4);
console.log(result4);
