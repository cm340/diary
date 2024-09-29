var arrValue = 1;
const arraw = (a, ...rest) => {
    console.log(this.arrValue, 'arraw', a, rest);
}

const basic = function () {
    console.log(this.arrValue, 'basic', Array.from(arguments));
}
const b = {
    arrValue: 2,
    arraw,
    basic
}
b.arraw(4,5,6);
b.basic(7,8,9);
console.log(window.arrValue, 'window');

// this指向不同 1.箭头函数的this指向父作用域this 2.普通函数的this指向调用时所在的对象
// 写法不同
// 剪头函数不能使用arguments, 不能作为构造函数

