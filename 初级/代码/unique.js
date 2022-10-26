// 使用indexOf
function unique(arr) {
    let res = []
    arr.forEach(item => {
        if (res.indexOf(item) < 0) {
            res.push(item)
        }
    })
    return res;
}

// 使用set, 性能更高
function unique(arr) {
    return [...new Set(arr)]
}
