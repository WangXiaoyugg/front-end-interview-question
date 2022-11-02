/**
 * 插入排序
 * 从数组中抽出一个数，在已经排序的数组从后往前扫描，
 * 然后插入到相应的位置
 *
 * 算法实现步骤
 * 1. 从数组的第一个值开始，第一个数组下标为0，认为已经被排序
 * 2. 然后，取出下一个数组值，在已经排序数组序列中，从后往前扫描
 * 3. 如果，该数值大于数组中扫描到的新数值，那么将该数值移到下一位置
 * 4. 一直重复步骤3， 直到找到已排序的数值小于或等于新数组的位置
 * 5. 将新数值插入到该位置后
 * 6. 重复步骤 2- 5
 */

const arr = [5, 6, 3, 5, 4, 2]

function insertSort(array) {
  let insertVal
  let l = array.length
  for (let i = 1; i < l; i++) {
    insertVal = array[i]
    let j = i - 1
    for (; j >= 0 && insertVal < arr[j]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = insertVal
  }

  return arr
}

console.log(insertSort(arr))
