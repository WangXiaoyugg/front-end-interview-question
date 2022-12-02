/**
你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。
由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。
实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。
[1,2,3,4,5]
 */

const solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1, right = n;
        while (left < right) { // 循环至区间的左右端点相同
            let mid = Math.floor(left + ( right - left)/ 2);
            let result = isBadVersion(mid);
            
            if (result) {
                // 是错误的版本答案 [left, mid] 中
                right = mid;
            } else {
                // 不是错误的版本，答案在 [mid+1, right] 中
                left = mid + 1;
            }
        }
        // 此时 left === right, 区间缩为1个点，即为答案
        return left;
    }
}