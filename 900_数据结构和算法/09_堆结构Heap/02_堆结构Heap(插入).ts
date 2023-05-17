import IHeap from "./IHeap";

class Heap<T> implements IHeap<T> {
  data: T[] = [];
  private size: number = 0;

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
      if (this.data[index] <= this.data[parentIndex]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  extract(): T | undefined {
    return undefined;
  }

  peek(): T | undefined {
    return this.data[0];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  buildHeap(list: T[]): void {
    throw new Error("Method not implemented.");
  }
}

const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7];

const heap = new Heap<number>();
for (const item of arr) {
  heap.insert(item);
}
console.log(heap.data);

while (!heap.isEmpty()) {
  console.log(heap.extract());
}

export {};
