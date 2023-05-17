import Heap from "../09_堆结构Heap/06_堆结构Heap(二叉堆)";

// 1. 封装 PriorityNode
class PriorityNode<T> {
  value: T;
  priority: number;

  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }

  // 对象比较的是优先值
  valueOf() {
    return this.priority;
  }
}

// 2. 创建优先队列
class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap();

  enqueue(value: T, priority: number) {
    const newNode = new PriorityNode<T>(value, priority);
    this.heap.insert(newNode);
  }

  dequeue(): T | undefined {
    return this.heap.extract()?.value;
  }

  peek(): T | undefined {
    return this.heap.peek()?.value;
  }

  isEmpty() {
    return this.heap.isEmpty();
  }

  size() {
    return this.heap.length();
  }
}

const pQueue = new PriorityQueue<string>();
pQueue.enqueue("aaa", 5);
pQueue.enqueue("bbb", 15);
pQueue.enqueue("ccc", 10);
pQueue.enqueue("ddd", 20);
while (!pQueue.isEmpty()) {
  console.log(pQueue.dequeue());
}
