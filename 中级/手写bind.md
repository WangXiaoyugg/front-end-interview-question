手写bind

```javascript


// 使用apply实现
Function.prototype.myBind = function (context) {
    let that = this;
    let args = Array.prototype.slice.call(arguments, 1);

    function fBind() {
        let bindArgs = Array.prototype.slice.call(arguments)
        return that.apply(this instanceof fBind ? this : context, args.concat(bindArgs))
    }

    // 两个类的原型并未公用，而是通过原型链的方式找到该原型方法
    function Fn() {}
    Fn.prototype = this.prototype
    fBind.prototype = new Fn();

    return fBind;
}

// 使用call实现
Function.prototype.myBind2 = function (context, ...args1) {
    let that = this;
    function fBind(...args2) {
        return that.call(this instanceof fBind ? this : context, ...args1, ...args2)
    }
    function Fn() {}
    Fn.prototype = this.prototype;
    fBind.prototype = new Fn()
    return fBind;
}

```