import IHeap from "./IHeap";

class Heap<T> implements IHeap<T> {
  data: T[] = [];
  private size: number = 0;

  constructor(list: T[] = []) {
    if (list.length === 0) return;
    this.buildHeap(list);
  }

  // 私有工具方法
  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  insert(value: T): void {
    // 1. 将新元素添加到数组的最后位置
    this.data.push(value);
    this.size++;

    // 2.维护最大堆的特性(最后位置的元素需要进行上滤操作)
    this.heapify_up();
  }

  heapify_up() {
    let index = this.size - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.data[parentIndex] <= this.data[index]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  extract(): T | undefined {
    // 1.判断元素的个数为0或者1的情况
    if (this.size === 0) return undefined;
    if (this.size === 1) {
      this.size--;
      return this.data.pop();
    }

    // 2. 提取并且需要返回的最大值
    const topValue = this.data[0];
    this.data[0] = this.data.pop()!;
    this.size--;

    // 3.维护最大堆的特性: 下滤操作
    this.heapify_down(0);

    return topValue;
  }

  private heapify_down(start: number) {
    let index = start;

    while (2 * index + 1 < this.size) {
      // 3.1 获取左右子节点的索引
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      // 3.2 比较 leftChildIndex 和 rightChildIndex 中较大的值
      let largerIndex = leftChildIndex;
      if (
        rightChildIndex < this.size &&
        this.data[leftChildIndex] > this.data[rightChildIndex]
      ) {
        largerIndex = rightChildIndex;
      }

      // 3.3.较大的值和index位置进行比较
      if (this.data[index] <= this.data[largerIndex]) {
        break;
      }

      // 3.4.交换位置
      this.swap(index, largerIndex);
      index = largerIndex;
    }
  }

  peek(): T | undefined {
    return this.data[0];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  buildHeap(list: T[]): void {
    // 1. 根据接收的数组，进行初始化操作
    this.data = list;
    this.size = list.length;

    // 2. 获取自下而上下滤的第一个元素索引
    let start = Math.floor((this.size - 1) / 2);

    // 3. 循环执行
    for (let i = start; i >= 0; i--) {
      this.heapify_down(i);
    }
  }
}

const arr = [19, 100, 36, 17, 3, 25];
// 1.测试插入操作
// const heap = new Heap<number>();
// for (const item of arr) {
//   heap.insert(item);
// }
// console.log(heap.data);

// 2.测试提取/删除操作
// while (!heap.isEmpty()) {
//   console.log(heap.extract());
// }

// 3.测试批量建堆
const heap = new Heap<number>(arr);
console.log(arr);
console.log(heap.extract());

export {};
