/*
两个术语: 函数/方法
  函数(function): 如果在JavaScript代码中通过function默认定义一个结构, 称之为是函数.

  方法(method): 如果将一个函数放到对象中, 作为对象的一个属性, 那么将这个函数称之为方法.
*/
function foo() {
}

// key: 字符串类型, 但是在定义对象的属性名时, 大部分情况下引号都是可以省略的
var person = {
  // key: value
  name: "cgx",
  age: 18,
  height: 1.88,
  "my friend": {
    name: "kobe",
    age: 30
  },
  run: function() {
    console.log("running")
  },
  eat: function() {
    console.log("eat foods")
  },
  study: function() {
    console.log("studying")
  }
}