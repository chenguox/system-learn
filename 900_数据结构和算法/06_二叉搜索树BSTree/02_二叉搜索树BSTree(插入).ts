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

  /** 插入数据的操作 */
  insert(value: T) {
    // 1. 根据传入的 value, 创建对应的 Node
    const newNode = new TreeNode(value);

    // 2. 插入分为两种情况
    if (!this.root) {
      // 2.1 第一次插入，直接修改根节点
      this.root = newNode;
    } else {
      // 2.2 其他次插入，需要进行相关的比较决定插入的位置
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    // 判断值到底是插入左边还是右边
    if (newNode.value < node.value) {
      // 左边
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 右边
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
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

export {};
