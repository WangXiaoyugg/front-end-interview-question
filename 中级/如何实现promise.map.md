实现一个 promise.map，进行并发数控制

```javascript
function promiseMap(list, mapper, concurrency = Infinity) {
   list = Array.from(list)
    return new Promise((resolve, reject) => {
        let result = [];
        let resolveCount = 0;
        let currentIndex = 0;
        let len = list.length;
        function next() {
            let index = currentIndex;
            currentIndex++;
            Promise.resolve(list[index])
                .then((o) => mapper(o, index))
                .then((o) => {
                    result[index] = o;
                    resolveCount++;
                    if (resolveCount === len) {
                        resolve(result)
                    }
                    if (currentIndex < len) {
                        next()
                    }
                })
        }

        for (let i = 0; i < concurrency && i < len; i++) {
            next()
        }
    })
}

promiseMap([1, 2, 3, 4, 5, 6], (x) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('timeout: ' + x)
        resolve(x+1)
    }, 2000)
}), 3)
 .then(res => {
    console.log(res); 
})
```