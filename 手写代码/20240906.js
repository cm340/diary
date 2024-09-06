// 样例输入：1234567890
// 样例输出：1,234,567,890

const stringConvert = (num) => {

    // 最简单的写法 使用toLocaleString转千分位
    // return num.toLocaleString(); 

    const convrtArray = [];
    const convrtBeforeArray = `${num}`.split('');
    convrtBeforeArray.forEach((item, index) => {
        convrtArray.push((index % 3 === 0 && index !== convrtBeforeArray.length - 1) ? `${item},` : item);
    });
    return convrtArray.join('');
}

console.log(stringConvert(1234567890)); // 1,234,567,890
const num = 939;
console.log(num.toLocaleString('zh-u-nu-hanidec')); // 九三九 可以将阿拉伯数字转换为汉字
const percent = 0.93;
console.log(percent.toLocaleString('zh', { style: 'percent' })); // 93%
console.log(new Date(), new Date().toLocaleString()); // Fri Sep 06 2024 18:38:06 GMT+0800 (中国标准时间) '2024/9/6 18:38:06'

// 手写useState
// const [value, setValue] = useState(0);
let value;
const useState = (initValue) => {
    const newValue = value || initValue;
    const setValue = (newValue) => {
        value = newValue;
    }
    return [newValue, setValue];
}

// 闭包作用域
var a = 20;
const foo = () => {
    var a = 50;
    console.log(a);
}
a = 10;
console.log(a); // 10
foo(); // 50
console.log(a); // 10

var a = 20;
const foo1 = () => {
    a = 50;
    console.log(a);
}
a = 10;
console.log(a); // 10
foo1(); // 50
console.log(a); // 50


var a = 10
function foo2 (){
    console.log(a, 'foo')
}
function bar () {
    var a = 20
    foo2();
}
bar() // 10

function bar1 () {
    var a = 20
    function foo2(){
        console.log(a, 'bar1')
    }
    foo2();
}
bar1() // 20