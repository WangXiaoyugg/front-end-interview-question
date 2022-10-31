1. 谈一谈对webpack的理解？
    - webpack 是一个用于现代`javascript`应用程序的静态模块打包工具
    - webpack 它解决以下的问题
      - 模块依赖
      - 代码编写, 如`ts`转`js`, `scss`转`css`
      - 开发效率, 如热加载
      - 项目优化, 如资源压缩，合并

2. 使用webpack中的哪些loader？
    - js相关
      - babel-loader, 提供js的语法转换，语法垫片
      - source-map-loader, 从现有源文件中提取源映射关系
    - css相关
      - style-loader,  把编译后的css以style的标签格式插入到DOM中
      - css-loader, 处理css中比如 url(), @import等语法的文件的引用路径问题
      - scss-loader/less-loader,  将scss/less编译为css
    - 文件相关
      - file-loader, 处理文件引用路径问题
      - gzip-loader, 加载gzip资源
      - url-loader, 允许有条件的将文件转换为内联的 base-64 URL
  
3. loader的执行顺序？
    - 按照栈的先入后出的顺序, 从右往左
    - 本质上webpack选择了compose 方式, 从右往左组合函数

    ```javascript
    // 执行顺序： less-loader -> css-loader -> style-loader
    module.exports = {
      module: {
        rules: [
          {
            test: /\.less$/i,
            loader: [
              'style-loader',
              'css-loader',
              'less-loader',
            ]
          }
        ]
      }
    }
    ```
    ```javascript
    // compose 的实现
    const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

    // pipe的实现，从左往右组合函数
    const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
    ```