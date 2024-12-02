import { TreeNode } from "./Class/Tree"

const levelSearchOrder = [1, 0, 48, null, null, 12, 49]
const tree = TreeNode.fromLevelSearchOrder(levelSearchOrder)
console.log(tree, tree.postorderSearch())
// tree.printTree()
