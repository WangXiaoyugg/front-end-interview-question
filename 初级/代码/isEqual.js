
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

function isEqual(obj1, obj2) {
    // obj1 或者 obj2 非对象, 用===当做值类型比较
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2;
    }

    // 判断是否为同一对象
    if (obj1 === obj2) {
        return true;
    }

    // 判断key长度是否相同
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let key in obj1) {
        // 递归比较对象的属性
        let res = isEqual(obj1[key], obj2[key])
        if (!res) {
            return false;
        }
    }
    return true;

}

const o1 = {
    a: 100,
    b: {
        x: 100,
        y: 101,
    }
}

const o2 = {
    a: 100,
    b: {
        x: 100,
        y: 101,
    }
}

console.log(isEqual(o1, o2))