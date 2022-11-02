function isValid(string) {
  let stack = []
  let length = string.length
  // 有效括号的长度一定是偶数
  if (length % 2 !== 0) return false
  let map = new Map([
    ['(', ')'], // 键使用左括号，对应值为右括号
    ['{', '}'],
    ['[', ']'],
  ])

  for (let i = 0; i < length; i++) {
    if (map.has(string[i])) {
      stack.push(string[i]) // 左括号推入栈
    } else {
      // 右括号
      if (stack.length === 0) {
        return false
      } else {
        if (map.get(stack.pop()) !== string[i]) {
          // 弹出栈顶元素不能与该元素匹配
          return false
        }
      }
    }
  }

  return stack.length === 0
}
console.log(isValid(`()`))
console.log(isValid(`()[]{}`))
console.log(isValid(`(]`))
console.log(isValid(`([)]`))
console.log(isValid(`{[]}`))
