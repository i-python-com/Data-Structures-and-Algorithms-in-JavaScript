// Node property: this.element, this.next
// Linked List property: length, head
// LinkedList has 10 methods
// size(), head(), add(element), remove(element), isEmpty(), print()
// indexOf(element), elementAt(index), addAt(index, element), removeAt(index)

let Node = function(element) {
  this.element = element
  this.next = null
}

let LinkedList = function() {
  let length = 0
  let head = null

  this.size = function() {
    return length
  }

  this.head = function() {
    return head
  }

  this.add = function(element) {
    let node = new Node(element)

    if (head === null) {
      head = node
    } else {
      let currentNode = head

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }

    length++
  }

  this.remove = function(element) {
    let currentNode = head
    let previousNode
    if (currentNode.element === element) {
      head = currentNode.next
    } else {
      while (currentNode && currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
      }

      if (currentNode.element === element) {
        previousNode.next = currentNode.next
      } else {
        return
      }
    }

    length--
  }

  this.isEmpty = function() {
    return length === 0
  }

  this.print = function() {
    let currentNode = head
    let result = []

    while (currentNode) {
      result.push(currentNode.element)
      currentNode = currentNode.next
    }

    return 'LinkedList: ' + result
  }

  this.indexOf = function(element) {
    let currentNode = head
    let index = -1

    while (currentNode) {
      index++
      if (currentNode.element === element) {
        return index
      }
      currentNode = currentNode.next
    }

    return -1
  }

  this.elementAt = function(index) {
    let currentNode = head
    let count = 0

    if (index < 0 || index >= length) {
      return null
    }

    while (count < index) {
      count++
      currentNode = currentNode.next
    }

    return currentNode.element
  }

  this.addAt = function(index, element) {
    let node = new Node(element)

    let currentNode = head
    let previousNode
    let currentIndex = 0

    if (index < 0 || index > length) {
      return false
    }

    if (index === 0) {
      node.next = currentNode
      head = node
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }

      node.next = currentNode
      previousNode.next = node
    }

    length++
  }

  this.removeAt = function(index) {
    let currentNode = head
    let previousNode
    let currentIndex = 0

    if (index < 0 || index >= length) {
      return null
    }

    if (index === 0) {
      head = currentNode.next
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }

      previousNode.next = currentNode.next
    }

    length--
    return currentNode.element
  }
}

let ll = new LinkedList()
console.log(ll.isEmpty())
ll.add('Kitten')
ll.add('Puppy')
ll.add('Dog')
ll.add('Cat')
ll.add('fish')
console.log(ll.print())
console.log(ll.indexOf('Dog'))
console.log(ll.elementAt(3))
console.log(ll.size())
console.log(ll.removeAt(3))
console.log(ll.size())
ll.addAt(0, 'Bird')
console.log(ll.print())
