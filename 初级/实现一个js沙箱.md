1. 实现一个js沙箱?
    
   ```javascript
   /**
     * 快照沙箱
    */

    class SnapshotSandbox {
        constructor() {
            this.proxy = window
            this.originalSnapshot = {}
            this.modifyPropsMap = {}
        }
        
        // 激活应用
        active() {
            for (const prop in window) {
                if (window.hasOwnProperty(prop)) {
                    this.originalSnapshot[prop] = window[prop]
                }
            }
            Object.keys(this.modifyPropsMap).forEach(prop => {
                window[prop] = this.modifyPropsMap[prop]
            })
        }

        // 失活应用
        inActive() {
            for (const prop in window) {
                if (window.hasOwnProperty(prop)) {
                    if (window[prop] !== this.originalSnapshot[prop]) {
                        this.modifyPropsMap[prop] = window[prop]
                        window[prop] = this.originalSnapshot[prop]
                    }
                }
            }
        }
    }

    function excuteAppA() {
        window.a = 'a';
        window.aa = 'aa';
    }
    function excuteAppB() {
        window.b = 'b';
        window.bb = 'bb';
    }
    function showConsole() {
        console.log(window.begin, window.a, window.aa, window.b, window.bb);
    }
    // begin 在挂载应用之前，可能会有其他的库在window上挂载一些内容
    window.begin = 'some value';
    // 创建A B应用的沙箱
    const sandboxA = new SnapshotSandbox();
    const sandboxB = new SnapshotSandbox();
    
    // 看看当前window的结果
    showConsole();
    // 假设初始化时挂载A应用
    sandboxA.active();
    // 挂载完毕后，A应用可能会执行它自己的逻辑
    excuteAppA();
    // 看看当前window的结果
    showConsole();
    // 从应用A切换至B 经历A失活 B激活
    sandboxA.inActive();
    sandboxB.active();
    // 看看当前window的结果
    showConsole();
    // 挂载完毕后，B应用也可能会执行它自己的逻辑
    excuteAppB();
    // 看看当前window的结果
    showConsole();
    // 从应用B切换至A 经历B失活 A激活
    sandboxB.inActive();
    sandboxA.active();
    // 看看当前window的结果
    showConsole();

    /**
    * 代理沙箱
    * 里并没有去实现 active inActive 方法，
    * 是因为每个 ProxySandbox 都拥有其独立的代理对象，
    * 并不会污染真正的window对象
    * 因此代理沙箱的 active inActive 并没有在代理沙箱的核心实现上出力，
    * 这两个方法主要可以做的是标识了这一沙箱是否处于运行状态中，
    * 便于沙箱的总调度中心通过遍历来获取当前正在生效的沙箱
    */

    class ProxySandbox {
        constructor() {
            const originalWindow = window;
            const fakeWindow = {}
            const proxyWindow = new Proxy(fakeWindow, {
                get(target, prop) {
                    if (target.hasOwnProperty(prop)) {
                        return target[prop]
                    }
                    return originalWindow[prop]
                },
                set(target, prop, receiver) {
                    target[prop] = receiver;
                    return true;
                }
            })

            this.proxy = proxyWindow;
        }
        
        active() {
            this.sandboxRunning = true;
        }

        inActive() {
            this.sandboxRunning = false;
        }
    }

    const sandboxC = new ProxySandbox();
    const sandboxD = new ProxySandbox();

    // 应用运行在一个沙箱构建出的一个域内，切换应用以及沙箱的激活失活操作则运行在域外
    // 这个域其实就是一个函数作用域，在这个函数作用域中，会有一个与window同名的入参，用以屏蔽全局作用域上的window对象

    sandboxC.active()
    ((window) => {
    window.a = 'a';
    window.aa = 'aa';
    })(sandboxC.proxy);

    sandboxC.inActive();
    sandboxD.active();

    ((window) => {
    window.b = 'b';
    window.bb = 'bb';
    })(sandboxD.proxy);

   ```