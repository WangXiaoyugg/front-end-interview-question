/**
 * 归并排序
 * 把数组先剁两半， 然后各自排序
 * 不断递归这个过程，最后把两大半数组排序，
 * 其复杂度为O(nlogn)
 */

function merge(left, right) {
  let result = []
  let i = 0,
    j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  if (i < left.length) {
    result.push(...left.slice(i))
  }
  if (j < right.length) {
    result.push(...right.slice(j))
  }

  return result
}

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  let mid = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, mid))
  let right = mergeSort(array.slice(mid))
  return merge(left, right)
}
const arr = [5, 6, 3, 1, 8, 7, 2, 4]

const res = mergeSort(arr)
console.log(res)
