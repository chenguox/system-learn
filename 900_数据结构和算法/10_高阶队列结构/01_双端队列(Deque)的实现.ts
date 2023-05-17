import ArrayQueue from "./ArrayQueue";

class ArrayDeque<T> extends ArrayQueue<T> {
  addFront(value: T) {
    this.data.unshift(value);
  }

  removeBack(): T | undefined {
    return this.data.pop();
  }
}

const deque = new ArrayDeque<number>();
deque.enqueue(10);
deque.enqueue(20);
deque.enqueue(30);

console.log(deque.peek());
while (!deque.isEmpty()) {
  console.log(deque.dequeue());
}
