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
  
3. css 如何实现绝对居中？
   - 定宽高
     - 绝对定位 + 负margin值
     - 绝对定位 + margin auto
   - 不定宽高
     - 绝对定位 + transform
     - table-cell
     - flex 布局

   ```css
   /** 绝对定位 + 负margin值  */
   .box-wrapper {
      width: 300px;
      height: 300px;
      border: 1px solid red;
      position: relative;
   }
   .box {
      width: 100px;
      height: 100px;
      border: 1px solid blue;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -50px;
      margin-top: -50px;
   }

   /** 绝对定位 + margin auto  */
   .box-wrapper {
      width: 300px;
      height: 300px;
      border: 1px solid red;
      position: relative;
   }
   .box {
      width: 100px;
      height: 100px;
      border: 1px solid blue;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
   }

   /** 绝对定位 + transform  */
   .box-wrapper {
      width: 300px;
      height: 300px;
      border: 1px solid red;
      position: relative;
   }
   .box {
      width: 100px;
      height: 100px;
      border: 1px solid blue;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }

   /** table-cell  */
   .box-wrapper {
      width: 300px;
      height: 300px;
      border: 1px solid red;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
   }
   .box {
      width: 100px;
      height: 100px;
      border: 1px solid blue;
      display: inline-block;
   }

   /** flex 布局 */
   .box-wrapper {
      width: 300px;
      height: 300px;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .box {
      width: 100px;
      height: 100px;
      border: 1px solid blue;
   }
   ```