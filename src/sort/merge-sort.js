// Merge Sort uses two functions and a recursive call, mergeSort is the higher order function that will split the input array into left and right halves, and then execute the lower-order "merge" function on the recursing mergeSort called on the left and right arrays

// The merge helper function simply starts at array index 0 in two arrays, and compares values at those indices as it itterates...the lower value gets pushed into a result array, which is returned (and concatenated with a slice of left and right arrays in case one array element is left over)

const mergeSort = (arr) => {
  const merge = (input, left, right, end, output) => {
    let k = left,
        j = right
    for( let i = left; i < end; i++ ) {
      if ( i < right && ( j >= end || input[i] <= input[j])) {
        output[i] = input[k]
        k++
      } else { // we're on the right side of the run
        output[i] = input[j]
        j++
      }
      console.log(   output)
    }
  }

  let n = arr.length,
      input = arr.slice(),
      output = new Array(n)
  // first step is to decompose the array in 1 length elements
  // this is done already by the array structure so
  // subsequent passes merge adjacent lists into width length runs
  for ( let width = 1; width < n; width = 2 * width ) {
    for ( let i = 0; i < n; i = i+2*width) { // i will always point to the start of the next run
      merge(input, i, Math.min(i+width, n), Math.min(i+2*width,n), output)
    }
    [input,output] = [output,input]
  }
  return input
}

module.exports = {
  mergeSort
}