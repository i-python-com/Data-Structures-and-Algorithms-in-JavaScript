let Stack = function() {
  // Object is used to implement stack
  let count = 0
  let storage = {}

  // Add a element onto the end of the stack
  this.push = function(element) {
    storage[count] = element
    count++
  }

  // Remove and return the element at the end of the stack
  this.pop = function() {
    if (count === 0) {
      return undefined
    }

    count--
    let result = storage[count]
    delete storage[count]
    return result
  }

  // return the length of the stack
  this.size = function() {
    return count
  }

  // Return the element at the end of the stack
  this.peek = function() {
    return storage[count - 1]
  }

  // return true if stack is empty
  this.isEmpty = function() {
    return count === 0
  }

  // Print all the element of the stack
  this.print = function() {
    var str = ''
    for (var i = 0; i < count; i++) {
      str += storage[i] + ' '
    }

    return str.trim()
  }
}

// creating stack instance from stack class
var stack = new Stack()

// return the size of the stack
console.log(stack.size())

// testing isEmpty
console.log(stack.isEmpty())

// pop on an empty stack
console.log(stack.pop())

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.isEmpty())

// Printing the stack element
// prints [10, 20, 30]
console.log(stack.print())

// returns 30
console.log(stack.peek())

// returns 30 and remove it from stack
console.log(stack.pop())

// return the topest element of the stack, 20
console.log(stack.peek())

// returns [10, 20]
console.log(stack.print())
