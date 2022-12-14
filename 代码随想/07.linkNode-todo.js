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
  this._head = node
  this._size++
  if(!this._tail) this._tail = node
}
myLinkedList.prototype.addAtTail = function(val) {
  const node = new LinkNode(val, null)
  this._size ++
  if(this._tail) {
    this._tail.next = node
    this._tail = node
    return
  }
  this._tail = node
  this._head = node
}
myLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this._size) return
  if(index <=0) {
    this.addAtHead(val)
    return
  }
  if(index === this._size) {
    this.addAtTail(val)
    return
  }
  const node = this.getNode(index - 1)
  node.next = new LinkNode(val, node.next)
  this._size ++
}

myLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this._size) return
  if(index === 0) {
    this._head = this._head.next
    // 如果删除的正好是尾节点
    if(index === this._size -1) {
      this._tail = this._head
    }
    this._size --
    return
  }

  const node = this.getNode(index - 1)
  node.next = node.next.next
  if(idnex === this._size -1) {
    this._tail = node
  }
  this._size --
}