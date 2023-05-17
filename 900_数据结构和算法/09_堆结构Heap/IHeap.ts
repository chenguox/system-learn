interface IHeap<T> {
  insert(value: T): void;
  extract(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  buildHeap(list: T[]): void;
}

export default IHeap;
