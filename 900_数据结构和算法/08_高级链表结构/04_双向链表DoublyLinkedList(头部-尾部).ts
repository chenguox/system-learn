import LinkedList from "./02_实现单向链表LinkedList(重构)";
import { DoublyNode } from "./Node";

class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | null = null;
  protected tail: DoublyNode<T> | null = null;

  append(value: T): void {
    // 创建一个新的双向节点
    const newNode = new DoublyNode<T>(value);

    // head 为空的情况
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  // 新的方法
  prepend(value: T): void {
    const newNode = new DoublyNode<T>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  // 从尾部遍历所有节点
  postTraverse() {
    const values: T[] = [];
    let current = this.tail;
    while (current) {
      values.push(current.value);
      current = current.prev;
    }

    console.log(values.join(" -> "));
  }
}

// 测试append方法
console.log("-------------- append/prepend --------------");
const dLinkedList = new DoublyLinkedList<string>();
dLinkedList.append("aaa");
dLinkedList.append("bbb");
dLinkedList.append("ccc");
dLinkedList.append("ddd");

dLinkedList.prepend("abc");
dLinkedList.prepend("cba");

dLinkedList.traverse();
dLinkedList.postTraverse();
