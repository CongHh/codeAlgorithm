/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */
var CQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

CQueue.prototype.appendTail = function(value) {
  this.inStack.push(value);
};

CQueue.prototype.deleteHead = function() {
  if (!this.outStack.length) {
      if (!this.inStack.length) {
          return -1;
      }
      this.in2out();
  }
  return this.outStack.pop();
};

CQueue.prototype.in2out = function() {
  while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
  }
};

