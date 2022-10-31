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

4. 使用过webpack的哪些plugin？
    - html-webpack-plugin, 创建HTML页面文件到你的输出目录,将webpack打包后的chunk自动引入到这个HTML中
    - clean-webpack-plugin, 清空文件夹插件,每次打包时先清空output文件夹
    - terser-webpack-plugin, 支持对ES6进行压缩
    - webpack.DefinePlugin, 允许创建一个在编译时可以配置的全局常量
    - mini-css-extract-plugin, 将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap
    - optimize-css-assets-webpack-plugin, css压缩
    - html-webpack-tags-plugin, 将js css资源添加到html中 扩展html插件的功能, 以结合webpack.DllReferencePlugin来把公共JS代码提前打包，提升打包速度
    - webpack-bundle-analyzer, 编译模块分析插件，生成代码分析报告
    - webpack.DllPlugin, 编译速度优化, 将模块预先编译
    - webpack.DllReferencePlugin, 将预先编译好的模块关联到当前编译中, 当 webpack 解析到这些模块时，会直接使用预先编译好的模块
    - autodll-webpack-plugin, 会在第一次编译的时候将配置好的需要预先编译的模块编译在缓存中，第二次编译的时候，解析到这些模块就直接使用缓存，而不是去编译这些模块
    - copy-webpack-plugin, 将已存在的单个文件或整个目录复制到构建目录中,多用于 将静态文件拷贝到 dist 目录
    - compression-webpack-plugin, 启用 gzip 压缩
    - webpack.ProvidePlugin,  由 webpack 自带。自动加载模块，而不必在任何地方import或require它们
    - imagemin-webpack-plugin, 批量压缩图片
    - webpack.HotModuleReplacementPlugin, 由 webpack 自带。在对CSS / JS文件进行修改时，可以立即更新浏览器（部分刷新）。依赖于 webpack-dev-server
    - webpack-parallel-uglify-plugin, 开启多个子进程，把对多个文件压缩的工作分别给多个子进程去完成。减少构建时间
    - happypack, 让 webpack 把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。提升构建速度
    - webpack.IgnorePlugin, 用于过滤打包文件，减少打包体积大小
    - optimization.SplitChunks, 用于将页面里的公共代码提取出来，从而进行优化加载速度
    - webpack.NoErrorsPlugin, 报错但不退出 webpack 进程
   
5. plugin的执行顺序？
    - 执行顺序与配置顺序无关
    - 插件的执行顺序，与webpack依赖的`tapable`的事件发布订阅顺序一致