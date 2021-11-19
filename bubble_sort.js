const numbers = [23, 54, 12, 8, 45, 90, 2];
// [23, 12, 8, 45, 54, 2, 90];
// [12, 8, 23, 45, 2, 54, 90]
// [8, 12, 23, 2, 45, 54, 90]

function bubble_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const sorted = bubble_sort(numbers);
console.log(sorted);
