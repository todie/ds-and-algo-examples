const { swap } = require('../common')

/*
* Quicksort applies a divide and conquer strategy to
* the data set by determining a pivot point and then
* recursively partitioning the set. 
*/
const quickSort = (input) => {
  const partition = (arr, low, high) => {
    let pivot = arr[Math.floor((low+high)/2)],
        i = low-1,
        j = high+1

    while(i<j) {
      do { i++ } while(arr[i]<pivot)
      do { j-- } while(arr[j]>pivot)
      if(i>=j) { return j }
      swap(arr, i, j)
    }
    return j
  }

  const recurse = (arr, low, high) => {
    if ( low < high ) {
      let p = partition(arr, low, high )
      recurse(arr, low, p)
      recurse(arr, p+1, high)
    }
  }

  input = input.slice()
  if ( input.length < 2 ) return input
  recurse(input, 0, input.length-1)
  // recurse(input, 0, input.length-1)
  return input
}

module.exports = {
  quickSort
}