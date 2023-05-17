import Heap from "../09_堆结构Heap/06_堆结构Heap(二叉堆)";

class PriorityQueue<T> {
  private heap: Heap<T> = new Heap();

  enqueue(value: T) {
    this.heap.insert(value);
  }

  dequeue(): T | undefined {
    return this.heap.extract();
  }

  peek(): T | undefined {
    return this.heap.peek();
  }

  isEmpty() {
    return this.heap.isEmpty();
  }

  size() {
    return this.heap.length();
  }
}

class Student {
  name: string;
  score: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }

  valueOf() {
    return this.score;
  }
}

const pQueue = new PriorityQueue<Student>();
pQueue.enqueue(new Student("aaa", 59));
pQueue.enqueue(new Student("bbb", 29));
pQueue.enqueue(new Student("ccc", 79));
pQueue.enqueue(new Student("ddd", 99));
while (!pQueue.isEmpty()) {
  console.log(pQueue.dequeue());
}
