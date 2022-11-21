/**
 * 
 * @param { Array } nums 
 * @param { number } target 
 * @returns 
 */
var twoSum1 = function (nums, target) {
    const hash = new Map();
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(target - nums[i])) {
            result.push([nums[i], target - nums[i]])
        }
        hash.set(nums[i], i);
    }
    return result;
};

var twoSum2 = function (nums, target) {
    if (nums.length < 1) return [];
    let len = nums.length;
    let left = 0, right = len - 1;
    let result = [];
    while (left < right) {
        let total = nums[left] + nums[right]
        if (total === target) {
            result.push([nums[left], nums[right]])
            left++;
            right--;
        } else if (total > target) {
            right--
        } else {
            left++
        }
    }

    return result;
}

//=> [5, 10]
let res1 = twoSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)
console.log(res1)
//=> null
let res2 = twoSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 150)
console.log(res2)