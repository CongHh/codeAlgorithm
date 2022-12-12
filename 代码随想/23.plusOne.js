/** */
var plusOne = function(digits) {
  const n = digits.length;
  for (let i = n - 1; i >= 0; --i) {
      if (digits[i] !== 9) {
          ++digits[i];
          for (let j = i + 1; j < n; ++j) {
              digits[j] = 0;
          }
          return digits;
      }
  }

  // digits 中所有的元素均为 9
  const ans = new Array(n + 1).fill(0);
  ans[0] = 1;
  return ans;
};

// let arr = [1,2,9,3,3,9,9]
// console.log(plusOne(arr));

function foo() {
  console.log(new.target,"...");
}

const a = new foo()
console.log(a);