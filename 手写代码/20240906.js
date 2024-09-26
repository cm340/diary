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

// 可以这样写，但是在全局范围内会多出一个变量i，这样就不好了。
let i = 0
function increase(){
  i++
  console.log(`courrent counter is ${i}`)
  return i
}

increase(); // 1
increase(); // 2
increase(); // 3

function increase3 () {
    let i = 0;
    return () => {
        i++;
        console.log(`increase2 counter is ${i}`);
        return i;
    };
}
increase3()(); // 1
increase3()(); // 1
increase3()(); // 1

const increase4 = (() => {
    let i = 0
    return () =>{
        i++;
        console.log(`increase4 counter is ${i}`);
        return i;
    }
})();
increase4(); // 1
increase4(); // 2
increase4(); // 3

(() =>{
    let i = 0;
    return (() => {
        ++i
        console.log(`increase1 counter is ${i}`) // 1
        return i
    })()
})();

// 抖店商品列表一次最大允许获取1w数据 超出1w数据 怎么获取全店总数和执行分批
// https://github.com/apachecn/Interview?tab=readme-ov-file
