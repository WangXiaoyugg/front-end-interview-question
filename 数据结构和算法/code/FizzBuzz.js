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

