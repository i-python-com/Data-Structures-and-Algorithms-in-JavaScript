let Queue = function() {
  let collection = []

  this.enqueue = function(element) {
    collection.push(element)
  }

  this.dequeue = function() {
    return collection.shift()
  }

  this.size = function() {
    return collection.length
  }

  this.front = function() {
    return collection[0]
  }

  this.isEmpty = function() {
    return collection.length === 0
  }

  this.print = function() {
    return collection
  }
}

let queue1 = new Queue()
console.log(queue1.size())
console.log(queue1.isEmpty())
queue1.enqueue('a')
queue1.enqueue('b')
queue1.enqueue('c')
console.log(queue1.size())
console.log(queue1.isEmpty())
console.log(queue1.print())
console.log(queue1.front())
console.log(queue1.dequeue())
console.log(queue1.print())
