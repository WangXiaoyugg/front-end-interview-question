function promiseAll(promiseList) {
    return new Promise((resolve, reject) => {
        const promiseArray = Array.from(promiseList);
        const result = [];
        const len = promiseArray.length;
        let count = 0
        for (let i = 0; i < len; i++) {
            Promise.resolve(promiseArray[i]).then(o => {
                result[i] = o;
                count++
                if (count === len) {
                    resolve(result)
                }
            }).catch(e => reject(e))
        }
    })
}