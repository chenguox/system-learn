// Number 类型
var num = 123

// Boolean 类型
var isAdmin = true
var isLogin = false


// 隐式转换(用的非常多)
var numStr = num + ""
var isAdminStr = isAdmin + ""
var isLoginStr = isLogin + ""
// numStr:  123 string
console.log("numStr: ", numStr, typeof numStr)
// isAdminStr:  true string 
console.log("isAdminStr: ", isAdminStr, typeof isAdminStr)
// isLoginStr:  false string
console.log("isLoginStr: ", isLoginStr, typeof isLoginStr)


// 显示转换
var numStr2 = String(num)
var isAdminStr2 = String(isAdmin)
// numStr2:  123 string
console.log("numStr2: ", numStr2, typeof numStr2)
// isAdminStr2:  true string
console.log("isAdminStr2: ", isAdminStr2, typeof isAdminStr2)