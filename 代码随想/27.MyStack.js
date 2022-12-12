/*** */

var MyStack = function() {
  this.queue = []
}

MyStack.prototype.push = function(x) {
  this.queue.push(x)
}

MyStack.prototype.pop = function() {
  let size = this.queue.length
  while(size-- > 1) {
    this.queue.push(this.queue.shift())
  }
  return this.queue.shift()
}

MyStack.prototype.top = function() {
  let x = this.pop()
  this.queue.push(x)
  return x
}
MyStack.prototype.empty = function() {
  return !this.queue.empty()
}

