import Node from "./types/Node";
import { btPrint } from "hy-algokit";

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  // 当前节点的父节点
  parent: TreeNode<T> | null = null;

  // 判断当前节点是父节点的左子节点
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this);
  }
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this);
  }
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
    return !!this.searchNode(value);
  }

  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root;
    let parent: TreeNode<T> | null = null;

    while (current) {
      // 1. 如果找到current, 直接返回即可
      if (current.value === value) {
        return current;
      }

      // 2. 继续向下找
      parent = current;
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }

      // 如果 current 有值，那么 current 保存自己的父节点
      if (current) current.parent = parent;
    }

    return null;
  }

  /** 实现删除操作 */
  remove(value: T): boolean {
    // 1. 搜索: 当前是否有这个 value
    const current = this.searchNode(value);
    if (!current) return false;

    // 2. 获取到三个东西： 当前节点/父节点/是属于腹肌欸DNA的左子还是右子节点
    // console.log("当前节点:", current.value, "父节点:", current.parent?.value);
    // 2.1 没有子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        // 根节点
        this.root = null;
      } else {
        if (current.isLeft) {
          current.parent!.left = null;
        } else {
          current.parent!.right = null;
        }
      }
    }

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
// 删除功能:
// 删除叶子节点
bst.remove(3);
bst.remove(8);
bst.remove(12);
bst.print();

export {};
