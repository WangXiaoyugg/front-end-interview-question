手写call&apply 方法

```javascript
Function.prototype.myCall = function(context, ...args)  {
   context = (context == null || context == undefined) ? window : new Object(context);
   context.fn = this;
   const r = context.fn(...args);
   delete context.fn;
   return r;
}

Function.prototype.myApply = function (context, args) {
   context = (context == null || context == undefined) ? window : new Object(context);
   context.fn = this;
   const r = context.fn(args);
   delete context.fn;
   return r; 
}

```