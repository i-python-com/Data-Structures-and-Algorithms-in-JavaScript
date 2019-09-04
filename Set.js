/* customer Set, named mySet to separate the ES6 Set Object
   ES6 Set: has(), values(), add(), remove(), size
   mySet: union(), intersection(), difference(), subset()

  ES6 set.values() return SetIterator {"b", "c", "a", "d"}
  mySet.values() return Array ["b", "c", "a", "d"]
*/

function mySet() {
  let collection = []

  this.has = function(element) {
    return collection.indexOf(element) !== -1
  }

  this.values = function() {
    return collection
  }

  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element)
      return true
    } else {
      return false
    }
  }

  this.remove = function(element) {
    if (this.has(element)) {
      let index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    } else {
      return false
    }
  }

  this.size = function() {
    return collection.length
  }

  this.union = function(otherSet) {
    let unionSet = new mySet()
    let thisSetValues = this.values()
    let otherSetValues = otherSet.values()
    thisSetValues.forEach(e => {
      unionSet.add(e)
    })
    otherSetValues.forEach(e => {
      unionSet.add(e)
    })

    return unionSet
  }

  this.intersection = function(otherSet) {
    let intersectionSet = new mySet()
    let thisSetValues = this.values()
    thisSetValues.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })

    return intersectionSet
  }

  this.difference = function(otherSet) {
    let differenceSet = new mySet()
    let thisSetValues = this.values()
    let otherSetValues = otherSet.values()
    thisSetValues.forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })
    otherSetValues.forEach(e => {
      if (!this.has(e)) {
        differenceSet.add(e)
      }
    })

    return differenceSet
  }

  this.subset = function(otherSet) {
    let thisSetValues = this.values()
    return thisSetValues.every(e => {
      return otherSet.has(e)
    })
  }
}

let setA = new mySet()
let setB = new mySet()

setA.add('a')
setA.add('d')
setB.add('a')
setB.add('b')
setB.add('c')
setB.add('d')
console.log(setA.values())
console.log(setB.values())
console.log(setA.union(setB))
console.log(setA.intersection(setB))
console.log(setA.difference(setB))
console.log(setA.subset(setB))
console.log(setB.has('a'))
console.log(setB.add('a'))
console.log(setB.values())
console.log(setA.subset(setB))
