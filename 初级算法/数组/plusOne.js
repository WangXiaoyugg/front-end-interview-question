/**
 * 加1，
 * 
 * 找出最长后缀9，逆序遍历
 * 1. 末尾没有9
 * 2. 末尾有若干个9
 * 3. 所有元素都是9
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let n = digits.length;
    
    for (let i=n-1; i>=0; i--) {

        if (digits[i] !== 9) {
            digits[i]++
            for (let j = i + 1; j < n; j++) {
                digits[j] = 0;
            }
            return digits;
        }
    }

    // digits 中所有的元素都为9
    const ans = new Array(n + 1).fill(0);
    ans[0] = 1
    return ans;
};