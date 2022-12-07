/**
 * 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
 * 同时保持非零元素的相对顺序
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 */

/**
 * 双指针， 左指针指向当前已经处理好的序列尾部，右指针指向待处理序列的头部
 * 右指针不断向右移动，每次右指针指向非零数，则将左右指针对应的数交换，同时左指针右移
 * 左指针的左边均为非零数，右指针左边直到左指针处均为零
 * @param {Array} nums 
 */
var moveZeros = function(nums) {
    let left = 0, right = 0;
    let n = nums.length;
    while (right < n) {
        if (nums[right] !== 0) {
            [ nums[left], nums[right] ] = [ nums[right], nums[left] ]
            left++
        }

        right++;
    }
}

moveZeros([0,1,0,3,12])
moveZeros([0,0, 1])

