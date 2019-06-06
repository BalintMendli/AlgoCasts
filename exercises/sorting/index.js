// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let to = arr.length - 1;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < to; i++) {
      if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    to--;
  }
  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// function bubbleSort(arr) {
//   // Implement bubblesort
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const lesser = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = lesser;
//       }
//     }
//   }

//   // return the sorted array
//   return arr;
// }
