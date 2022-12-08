/**
 * 两个数组的交集 II
 */

/**
 * 如果两个数组是有序的，则可以利用双指针的方法得到两个数组的交集
 * 首先对数组排序，然后使用两个指针遍历两个数组
 * 初始时，两个指针指向数组的头部，每次比较两个指针指向两个数组中的数字，
 * 如果两个数字不相等，则将较小的数字的指针向后移动，如果两个数字相等，将该数字添加到结果中
 * 并将两个指针都右移一位，当至少有一个指针超过数组的长度时，遍历结束
 * 
 * 
 */

function intersect(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b);
    let len1 = nums1.length;
    let len2 = nums2.length;
    let p1 = p2 = 0, k = 0;
    while(p1 < len1 && p2 < len2) {
        if (nums1[p1] < nums2[p2]) {
            p1++
        } else if (nums1[p1] > nums2[p2]) {
            p2++
        } else {
            nums1[k++] = nums1[p1++]
            p2++
        }
    }
    return nums1.slice(0, k);
}

nums1 = [1,2,2,1], nums2 = [2,2]
let res1 = intersect(nums1, nums2)
nums1 = [4,9,5], nums2 = [9,4,9,8,4]
let res2 = intersect(nums1, nums2)
console.log(res1, res2)

/**
 * 哈希表
 * 由于同一个数字在两个数组中都可能出现多次，
 * 因此需要用哈希表存储每个数字出现的次数。对于一个数字，
 * 其在交集中出现的次数等于该数字在两个数组中出现次数的最小值。
 * 
 * 首先遍历第一个数组，并在哈希表中记录第一个数组中的每个数字以及对应出现的次数，
 * 然后遍历第二个数组，对于第二个数组中的每个数字，如果在哈希表中存在这个数字，
 * 则将该数字添加到答案，并减少哈希表中该数字出现的次数。
 * 
 * 为了降低空间复杂度，
 * 首先遍历较短的数组并在哈希表中记录每个数字以及对应出现的次数，
 * 然后遍历较长的数组得到交集
 * 
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中
 * 那么就无法高效地对 nums2 进行排序，因此推荐使用方法一而不是方法二。在方法一中，nums2
 * 只关系到查询操作，因此每次读取 nums2 中的一部分数据，并进行处理即可
 */
function intersect1(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect1(nums2, nums1)
    }
    let map = new Map();
    for (let n of nums1) {
        if (map.has(n)) {
          const count = map.get(n) + 1
          map.set(n, count)
        } else {
          map.set(n, 1) 
        }
    }

    let intersection = [];
    let index = 0;
    for (let n of nums2) {
        let count = map.get(n);
        if (count && count > 0) {
            intersection[index++] = n;
            count--;
            if (count > 0) {
                map.set(n, count)
            } else {
                map.delete(n)
            }
        }
    }

    return intersection;
}

nums1 = [1,2,2,1], nums2 = [2,2]
res1 = intersect1(nums1, nums2)
nums1 = [4,9,5], nums2 = [9,4,9,8,4]
res2 = intersect1(nums1, nums2)
console.log(res1, res2)