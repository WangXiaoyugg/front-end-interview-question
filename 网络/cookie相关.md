1. localhost:3000 与 localhost:5000 的 cookie 信息是否共享 ?
  - 浏览器实现的cookie只区分区域，不区分端口，所以同一个ip下的多个端口下的cookie是共享的
  - 不同协议http,https 也可以共享cookie
  - 带有Secure属性的cookie不能被http共享，带有httpOnly属性的cookie无法被document.cookie访问

2. 如何理解cookie
   - 它本身用于浏览器和服务器通讯
   - 浏览器可以通过 `document.cookie='a=b;c=d;'`修改, 同一个key会修改，不同的key会追加
   - cookie也可以做本地存储，数据量较小，最大4kb
   - http请求时需要发送到服务端，增加请求量
   - 只能用`document.cookie`修改，API不易使用