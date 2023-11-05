/**
 * 交换两个元素的值
 * @param arr 数组
 * @param i 索引值
 * @param j 索引值
 */
export function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function isSorted(arr: number[]): boolean {}

type SortAlgoFn = (arr: number[]) => number[];
export function testSort(sortFn: SortAlgoFn) {
  // 1、随机一个长度为10的数组（数组中存放多个数字）
  const nums = Array.from({ length: 10 }, () => {
    return Math.floor(Math.random() * 200);
  });

  // 2. 使用排序对数组进行排序
  console.log("排序前的原数组:", nums)
  const newNums = sortFn(nums)
  console.log("")
}
