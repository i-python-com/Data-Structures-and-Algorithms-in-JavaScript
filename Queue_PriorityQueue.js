// the element of the queue is array
// priority number is the second element of the array
// the smaller priority number in the front

let PriorityQueue = function() {
  let collection = []

  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          added = true
          return
        }
      }
      if (!added) {
        collection.push(element)
      }
    }
  }

  this.dequeue = function() {
    return collection.shift()
  }

  this.front = function() {
    return collection[0]
  }

  this.size = function() {
    return collection.length
  }

  this.isEmpty = function() {
    return collection.length === 0
  }

  this.print = function() {
    return collection
  }
}

let q = new PriorityQueue()
console.log(q.size())
console.log(q.isEmpty())
q.enqueue(['Carl', 5])
q.enqueue(['Beau', 2])
q.enqueue(['Quincy', 3])
console.log(q.front())
console.log(q.print())
q.enqueue(['Nova', 1])
console.log(q.front())
console.log(q.print())
console.log(q.dequeue())
console.log(q.print())
