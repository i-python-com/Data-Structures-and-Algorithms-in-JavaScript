// Node class and (BST)Binary Search Tree class
// Node has three property: this.data, this.left, this.right
// BST has one property(this.root), and 6 methods
// insert(data), remove(data)
// find(data), findMin(), findMax(), isPresend(data)
// findMinHeight(), findMaxHeight(), isBalanced()
// inOrder(), node.left - node - node.right
// preOrder(), node - node.left - node.right
// postOrder(), node.left - node.right - node
// levelOrder(), height0 - height1 - height2

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
      return
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
            return
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
            return
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }

      return searchTree(node)
    }
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) {
        return null
      }

      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null
        }

        // node has no left child
        if (node.left === null) {
          return node.right
        }

        // node has no right child
        if (node.right === null) {
          return node.left
        }

        // node has two children
        // use the node's right child's smallest left child replace the node
        let tempNode = node.right
        while (tempNode.left) {
          tempNode = tempNode.left
        }

        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }

    this.root = removeNode(this.root, data)
  }

  findMin() {
    let node = this.root

    if (node === null) {
      return null
    }

    while (node.left !== null) {
      node = node.left
    }

    return node.data
  }

  findMax() {
    let node = this.root

    if (node === null) {
      return null
    }

    while (node.right !== null) {
      node = node.right
    }

    return node.data
  }

  find(data) {
    let node = this.root
    if (node === null) {
      return null
    }

    while (node.data !== data) {
      if (data < node.data) {
        node = node.left
      } else {
        node = node.right
      }
      if (node === null) {
        return null
      }
    }

    return node
  }

  isPresent(data) {
    let node = this.root
    while (node) {
      if (data === node.data) {
        return true
      }

      if (data < node.data) {
        node = node.left
      } else {
        node = node.right
      }
    }

    return false
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1
  }

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1
    }

    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)

    if (left < right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1
    }

    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)

    if (left > right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  inOrder() {
    if (this.root === null) {
      return null
    } else {
      let result = []
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left)
        result.push(node.data)
        node.right && traverseInOrder(node.right)
      }

      traverseInOrder(this.root)
      return result
    }
  }

  preOrder() {
    if (this.root === null) {
      return null
    } else {
      let result = []
      function traversePreOrder(node) {
        result.push(node.data)
        node.left && traversePreOrder(node.left)
        node.right && traversePreOrder(node.right)
      }

      traversePreOrder(this.root)
      return result
    }
  }

  postOrder() {
    if (this.root === null) {
      return null
    } else {
      let result = []
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left)
        node.right && traversePostOrder(node.right)
        result.push(node.data)
      }

      traversePostOrder(this.root)
      return result
    }
  }

  levelOrder() {
    let result = []
    let queue = []
    if (this.root !== null) {
      queue.push(this.root)
      while (queue.length > 0) {
        let node = queue.shift()
        result.push(node.data)

        if (node.left !== null) {
          queue.push(node.left)
        }

        if (node.right !== null) {
          queue.push(node.right)
        }
      }
      return result
    } else {
      return null
    }
  }
}

const bst = new BST()

bst.insert(9)
bst.insert(4)
bst.insert(17)
bst.insert(3)
bst.insert(6)
bst.insert(22)
bst.insert(5)
bst.insert(7)
bst.insert(20)

console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalanced())

bst.insert(10)
console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalanced())

console.log('inOrder: ' + bst.inOrder())
console.log('preOrder: ' + bst.preOrder())
console.log('postOrder: ' + bst.postOrder())
console.log('levelOrder: ' + bst.levelOrder())
