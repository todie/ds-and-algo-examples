const { swap } = require('../common.js')

/*
 * Returns a sorted array by repeatedly swapping adjacent elements.
 * 
 * @param {array} arr The array to sort.
 * @return {array} The sorted array.
 */
const bubbleSort = (arr) => {
  let myArr = arr.slice()
  const n = myArr.length
  if ( n < 2 ) return myArr
  for (let i = 0; i < n; i++) {
    let swapped = false
    for (let j = 0; j < n; j++) {
      if (myArr[j] > myArr[j + 1]) {
        swap(myArr, j, j + 1)
        swapped = true
      }
    }
    if(!swapped) break
  }
  return myArr
}

module.exports = {
  bubbleSort
}
