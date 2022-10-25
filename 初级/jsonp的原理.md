1. 解释`jsonp`原理，为何不是真正的`ajax`
   - 浏览器的同源策略和跨域限制
   - `<script> <img> <link>`等标签能绕过跨域
  
  ```html
  <script>
    window.jsonp = function(data) {
        console.log('data: ' , data);
    }
  </script>
  <script src="http://localhost:8000/info.js?callback=jsonp"></script>
  ```
  ```javascript
  // info.js
  jsonp({
    username: 'mike',
    age: 20,
    sex: 'male',
  })
  ```

2. `document`的`load` 和 `ready` 的区别
   - `load` 事件是页面全部资源加载完毕后执行，包括图片，视频，音频等资源
   - `ready`是`DOMContentLoaded`事件，它在DOM渲染完成后即可执行，此时图片，视频，音频等资源可能没加载完毕


3. `==` 和 `===` 的区别
    - `==` 会尝试隐式转换
    - `===` 是严格相等
    - 一般场景应使用`===`, 判断null或者undefined时使用`==` 