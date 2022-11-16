// 对数组进行分组
function chunk(list, size) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
        const index = Math.floor(i / size);
        if (!result[index]) {
            result[index] = []
        } 
        result[index].push(list[i])
    }
    return result;
}

console.log(chunk([1,2,3,4,5], 2))
console.log(chunk([1,2,3,4,5], 3))
