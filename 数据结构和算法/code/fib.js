/**
 * 手写fibonacci 数列,
 * 输出100以内的fibonacci 数列
 */

function fib(n, fib1 = 1, fib2 = 1, result = [0]) {
    // if (a <= 1) return 1;
    if (n <= fib2) {
        return result;
    }
    result.push(fib2)
    return fib(n, fib2, fib1 + fib2, result)
    // return fib(n-1) + fib(n-2);
}

// function fib2(n) {
//     let a = 0, b = 1;
//     let result = [0];
//     while(b < n) {
//         result.push(b);
//         [a, b] = [b, a+b]
//     }
//     return result
// }

console.log(fib(100))
