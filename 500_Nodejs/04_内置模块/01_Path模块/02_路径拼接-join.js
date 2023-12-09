const path = require("path");

const path1 = "D://aaa";
const path2 = "/aaa/bbb";
const path3 = "../ccc/ddd/index.txt";
const path4 = "bbb/main.js";
const path5 = "./bbb/main.js";

// 直接拼接
console.log(path1 + path2); // D://aaa/aaa/bbb

// path.join 函数
// 对路径拼接, 同时针对不同的操作系统使用不同的分隔符
console.log(path.join(path1, path2)); // D:\aaa\aaa\bbb
console.log(path.join(path2, path3)); // \aaa\ccc\ddd\index.txt
console.log(path.join(path1, path3)); // D:\ccc\ddd\index.txt
console.log(path.join(path1, path4)); // D:\aaa\bbb\main.js
console.log(path.join(path1, path5)); // D:\aaa\bbb\main.js
