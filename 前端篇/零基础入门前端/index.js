function _reverse(number) {
  // 1. 处理负值
  number = number > 0 ? number : -number;

  // 2.反转整数
  let str = "";
  while (number) {
    str += number % 10;
    number = parseInt(number / 10);
  }
  return str;
}

console.log(_reverse(2233));
