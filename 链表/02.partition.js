/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 给你一个链表的头节点 head 和一个特定值 x ，
 * 请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let small = new ListNode(0)
  const smallHead = small
  let large = new ListNode(0)
  const largeHead = large
  while(head !== null) {
    if(head.val < x) {
      small.next = head
      small = small.next
    } else {
      large.next = head
      large =  large.next
    }
    head = head.next
  }
  large.next = null
  small.next = largeHead.next
  return smallHead.next
};