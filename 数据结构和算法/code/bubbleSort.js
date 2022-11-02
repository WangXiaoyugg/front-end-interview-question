const arr = [1, 2, 3, 4, 7, 5, 8, 6, 10, 9]

function bubbleSort(arr) {
  let l = arr.length
  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = aux
      }
    }
  }
  return arr
}
const result = bubbleSort(arr)
console.log(result)
