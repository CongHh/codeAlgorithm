/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，
 * 该指针可以指向链表中的任何节点或空节点。
 * 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，
 * 其中每个新节点的值都设为其对应的原节点的值。
 * 新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，
 * 并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head, cachedNode = new Map()) {
  if (head === null) {
    return null;
  }
  if (!cachedNode.has(head)) {
    cachedNode.set(head, { val: head.val })
    Object.assign(cachedNode.get(head),
      {
        next: copyRandomList(head.next, cachedNode),
        random: copyRandomList(head.random, cachedNode)
      })
  }
  return cachedNode.get(head);
}

var copyRandomList1 = function(head) {
  if(head === null) return null
  for(let node = head;node !== null; node = node.next.next) {
    const nodeNew = new Node(node.val, node.next, null)
    node.next = nodeNew
  }
  for(let node = head;node !== null; node = node.next.next) {
    const nodeNew = node.next
    nodeNew.random = (node.random !== null) ? node.random.next : null
  }
  const headNew = head.next
  for(let node = head;node !== null;node = node.next) {
    const nodeNew = node.next
    node.next = node.next.next
    nodeNew.next = (nodeNew.next !== null) ? nodeNew.next.next : null
  }
  return headNew
}