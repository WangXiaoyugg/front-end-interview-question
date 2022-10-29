1. localhost:3000 与 localhost:5000 的 cookie 信息是否共享 ?
  - 浏览器实现的cookie只区分区域，不区分端口，所以同一个ip下的多个端口下的cookie是共享的
  - 不同协议http,https 也可以共享cookie
  - 带有Secure属性的cookie不能被http共享，带有httpOnly属性的cookie无法被document.cookie访问