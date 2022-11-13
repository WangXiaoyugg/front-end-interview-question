random 接收一个整数作为随机数的个数，最多生成8个随机数

```javascript

function random(n) {
    return Math.random().toString(36).slice(2, n+2);
}

console.log(random(6))
console.log(random(4))

function randomV2(n) {
    let str = new Array(n)
        .fill(0)
        .map(() => String.fromCharCode(generateAscii()))
        .join('')

    function generateAscii() {
        // ASCII：
        // 大写字母：65~90
        // 小写字母：97~122
        // 数字：48-57
        let a = Math.floor(Math.random() * 62);
        if (a < 26) { // 返回大写字母
            return a + 65
        } else if ( a >= 26 && a < 52) {
            // 返回小写字母
            return a - 26 + 97
        } else {
            // 返回数字
            return a - 52 + 48
        }
    }    
    return str
}

console.log(randomV2(6))
console.log(randomV2(4))

```