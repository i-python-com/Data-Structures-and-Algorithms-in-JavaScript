// Node class and (BST)Binary Search Tree class
// Node has three property: this.data, this.left, this.right
// BST has one property(this.root), and 6 methods
// insert(data), remove(data)
// find(data), findMin(), findMax(), isPresend(data)

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
}

const bst = new BST()

bst.insert(4)
bst.insert(2)
bst.insert(6)
bst.insert(1)
bst.insert(3)
bst.insert(5)
bst.insert(7)
console.log(bst.findMin())
console.log(bst.findMax())
console.log(bst.find(4))
bst.remove(7)
console.log(bst.findMax())
console.log(bst.isPresent(4))
