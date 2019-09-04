// Heap stored in the Array, 2 types of Heap
// MinHeap, MaxHeap
// Heap has 4 methods, insert(), remove(), print(), sort()

// after execute sort() once, all the num were deleted

// the root of the Heap stored in the index1
// parent: i / 2
// left child: i * 2
// right child: i * 2 + 1

let MinHeap = function() {
  let heap = [null]

  this.insert = function(num) {
    heap.push(num)

    if (heap.length > 2) {
      let idx = heap.length - 1
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          ;[heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)]
          ]

          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2)
          } else {
            break
          }
        }
      }
    }
  }

  this.remove = function() {
    let smallest = heap[1]
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1]
      heap.splice(heap.length - 1)
      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          ;[heap[1], heap[2]] = [heap[2], heap[1]]
        }
        return smallest
      }

      let i = 1
      let left = 2 * i
      let right = 2 * i + 1
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          ;[heap[i], heap[left]] = [heap[left], heap[i]]
          i = 2 * i
        } else {
          ;[heap[i], heap[right]] = [heap[right], heap[i]]
          i = 2 * i + 1
        }
        left = 2 * i
        right = 2 * i + 1
        if (heap[left] === undefined || heap[right] === undefined) {
          break
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1)
    } else {
      return null
    }

    return smallest
  }

  this.print = () => heap

  this.sort = function() {
    let result = new Array()
    while (heap.length > 1) {
      result.push(this.remove())
    }
    return result
  }
}

let MaxHeap = function() {
  let heap = [null]

  this.insert = function(num) {
    heap.push(num)
    if (heap.length > 2) {
      let idx = heap.length - 1
      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          ;[heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)]
          ]
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2)
          } else {
            break
          }
        }
      }
    }
  }

  this.remove = function() {
    let smallest = heap[1]
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1]
      heap.splice(heap.length - 1)
      if (heap.length == 3) {
        if (heap[1] < heap[2]) {
          ;[heap[1], heap[2]] = [heap[2], heap[1]]
        }
        return smallest
      }
      let i = 1
      let left = 2 * i
      let right = 2 * i + 1
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          ;[heap[i], heap[left]] = [heap[left], heap[i]]
          i = 2 * i
        } else {
          ;[heap[i], heap[right]] = [heap[right], heap[i]]
          i = 2 * i + 1
        }
        left = 2 * i
        right = 2 * i + 1
        if (heap[left] == undefined || heap[right] == undefined) {
          break
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1)
    } else {
      return null
    }
    return smallest
  }

  this.print = () => heap

  this.sort = function() {
    let result = new Array()
    while (heap.length > 1) {
      result.push(this.remove())
    }
    return result
  }
}

let minheap = new MinHeap()
minheap.insert(1)
minheap.insert(5)
minheap.insert(9)
minheap.insert(10)
minheap.insert(6)
minheap.insert(12)

console.log(minheap.print())
console.log(minheap.remove())
console.log(minheap.sort())
console.log(minheap.remove())

let maxheap = new MaxHeap()
maxheap.insert(1)
maxheap.insert(5)
maxheap.insert(9)
maxheap.insert(10)
maxheap.insert(6)
maxheap.insert(12)

console.log(maxheap.print())
console.log(maxheap.remove())
console.log(maxheap.sort())
console.log(maxheap.remove())
