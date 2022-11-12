type Sleep = (s: number) => Promise<void>

const sleep: Sleep = (s) => new Promise((resolve) => setTimeout(() => {
    resolve()
}, s))

function delay(fn: Function, seconds: number, ...args: any[]) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result = fn(...args);
            resolve(result)
        }, seconds)
    })
}

delay((str: any) => str, 3000, "Hello world").then((res) => {
    console.log(res); // 3秒后答应 Hello World
});

