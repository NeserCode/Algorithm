export type TreeSearchOrder = "preorder" | "inorder" | "postorder"

export class TreeNode {
	value: number | null
	left: TreeNode | null
	right: TreeNode | null

	constructor(value: number | null) {
		this.value = value
		this.left = null
		this.right = null
	}

	preorderSearch(node: TreeNode | null = this, memo: (number | null)[] = []) {
		if (node === null) return memo

		memo.push(node.value)
		this.preorderSearch(node.left, memo)
		this.preorderSearch(node.right, memo)

		return memo
	}

	inorderSearch(node: TreeNode | null = this, memo: (number | null)[] = []) {
		if (node === null) return memo

		this.inorderSearch(node.left, memo)
		memo.push(node.value)
		this.inorderSearch(node.right, memo)
		return memo
	}

	postorderSearch(node: TreeNode | null = this, memo: (number | null)[] = []) {
		if (node === null) return memo

		this.postorderSearch(node.left, memo)
		this.postorderSearch(node.right, memo)
		memo.push(node.value)
		return memo
	}

	printTree() {
		function printNode(node: TreeNode | null, prefix: string, isLeft: boolean) {
			if (node === null) {
				console.log(prefix + (isLeft ? "├──" : "└──") + "null")
				return
			}
			console.log(prefix + (isLeft ? "├──" : "└──") + node.value)
			printNode(node.left, prefix + (isLeft ? "│   " : "    "), true)
			printNode(node.right, prefix + (isLeft ? "│   " : "    "), false)
		}

		printNode(this, "", true)
	}

	get height() {
		return TreeNode.getHeight(this)
	}

	static fromLevelSearchOrder(orderArray: (number | null)[] = []) {
		const root = new TreeNode(orderArray[0])
		const queue = [root]
		let i = 1
		while (i < orderArray.length) {
			const node = queue.shift()
			if (node) {
				node.left = new TreeNode(orderArray[i++])
				node.right = new TreeNode(orderArray[i++])
				queue.push(node.left)
				queue.push(node.right)
			}
		}
		return root
	}

	static getHeight(node: TreeNode | null): number {
		if (node === null) return 0
		return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
	}
}
