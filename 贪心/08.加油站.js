/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
 * 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
 * 给定两个整数数组 gas 和 cost ，如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0, curSum = 0, totalSum = 0
  for (let i = 0; i < gas.length; i++) {
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]
    if(curSum < 0) {
      start = i+ 1
      curSum = 0
    }
  }
  if(totalSum < 0) return -1
  return start
};