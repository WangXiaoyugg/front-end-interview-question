1. 函数声明和函数表达式的区别
   - 函数声明会执行预加载
   - 函数表达式不会执行预加载

   ```javascript
   const res = sum(10, 20);
   console.log(res); // 30
   
   const res1 = sum1(10, 20)
   console.log(res1); // 报错sum1 not a function
   
   function sum(x, y) {
        return x + y;
   }

   const sum1 = function(x, y) {
        return x + y;
   }
   ```
  
2. `new Object` 和 `Object.create` 的区别
   - `{}` 等于 `new Object()`, 原型是 `Object.prototype`
   - `Object.create(null)`没有原型, `Object.create({...})`可以指定原型


3. this的场景题
   ```javascript
   // this 是在执行时确定的
   const count = 100
   const User= {
        count: 1,
        getCount: function() {
            return this.count;
        }
   }
   console.log(User.getCount()) // 1;
   const fn = User.getCount;
   console.log(fn()) // 100
   ```