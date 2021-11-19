let numbers = [1, 32, 54, 56, 77, 82, 112, 245, 666];

function binary_search(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (target < array[mid]) {
      end = mid - 1;
    }
    if (target > array[mid]) {
      start = mid + 1;
    }
  }
  return -1;
}

const index = binary_search(numbers, 120);
console.log(index);
