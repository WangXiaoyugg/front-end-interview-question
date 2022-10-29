1. localStorage 和 sessionStorage 
   - 相同点
        - HTML5专门用于浏览器存储，最大5M
        - API使用简单，`getIem`和`setItem`
        - 存储在浏览器本地，不会随请求一起发送
    - 不同点
        - localStorage数据会永久存储，除非手动删除
        - sessionStorage数据只存在当前会话, 浏览器关闭则清空
        - 一般使用 localStorage 会更多一些