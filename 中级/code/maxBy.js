//根据条件找到最大的数组项
const data = [{ value: 6 }, { value: 2 }, { value: 4 }]

//=> { value: 6 }
const result = maxBy(data, x => x.value)
console.log(result)

function maxBy(list, fn) {
    return list.reduce((a, b) => fn(a) > fn(b) ? a : b)
}




const data2 = [{ value: 6 }, { value: 2 }, { value: 4 }, { value: 6 }]
//=> [{ value: 6 }, { value: 6 }]
const res2 = maxByMulti(data2, x => x.value)

console.log('res2: ', res2);
function maxByMulti(list, fn) {
    return list.slice(1).reduce((result, x) => {
        if (fn(x) > fn(result[0])) {
            return [x]
        } 
        if (fn(x) === fn(result[0])) {
            return [...result, x]
        }
        return result;
    }, [list[0]])
}
