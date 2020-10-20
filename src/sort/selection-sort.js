const { swap } = require('../common.js')

/*
 * Returns a sorted array by find smallest element using linear scan
 * and swap to the front element, then find second smallest and so on 
 * until all elements are in place.
 * 
 * @param {array} arr The array to sort.
 * @return {array} The sorted array.
 */
const selectionSort = (arr) => {
  let idx_min, n = arr.length, myArray = arr.slice()

  if (n < 2) return myArray 

  for (let i=0; i < n; i++) {
    idx_min = i
    for (let j=i+1; j < n ; j++) {
      if (myArray[j] < myArray[idx_min]) { 
        idx_min = j
        }
    }
    swap(myArray, i, idx_min)
  }
  return myArray
}

module.exports = {
  selectionSort
}