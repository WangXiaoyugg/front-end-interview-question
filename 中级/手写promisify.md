1. 实现promisify函数
   
   
   ```javascript
   // promisify 将原本通过传入回调函数实现执行改为利用promise.then的方式来执行，实现了逻辑上的同步操作
   function promisify(fn) {
        return  (...args) => {
            return new Promise((resolve, reject) => {
                fn.call(this, ...args, (err, data) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(data)
                    }
                })
            })
        }   
   }

   // NodeJs示例
   const fs = require('fs')
   const readFile = promisify(fs.readFile)
   readFile('./package.json').then(buf =>{
        const obj = JSON.parse(buf.toString('utf8'))
        console.log(obj.name) // 'Example'
   })

   
   ```