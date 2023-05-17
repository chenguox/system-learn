import { btPrint } from "hy-algokit";
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

  /** 获取更高子节点 */
  public get higherChild(): AVLTreeNode<T> | null {
    const leftHeight = this.left ? this.left.getHeight() : 0;
    const rightHeight = this.right ? this.right.getHeight() : 0;

    if (leftHeight > rightHeight) return this.left;
    if (leftHeight < rightHeight) return this.right;

    return this.isLeft ? this.left : this.right;
  }

  /** 旋转操作： 右旋转 */
  rightRotation() {
    const isLeft = this.isLeft;
    const isRight = this.isRight;

    // 1、处理 pivot 的位置
    const pivot = this.left!;
    pivot.parent = this.parent;

    // 2、处理 pivot 右节点的位置
    this.left = pivot.right;
    if (pivot.right) {
      pivot.right.parent = this;
    }

    // 3、处理 this 节点的位置
    pivot.right = this;
    this.parent = pivot;

    // 4、挂债 pivot
    if (!pivot.parent) {
      // pivot直接作为tree的根
      return pivot;
    } else if (isLeft) {
      // pivot作为父节点的左子节点
      pivot.parent.left = pivot;
    } else if (isRight) {
      // pivot作为父节点的右子节点
      pivot.parent.right = pivot;
    }

    return pivot;
  }
}

// const avlNode1 = new AVLTreeNode(10);
// avlNode1.right = new AVLTreeNode(20);
// avlNode1.right.right = new AVLTreeNode(30);
// // 测试节点的高度
// console.log(avlNode1.getHeight()); // 3
// console.log(avlNode1.right.getHeight()); // 2
// // 测试平衡因子(权值)
// console.log(avlNode1.getBalanceFactor()); // -2
// console.log(avlNode1.right.getBalanceFactor()); // -1
// // 获取到一个节点目前是否平衡
// console.log(avlNode1.isBalanced); // false
// console.log(avlNode1.right.isBalanced); // true

// 测试右旋转, 因为现在是作为节点，所以手动制作数据
const avlNode1 = new AVLTreeNode(10);
avlNode1.left = new AVLTreeNode(8);
avlNode1.left.parent = avlNode1;
avlNode1.left.left = new AVLTreeNode(5);
avlNode1.left.left.parent = avlNode1.left;

const parent = new AVLTreeNode(12);
parent.left = avlNode1;
avlNode1.parent = parent;

btPrint(parent);
// 对 avlNode1 节点进行旋转
avlNode1.rightRotation();
btPrint(parent);
