function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let res = null;
    if (Array.isArray(obj)) {
        res = []
    } else {
        res = {}

    }
    for (let key in obj) {
        // 保证key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key])
        }
    }
    return res;

}

function animateElementWidth(el, startWidth, endWidth, step) {
    let width = startWidth + step;
    
    if (width < endWidth) {
        el.style.width = width;
        window.requestAnimationFrame(() => animateElementWidth(el, width, endWidth, step))
    }
}

animateElementWidth(
    document.getElementById('box'),
    0,
    100,
    10,
)