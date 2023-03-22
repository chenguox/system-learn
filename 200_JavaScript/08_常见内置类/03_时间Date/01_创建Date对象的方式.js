// 1. 没有传入任何的参数, 获取到当前时间
var date1 = new Date()
console.log(date1)

// 2. 传入参数: 时间字符串
var date2 = new Date('2022-08-08')
console.log(date2)

// 3. 传入具体的年月日时分毫秒
var date3 = new Date(2033, 10, 10, 09, 08, 07, 333)
console.log(date3)

// 4. 传入一个Unix时间戳
// 1s -> 1000ms
var date4 = new Date(10004343433)
console.log(date4)