let Stack = function() {
  // Array is used to implement stack
  let items = []

  this.push = function(element) {
    // push element into the stack
    items.push(element)
  }

  this.pop = function() {
    // return top most element in the stack
    // and removes it from the stack
    // undefined if stack is empty
    if (items.length == 0) return undefined
    return items.pop()
  }

  this.size = function() {
    // return the length of the stack
    return items.length
  }

  this.peek = function() {
    // return the top most element from the stack
    // but does'nt delete it.
    return items[items.length - 1]
  }

  this.isEmpty = function() {
    // return true if stack is empty
    return items.length == 0
  }

  this.print = function() {
    // var str = ''
    // for (var i = 0; i < items.length; i++) str += items[i] + ' '
    // return str
    return items.toString()
  }
}

// creating stack instance from stack class
var stack = new Stack()

// testing isEmpty
console.log(stack.isEmpty())

// return the size of the stack
console.log(stack.size())

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

// returns [10, 20]
console.log(stack.print())

// return the topest element of the stack, 20
console.log(stack.peek())
