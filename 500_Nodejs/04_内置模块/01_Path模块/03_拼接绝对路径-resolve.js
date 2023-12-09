const path = require("path")

// 假设当前文件在目录的路径为 D:\my-coder\path\resolve.js

// const dirPath = "D://my-coder/path/"
// const filePath = "D:\\my-coder\\path\\resolve.js"
// const path1 = "./aaa/bbb"
// const path2 = "../ccc/ddd"
// const path3 = "./index.txt"



const dirPath = "D://my-coder/path/"
const filePath = "D:\\my-coder\\path\\resolve.js"
const path1 = "./aaa/bbb"
console.log("=======================")
console.log(path.resolve(dirPath, path1)) // D:\my-coder\path\aaa\bbb
console.log(path.resolve(filePath, path1)) // D:\my-coder\path\resolve.js\aaa\bbb
// 假设当前文件在目录的路径为 D:\my-coder\path\resolve.js
console.log(path.resolve("aaa/bbb", "../ccc/ddd")) // D:\my-coder\path\aaa\ccc\ddd
console.log(path.resolve("/aaa/bbb", "../ccc/ddd")) // D:\aaa\ccc\ddd
console.log(path.resolve("./aaa/bbb", "../ccc/ddd")) // D:\my-coder\path\aaa\ccc\ddd
console.log(path.resolve("./aaa/bbb", "./ccc/ddd", "index.txt")) // D:\my-coder\path\aaa\bbb\ccc\ddd\index.txt
console.log(path.resolve("./aaa/bbb", "./ccc/ddd", "./index.txt")) // D:\my-coder\path\aaa\bbb\ccc\ddd\index.txt
// 如果没有path传递段，path.resolve()将返回当前工作目录的绝对路径
console.log(path.resolve()) // D:\my-coder\path\


// const finalPath = path.resolve(path1, path2, path3)
// console.log(finalPath)

// path.resolve() 会将一个路径或路径片段的序列解析为一个绝对路径
// /Volumes/codercgx/handwritten/600_Nodejs/04_内置模块/01_Path模块/aaa/ccc/ddd/index.txt


// 如果没有path传递段，path.resolve()将返回当前工作目录的绝对路径
// console.log(path.resolve())
// /Volumes/codercgx/handwritten/600_Nodejs/04_内置模块/01_Path模块