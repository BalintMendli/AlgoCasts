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

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const resArr = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      resArr.push(right.shift());
    } else {
      resArr.push(left.shift());
    }
  }
  if (!left.length) resArr.push(...right);
  if (!right.length) resArr.push(...left);
  return resArr;
}

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

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let indexOfMin = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[indexOfMin]) {
//         indexOfMin = j;
//       }
//     }

//     if (indexOfMin !== i) {
//       let lesser = arr[indexOfMin];
//       arr[indexOfMin] = arr[i];
//       arr[i] = lesser;
//     }
//   }

//   return arr;
// }

// function mergeSort(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }

//   const center = Math.floor(arr.length / 2);
//   const left = arr.slice(0, center);
//   const right = arr.slice(center);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const results = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       results.push(left.shift());
//     } else {
//       results.push(right.shift());
//     }
//   }

//   return [...results, ...left, ...right];
// }
