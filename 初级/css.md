1. 如果要做页面性能优化，css提高性能的方法有哪些？
   - 属性设置使用简写
   - 用css替代图标
   - 删除不必要的零和单位
   - 用css精灵图代替单个文件的加载

   
   ```css
    /* 属性使用简写，减少包体积 */
    div {
        margin-top: 10px;
        margin-bottom: 20px;
        margin-left: 30px;
        margin-right: 40px;
    }

    div {
        margin: 10px 40px 20px 30px;
    }

    /* 用 css 替换图标
        1. 画三角形
        2. 画箭头
        3. 画圆形
     */
    .circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    /**
      删除不必要的单位
      减少打包体积
     */
    .box {
        width: 0.2em;
        height: 2.0em;
        padding: 0px;
    }
    .box {
        width: .2em;
        height: 2em;
        padding: 0;
    }
   ```


2. css 中哪些属性是可以继承的？
   - 字体
     - font
     - font-family
     - font-size
     - font-style
     - font-variant
     - font-weight
   - 字符间距
     - letter-spacing
   - 文字展示
     - line-height
     - text-align
     - text-indent
     - text-transform
   - 可见性
     - visibility
   - 字间距
     - word-spacing
  