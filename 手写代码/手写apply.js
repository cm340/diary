// const customApply = (object, params) => {
//     return object.foo(...params);
// }

const obj = {
    a: 1,
    b: 2,
    c: 3,
    arr: [32, 45, 67]
};
const obj1 = {
    arr: [33, 46, 68]
}

function foo (a) {
    console.log(this.arr, a, "foo");
}
Function.prototype.customApply = customApply;
Function.prototype.customCall = customCall;
Function.prototype.customBind = customBind;

Function.prototype.myCall = function(context, ...args) {
    context = context || window;
    const symbol = Symbol();
    context[symbol] = this;
    const result = context[symbol](...args);
    delete context[symbol];
    return result;

    // 我自己的写法
    const func = this;
    object.func = func;
    return object.func(...params);

    // 上面写法的好处
    // 1. 兼容了作为独立函数调用时的情况
    // 2. 给要调用的函数加属性时 不会污染原对象 用完就删 且避免了属性名冲突
}

obj.foo = foo;
obj.foo.customApply(obj1, [2]); // [33, 46, 68] 2
obj.foo.myCall(obj1, 2); // [33, 46, 68] 2
obj.foo.customBind(obj1, 2)(); // [33, 46, 68] 2

function customApply (object, params) {
    const func = this;
    object.func = func;
    return object.func(...params);
}

function customCall (object, ...params) {
    const func = this;
    object.func = func;
    return object.func(...params);
}

function customBind (object, ...params) {
    const func = this;
    object.func = func;
    return () => {
        return object.func(...params);
    }
}