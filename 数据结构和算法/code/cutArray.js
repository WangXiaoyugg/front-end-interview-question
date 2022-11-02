const testArray = [
  { name: 'mike', age: 18 },
  { name: 'garen', age: 30 },
]

function cutArray(sourceArray, target) {
  return sourceArray.filter((item) => item.name !== target)
}

const result = cutArray(testArray, 'garen')
console.log(result) // [{ name: 'mike', age: 18 }]
