1. 如何识别浏览器的类型
   
   ```javascript
   const ua = navigator.userAgent
   const isChrome = ua.indexOf('Chrome')

   ```

2. 分析`url`的各个部分
    
    ```javascript
    location.href
    location.protocol // 协议
    location.pathname // 路径
    location.search  
    location.hash   
    ```

3. 检查浏览器中安装了那些插件

   ```javascript
   function hasPlugin(name){
        //转换为小写
        name = name.toLowerCase();
            for(var i = 0; i<navigator.plugins.length; i++){
            // 迭代plugins数组，通过indexof()检测每个name属性
                if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
                        return true;
                    }
            }
        return false;
    }
   ```