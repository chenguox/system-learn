// 1. 普通函数的使用过程
function foo() {
  console.log('foo函数被执行~')
}
foo();


// 2.定义函数, 定义完这个函数之后, 会要求这个函数立即被执行
// {} 代码块/对象类型
// () 控制优先级(2+3)*5/函数的调用/函数的参数
// [] 定义数组/从数组-对象中取值/对象的计算属性
// 立即执行函数(常用的写法)
(function() {
  console.log("立即执行函数被调用~")
})();



// 3. 立即执行函数的参数和返回值
var result = (function(name) {
  console.log("函数立即被执行~", name)
  return "Hello World"
})("cgx")
console.log(result)