const { quickSort } = require('../sort/quick-sort')
const { mergeSort } = require('../sort/merge-sort')
const { bubbleSort } = require('../sort/bubble-sort')
const { selectionSort } = require('../sort/selection-sort')

expect.extend({
  toBeSorted(arr) {
    for(let i = 0; i < arr.length-1; i++) {
      if(arr[i] > arr[i+1]) {
        return {
          pass: false,
          message: () => `${arr} is unsorted.`
        }
      }
    }
    return {
      pass: true,
      message: () => {}
    }
  }
})

function* generator(min, max, count) {
  let i = 0
  while(i < count) {
    i++
    yield Math.floor(Math.random() * (max - min) + min)
  }
}

describe('tests', () => {
  const arrays = [
    [], 
    [1],
    [55, 23, 23, 11, 19, 47, 47, 63, 22],
    [0.13837, 0.70843, 0.63302, 0.00802, 0.00141],
    [-22, 22, 44, 12, 42, -3, -9, 0, 0, 5, 11, 8],
    [...generator(0,1000,100)]
  ]

  const apply = (f) => 
    arrays.forEach((e) => {
      expect(f(e)).toBeSorted()
  })

  test('bubble-sort', () => {
    apply(bubbleSort)
  })

  test('selection-sort', () => {
    apply(selectionSort)
  })
  
  test('merge-sort', () => {
    apply(mergeSort)
  })
  
  test('quick-sort', () => { 
    apply(quickSort) 
  })
})