import { BSTree } from "./00_二叉搜索树BSTree";
import AVLTreeNode from "./04_封装AVLTreeNode(左旋转操作)";

class AVLTree<T> extends BSTree<T> {
  // 如何去找到不平衡的节点？？ 先不管

  // 假设已经找到了，那么我们如何让这个节点变得平衡
  /**
   * 根据不平衡的节点的情况（LL/RR/LR/RL）让子树平衡
   * @param root 找到不平衡的节点
   */
  rebalance(root: AVLTreeNode<T>) {
    const pivot = root.higherChild;
    const current = pivot.higherChild;

    let resultNode: AVLTreeNode<T> | null = null;
    if (pivot?.isLeft) {
      // L: left
      if (current?.isLeft) {
        // LL: left left 左左（右旋）
        resultNode = root.rightRotation();
      } else {
        // LR: left right 左右（左旋+右旋）
        pivot.leftRotation();
        resultNode = root.rightRotation();
      }
    } else {
      // R: right
      if (current?.isLeft) {
        // RL: right left 右左（右旋左旋）
        pivot?.rightRotation();
        resultNode = root.leftRotation();
      } else {
        // RR: right right 右右（左旋）
        resultNode = root.leftRotation();
      }
    }

    // 判断返回的pivot是否有父节点
    if (!resultNode.parent) {
      this.root = resultNode;
    }
  }
}

const avlTree = new AVLTree<number>();

avlTree.insert(10);
avlTree.insert(15);
avlTree.insert(20);

avlTree.print();
