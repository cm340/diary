const arr = [1,2,3,4,5,6,7,8,9];

const obj = {
    a: 1,
    b: 2,
    c: 3,
    arr: [32, 45, 67]
};
const obj1 = {
    arr: [33, 46, 68]
}
const name = "陈勇敢";

function foo (a) {
    console.log(this.arr, a, "foo");
}

obj.foo = foo;
obj.foo(); // [32, 45, 67] undefined 
obj.foo.bind(obj1)(); // [33, 46, 68] undefined 
obj.foo.call(obj1, 1); // [33, 46, 68] 1
obj.foo.apply(obj1, [2]); // [33, 46, 68] 2

// apply,call,bind修改this
// apply的入参是一个数组 call是一个一个传 bind是返回一个新的函数

function sayHelloStrict () {
    "use strict";
    console.log("sayHelloStrict", this);
}

function sayHello () {
    console.log("sayHello", this);
}
sayHelloStrict();
sayHello();

// 在作为独立函数调用时 严格模式下this指向undefined 非严格模式下this指向window
// 作为对象的方法调用时 this指向调用对象