/**
 * 只出现一次的数字
 * 给你一个 非空 整数数组 nums ，
 * 除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 找出那个只出现了一次的元素。
 * 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
 */

// 使用位运算
/**
 * 
任何数和 0 做异或运算，结果仍然是原来的数，即 a^0=a。
任何数和其自身做异或运算，结果是 0，即 a^a=0 。
异或运算满足交换律和结合律，即 a^b^a=b^a^a=b^(a^a)=b^0=b 
 */
 var singleNumber = function(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];
    let cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
        cur ^= nums[i]
    }
    return cur;
};