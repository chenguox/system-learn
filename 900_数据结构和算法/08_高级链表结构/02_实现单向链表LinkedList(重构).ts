import ILinkedList from "./ILinkedList";
import { Node } from "./Node";

export default class LinkedList<T> implements ILinkedList<T> {
  protected head: Node<T> | null = null;
  protected length: number = 0;
  // 新增属性： 总是指向链表的位置
  protected tail: Node<T> | null = null;

  size(): number {
    return this.length;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  // 封装私有方法
  // 根据position获取到当前的节点（不是节点的value,而是获取节点）
  protected getNode(position: number): Node<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }

    return current;
  }

  // 判断是否是最后一个节点
  private isTail(node: Node<T>) {
    return this.tail === node;
  }

  /** 增删查改 */
  append(value: T): void {
    const newNode = new Node<T>(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      // 不需要循环找到最后的节点，直接让尾部节点指向新节点
      this.tail!.next = newNode;
    }
    // 更新尾部节点的属性值
    this.tail = newNode;

    this.length++;
  }

  remove(value: T): T | null {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;

      // 考虑只有一个节点的情况
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      const previous = this.getNode(position - 1);
      current = previous!.next;
      previous!.next = current!.next ?? null;

      // 如果删除的最后一个节点，需要更新 tail
      if (position === this.length - 1) {
        this.tail = previous;
      }
    }

    this.length--;

    return current?.value ?? null;
  }

  get(position: number): T | null {
    if (position < 0 || position > this.length) return null;

    return this.getNode(position)?.value ?? null;
  }

  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.length) return false;

    const newNode = new Node<T>(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const previous = this.getNode(position - 1);
      newNode.next = previous!.next;
      previous!.next = newNode;

      // 如果是插入到最后一个节点，需要更新尾部属性值
      if (position === this.length) {
        this.tail = newNode;
      }
    }

    this.length++;

    return true;
  }
  update(value: T, position: number): boolean {
    if (position === 0 || position >= this.length) return false;

    const currentNode = this.getNode(position);
    currentNode!.value = value;
    return true;
  }

  /** 打印链表 */
  traverse(): void {
    const values: T[] = [];

    let current = this.head;
    while (current) {
      values.push(current.value);
      // 结束循环的条件
      if (this.isTail(current)) {
        current = null;
      } else {
        // 还不最后一个节点
        current = current.next;
      }
    }

    // 循环链表，多打印一个头部节点
    if (this.head && this.tail?.next === this.head) {
      values.push(this.head.value);
    }

    console.log(values.join(" -> "));
  }

  indexOf(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }

      // 当为最后一个节点时，结束循环
      if (this.isTail(current)) {
        current = null;
      } else {
        current = current.next;
      }
      index++;
    }

    return -1;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}

const linkedList = new LinkedList<string>();
console.log("------------ 测试append ------------");
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");
linkedList.traverse();
console.log("------------ 测试insert ------------");
linkedList.insert("abc", 0);
linkedList.traverse();
linkedList.insert("cba", 2);
linkedList.insert("nba", 6);
linkedList.traverse();
// 测试删除节点
console.log("------------ 测试removeAt ------------");
linkedList.removeAt(0);
linkedList.removeAt(0);
linkedList.traverse();

console.log(linkedList.removeAt(2));
linkedList.traverse();
console.log(linkedList.removeAt(3));
linkedList.traverse();

// console.log('------------ 测试get ------------')
console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));

// console.log('------------ 测试update ------------')
linkedList.update("why", 1);
linkedList.update("kobe", 2);

// console.log('------------ 测试indexOf ------------')
console.log(linkedList.indexOf("cba"));
console.log(linkedList.indexOf("why"));
console.log(linkedList.indexOf("kobe"));
console.log(linkedList.indexOf("james"));

// console.log('------------ 测试remove ------------')
linkedList.traverse();
linkedList.remove("why");
linkedList.remove("cba");
linkedList.remove("kobe");
linkedList.traverse();
console.log(linkedList.isEmpty());

export {};
