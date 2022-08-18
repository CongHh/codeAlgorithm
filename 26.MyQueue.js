/*** */

var MyQueue = function() {
  this.stackIn = []
  this.stackOut = []
}

MyQueue.prototype.push = function(x) {
  this.stackIn.push(x)
}

MyQueue.prototype.pop = function() {
  const size = this.stackOut.length
  if(size) {
    return this.stackOut.pop()
  }
  while(this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop())
  }
  return this.stackOut.pop()
}

MyQueue.prototype.peek = function() {
  const x = this.pop()
  this.stackOut.push(x)
  return x
}

MyQueue.prototype.empty = function() {
  return !this.stackIn.length && !this.stackOut.length
}