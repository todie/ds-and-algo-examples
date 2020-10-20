/*
 * @param arr The array to mutate.
 * @param a Index of first swap location.
 * @param b Index of second swap location.
 * @returns {void}
 */
const swap = (arr, a, b) => {
  let t = arr[a]
  arr[a] = arr[b]
  arr[b] = t
}

/*
 * Returns true if the arr is sorted in ascending order.
 * 
 * @param arr The array to check.
 * @returns {boolean}
 */
const sorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= arr[i]) {
      return false
    }
  }
  return true
}

module.exports = {
  swap,
  sorted
}
