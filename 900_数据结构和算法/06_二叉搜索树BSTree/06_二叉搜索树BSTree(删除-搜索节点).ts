import Node from "./types/Node";
import { btPrint } from "hy-algokit";

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

class BSTree<T> {
  private root: TreeNode<T> | null = null;

  print() {
    btPrint(this.root);
  }

  // 插入操作
  insert(value: T) {
    const newNode = new TreeNode<T>(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (node.left !== null) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else {
      if (node.right !== null) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }

  // 遍历操作
  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }
  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left);
      console.log(node.value);
      this.inOrderTraverseNode(node.right);
    }
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left);
      this.postOrderTraverseNode(node.right);
      console.log(node.value);
    }
  }

  // 层序遍历
  levelOrderTraverse() {
    // 1.如果没有根节点, 那么不需要遍历
    if (!this.root) return;

    // 2.创建队列结构
    const queue: TreeNode<T>[] = [];
    // 第一个节点时根节点
    queue.push(this.root);

    // 3.遍历队列中所有的节点(依次出队)
    while (queue.length) {
      // 3.1.访问节点的过程
      const current = queue.shift()!;
      console.log(current.value);

      // 3.2.将左子节点放入到队列
      if (current.left) {
        queue.push(current.left);
      }

      // 3.3.将右子节点放入到队列
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  /** 获取最大值：最大值/最小值 */
  getMaxValue(): T | null {
    let current = this.root;
    while (current && current.right) {
      current = current.right;
    }
    return current?.value ?? null;
  }
  getMinValue(): T | null {
    let current = this.root;
    while (current && current.left) {
      current = current.left;
    }
    return current?.value ?? null;
  }

  /** 搜索特定的值: 20 => boolean */
  search(value: T): boolean {
    let current = this.root;
    while (current) {
      // 找到了节点
      if (current.value === value) return true;

      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return false;
  }

  /** 实现删除操作 */
  remove(value: T): boolean {
    // 1. 搜索: 当前是否有这个 value
    let current = this.root;
    let parent: TreeNode<T> | null = null;

    while (current) {
      if (current.value === value) break;

      parent = current;
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    console.log(current?.value);

    return true;
  }
}

const bst = new BSTree<number>();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
bst.print();

// bst.preOrderTraverse();
// bst.inOrderTraverse();
// bst.postOrderTraverse();
// bst.levelOrderTraversal();
// console.log(bst.getMaxValue());
// console.log(bst.getMinValue());

// console.log(bst.search(20));
// console.log(bst.search(18));
// console.log(bst.search(6));
// console.log(bst.search(30));

// bst.remove(15)
bst.remove(9);

export {};
