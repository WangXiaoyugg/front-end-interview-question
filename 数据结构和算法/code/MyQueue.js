/**
 * 解题思路
 * 一个作为存储栈，一个作为辅助栈
 */
class MyQueue {
  constructor() {
    this.stack = [] // 存储栈
    this.helpStack = [] // 辅助栈
  }

  push(el) {
    while (this.stack.length !== 0) {
      this.helpStack.push(this.stack.pop())
    }
    this.helpStack.push(el)
    while (this.helpStack.length !== 0) {
      this.stack.push(this.helpStack.pop())
    }
  }

  // 删除队尾元素
  pop() {
    return this.stack.pop()
  }

  // 返回队头元素
  peek() {
    return this.stack[0]
  }
  isEmpty() {
    return this.stack.length === 0
  }
}
