输入一个整数，如果能够被3整除，则输出 Fizz
如果能够被5整除，则输出 Buzz
如果既能被3整数，又能被5整除，则输出 FizzBuzz

```javascript
function fizzbuzz(n) {
    if (n % 5 === 0 && n % 3 === 0) {
        return 'fizzbuzz'
    } else if ( n % 3 === 0) {
        return 'fizz'
    } else if ( n % 5 === 0) {
        return 'buzz'
    } else {
        return n
    }
}

console.log(fizzbuzz('3')) // 'fizz'
console.log(fizzbuzz('5')) // 'buzz'
console.log(fizzbuzz('15')) // 'fizzbuzz'
console.log(fizzbuzz('8')) // 8


```
