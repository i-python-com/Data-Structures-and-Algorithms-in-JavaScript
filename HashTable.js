// hash function hash the string to hash value
// Hash Table class property: storage, storageLimit
// Hash Table class 4 method:
// print(), add(key, value), remove(key), lookup(key)

let hash = (string, max) => {
  let hashValue = 0

  for (let i = 0; i < string.length; i++) {
    hashValue += string.charCodeAt(i)
  }

  return hashValue % max
}

let HashTable = function() {
  let storage = []
  const storageLimit = 14

  this.print = function() {
    return storage
  }

  this.add = function(key, value) {
    let index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      storage[index] = [[key, value]]
    } else {
      let inserted = false
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value
          inserted = true
        }
      }

      if (inserted === false) {
        storage[index].push([key, value])
      }
    }
  }

  this.remove = function(key) {
    let index = hash(key, storageLimit)
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index]
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i]
        }
      }
    }
  }

  this.lookup = function(key) {
    let index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      return undefined
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i] && storage[index][i][0] === key) {
          return storage[index][i][1]
        }
      }
    }
  }
}

console.log(hash('quincy', 10))

let ht = new HashTable()
ht.add('beau', 'person')
ht.add('fido', 'dog')
ht.add('rex', 'dinosour')
ht.add('tux', 'penguin')
console.log(ht.print())
console.log(ht.lookup('tux'))
ht.remove('tux')
console.log(ht.print())
console.log(ht.lookup('tux'))
