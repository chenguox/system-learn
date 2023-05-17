import IHeap from "./IHeap";

class Head<T> implements IHeap<T> {
  private data: T[] = [];
  private size: number = 0;

  // 私有工具方法
  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  insert(value: T): void {
    throw new Error("Method not implemented.");
  }

  extract(): T | undefined {
    throw new Error("Method not implemented.");
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

export {};
