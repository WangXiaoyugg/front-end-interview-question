1. 如何获取JS程序中的异常

   ```javascript
   // 手动捕获异常
   try {

   } catch(error) {
    console.log(error)
   } finally {
      // todo
   }

   // 自动捕获
   window.onerror = function(message, source, lineNom, colNom, error) {
    // 第一, 对跨域的js, 如cdn的，不会有详细的报错信息
    // 第二, 对于压缩的js, 还要配合 sourceMap 反查到未压缩代码的行，列
   }
   ```

2. 什么是json?
    - 一种数据格式，本质是一段字符串
    - 格式与JS对象一致，对JS语言更友好
    - `window.JSON`是一个全局对象：`JSON.parse` `JSON.stringify`

3. 如何获取当前页面的url参数
    
    ```javascript
    // 传统方式
    function getQueryParam(name) {
        const search = location.search.substring(1);
        const reg = new RegExp(`(^|&)${name}=([^&]+)(&|$)`, 'i')
        const res = search.match(reg);
        if (res === null) {
            return null;
        }
        return res[2];
    }

    // URLSearchParams
    function queryParam(name) {
        const search = location.search;
        const params = new URLSearchParams(search);
        return params.get(name)
    }   
    ```