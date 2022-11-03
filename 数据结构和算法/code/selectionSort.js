/**
 * 首先在未排序序列中找到最小（大）元素，
 * 存放到排序序列的起始位置，
 * 然后，再从剩余未排序元素中继续寻找最小（大）元素，
 * 然后放到已排序序列的末尾。
 * 以此类推，直到所有元素均排序完毕。
 */

function selectionSort1(array) {
  let length = array.length
  for (let i = 0; i < length - 1; i++) {
    for (j = i + 1; j < length; j++) {
      if (array[j] < array[i]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

function selectionSort2(array) {
  let l = array.length
  let minIndex
  for (let i = 0; i < l; i++) {
    minIndex = i
    for (j = i; j < l; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }

    if (i !== minIndex) {
      let aux = array[i]
      array[i] = array[minIndex]
      array[minIndex] = aux
    }
  }

  return array
}

const arr = [2, 1, 3, 6, 4, 7, 5]
const result = selectionSort2(arr)
console.log(arr)
