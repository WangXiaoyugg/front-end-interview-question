1.  vue 的生命周期？
   - Vue2
       - 创建阶段： beforeCreate, created, beforeMount, mounted
       - 运行阶段：beforeUpdate, updated
       - 销毁阶段: beforeDestroy, destroyed
   - Vue3
       - 创建阶段： beforeCreate, created, beforeMount, renderTracked, mounted
       - 运行阶段：renderTriggered,beforeUpdate,renderTracked, updated
       - 销毁阶段: beforeUnMount, unmounted 