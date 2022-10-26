1. 手写深拷贝
   
   ```javascript
   // Object.assign 不是深拷贝
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

   ```

2. 介绍一下`requestAnimationFrame`
   - 要想动画流畅，更新频率要 60fps/s, 即16.7ms更新一次视图
   - setTimeout 要手动控制帧率， 而`requestAnimationFrame`浏览器自动控制
   - 后台标签或者隐藏`iframe`, `requestAnimationFrame`会暂停，而`setTimeout`依然会执行

    ```javascript
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
    ```

3. 性能优化，从哪几个方面考虑
    - 原则：多使用内存，缓存，减少计算， 减少网络请求
    - 方向：加载页面， 页面渲染，页面操作流畅度
   