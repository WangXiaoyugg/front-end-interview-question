/**
 * 旋转图像
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。
请不要 使用另一个矩阵来旋转图像。

[0][0] [0][1] [0][2]
[1][0] [1][1] [1][2]
[2][0] [2][1] [2][2]

[0][2] [0][1] [0][0]
[2][1] [1][1] [0][1]
[2][2] [1][2] [0][2]

对于矩阵中第 i 行的第 j 个元素，在旋转后，它出现在倒数第 i 列的第 j 个位置。(i, j) => (j, n - i - 1)
matrix[i][j] = matrix_new[j][n - i - 1];


 */
/**
 * 暴力解法
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix_new[j][n- i - 1] = matrix[i][j]
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = matrix_new[i][j]
        }
    }
    console.log(matrix)

};

/** 
 * 
 * 4 * 4 矩阵坐标
 * [
 *  [(0,0), (0,1), (0, 2), (0,3)],
 *  [(1,0), (1,1), (1, 2), (1,3)],
 *  [(2,0), (2,1), (2, 2), (2,3)],
 *  [(3,0), (3,1), (3, 2), (3,3)],
 * ]
 * 原地旋转, 每次旋转交换4个位置
 * 如上图所示，一轮可以完成矩阵 4 个元素的旋转。
 * 因而，只要分别以矩阵左上角 1/4 的各元素为起始点执行以上旋转操作，
 * 即可完整实现矩阵旋转
 * 具体来看，当矩阵大小 n 为偶数时，取前 n / 2行、前 n / 2列的元素为起始点；
 * 当矩阵大小 n 为奇数时，取前 n / 2行、前 (n + 1) /2 列的元素为起始点。
 * temp = matrix[row][col]
 * matrix[row][col] = matrix[n-col-1][row];
 * matrix[n-col-1][row] = matrix[n-row-1][n-col-1];
 * matrix[n-row-1][n-col-1]=matrix[col][n-row-1];
 * matrix[col][n-row-1] = temp
 */
// 当 i = 0, j = 1;
// A (0, 1) , D(2,0) => A(i, j) <- D(n-j-1, i)
// D (2, 0),  C(3, 2) => D(n-j-1, i), C(n-1-i, n-j-1)
// C(3, 2),   B(1, 3) => C(n-1-i, n-j-1), B(j, n-1-i);
// B(1, 3),  A(0,1) =>   B(j, n-1-i), A(i, j);
function rotate1(matrix) {
    let n = matrix.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.floor((n+1)/ 2); j++) {
            let temp = matrix[i][j] //(A)
            // 元素旋转 temp -> B -> C -> D -> A
            matrix[i][j] = matrix[n-1-j][i] // D -> A;
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j] // C -> D;
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i]; // B -> C;
            matrix[j][n-1-i] = temp;
        }
    }
}



/**
 * 用翻转代替旋转
 * 水平轴翻转：matrix[row][col] = matrix[n - row -1][col]
 * 主对角线翻转：matrix[row][col] = matrix[col][row];
 * 联立得到： matrix[row][col] = matrix[n - row - 1][col];
 *                            = matrix[col][n -row -1];
 *           matrix[col][n - row - 1] = matrix[row][col];        
 * 
 * [
 *   [1, 2, 3],
 *   [4, 5, 6],   
 *   [7, 8, 9],
 * ]
 * 
 * => 水平翻转
 * [
 *   [7, 8, 9],
 *   [4, 5, 6],   
 *   [1, 2, 3],
 * ]   
 * 
 * => 对角线翻转
 * 
 *  [
 *   [7, 4, 1],
 *   [8, 5, 2],   
 *   [9, 6, 3],
 * ]   
 **/ 
function rotate2() {
    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n/2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n-i-1][j]] = [matrix[n-i-1][j], matrix[i][j]]
        }
    }
    // console.log(matrix);
    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
}

matrix = [[1,2,3],[4,5,6],[7,8,9]]
// [[7,4,1],[8,5,2],[9,6,3]]
// rotate(matrix)
rotate2(matrix)