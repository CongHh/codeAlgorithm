/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
 * 如果两个链表不存在相交节点，返回 null 。
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let visited = new Set()
  let temp = headA
  while (temp !== null) {
    visited.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp !== null) {
    if (visited.has(temp)) return temp
    temp = temp.next
  }
  return null
};

var getIntersectionNode1 = function (headA, headB) {
  if (headA === null || headB === null) return null
  let p1 = headA, p2 = headB
  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next
    p2 = p2 === null ? headA : p2.next
  }
  return p1
}