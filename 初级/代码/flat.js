function flat(arr) {
    const isDeep = arr.some(item => Array.isArray(item));
    if (!isDeep) {
        return arr;
    }

    const res = Array.prototype.concat.call([], ...arr);
    return flat(res);

}
