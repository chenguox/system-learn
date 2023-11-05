/**
 * @description 数组扁平化
 * @author 此时此刻的我
 */

export default function flatten1(arr: any[]): any[] {
  // 1. 定义一个空数组 arr
  let newArr: any[] = [];

  // 2. 遍历传入的数组
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((res) => {
        newArr.push(res);
      });
    } else {
      newArr.push(item);
    }
  });

  return newArr;
}

// 功能测试
const arr = [1, [2, [3], 4], 5];
console.log(flatten1(arr));
