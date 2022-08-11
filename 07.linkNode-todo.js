class LinkNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}
/**
 * 单链表
 * 头尾节点和节点数量
 */
var myLinkedList = function() {
  this._size = 0
  this._tail = null
  this._head = null
}
myLinkedList.prototype.getNode = function(index) {
  if(index < 0 || index >= this._size) return null
  let cur = new LinkNode(0, this._head)
  while(index >= 0) {
    cur = cur.next
    index--
  }
  return cur
}
myLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this._size) return -1
  return this.getNode(index).val
}
myLinkedList.prototype.addAtHead = function (val) {
  let node = new LinkNode(val, this._head)
  
}