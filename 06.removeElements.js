/***
 * 
 */
var mergeTwoLists = function (l1, l2) {
  console.log(l1, l2)
};

function ListNode(val,next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
ListNode.prototype.set = function (node) {
  this.next = node
}


let setListNode = function (arr) {
  if (arr.length > 0) {
    let ln = null
    // let res = null;
    while (arr.length > 0) {
      let temp = new ListNode(arr.pop())
      temp.set(ln)
      ln = temp
    }
    return ln
  }
  return false

}
var removeElements = function (head, val) {
  const ret = new ListNode(0, temp)
  let cur = ret
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      continue
    }
    cur = cur.next
  }
  return ret.next
}
// var removeElements = function(head, val) {
//   const dummyHead = new ListNode(0);
//   dummyHead.next = head;
//   let temp = dummyHead;
//   while (temp.next !== null) {
//       if (temp.next.val == val) {
//           temp.next = temp.next.next;
//       } else {
//           temp = temp.next;
//       }
//   }
//   return dummyHead.next;
// };

let head = [1, 2, 6, 3, 4, 5, 6], val = 6
let e = removeElements(head, val)
console.log(e);