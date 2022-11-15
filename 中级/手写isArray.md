手写 Array.isArray

```javascript
function isArray(arr) {
    return (Array.isArray && Array.isArray(arr)) || Object.prototype.toString.call(arr) === '[object Array]'
}

console.log(isArray([]))
console.log(isArray({}))
console.log(isArray('hello'))
console.log(isArray(100))
console.log(isArray(true))
console.log(isArray(undefined))
console.log(isArray(null))



```