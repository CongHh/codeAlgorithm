/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// var reversePrint = function(head) {
//   let res = []
//   while(head) {
//     res.unshift(head.val)
//     head = head.next
//   }
//   return res
// };
// 递归
var reversePrint = function(head) {
  if(!head) return []
  let res = reversePrint(head.next)
  res.push(head.val)
  return res
};