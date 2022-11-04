function findMaxCount(str) {
  let map = {}
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1
    } else {
      map[str[i]]++
    }
  }
  let max = 0
  let maxChar = ''
  for (let key in map) {
    if (map[key] > max) {
      max = map[key]
      maxChar = key
    }
  }

  return [max, maxChar]
}

const str = 'abbbcdeeeefgh'
const res = findMaxCount(str)
console.log(`出现最多次数的字符：${res[1]}, ${res[0]}次`)
