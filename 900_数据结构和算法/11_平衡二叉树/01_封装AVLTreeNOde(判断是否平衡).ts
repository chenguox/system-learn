import { TreeNode } from "./00_二叉搜索树BSTree";

class AVLTreeNode<T> extends TreeNode<T> {
  // 获取到的left/right节点的类型是AVLTreeNode
  left: AVLTreeNode<T> | null = null;
  right: AVLTreeNode<T> | null = null;
  parent: AVLTreeNode<T> | null = null;

  /** 获取节点的高度 */
  getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0;
    const rightHeight = this.right ? this.right.getHeight() : 0;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  /** 权重： 平衡因子（左边 height - 右边 height） */
  getBalanceFactor(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0;
    const rightHeight = this.right ? this.right.getHeight() : 0;

    return leftHeight - rightHeight;
  }

  /** 直接判断当前节点是否平衡 */
  get isBalanced(): boolean {
    const factor = this.getBalanceFactor();
    return factor >= -1 && factor <= 1; // -1 0 1
  }
}

const avlNode1 = new AVLTreeNode(10);
avlNode1.right = new AVLTreeNode(20);
avlNode1.right.right = new AVLTreeNode(30);
// 测试节点的高度
console.log(avlNode1.getHeight()); // 3
console.log(avlNode1.right.getHeight()); // 2
// 测试平衡因子(权值)
console.log(avlNode1.getBalanceFactor()); // -2
console.log(avlNode1.right.getBalanceFactor()); // -1
// 获取到一个节点目前是否平衡
console.log(avlNode1.isBalanced); // false
console.log(avlNode1.right.isBalanced); // true
