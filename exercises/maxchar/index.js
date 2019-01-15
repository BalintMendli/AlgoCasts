// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let max = 0;
  let maxChar = '';
  for (let i = 0; i < str.length; i++) {
    if (obj[str.charAt(i)]) {
      obj[str.charAt(i)]++;
    } else {
      obj[str.charAt(i)] = 1;
    }
    if (obj[str.charAt(i)] > max) {
      max = obj[str.charAt(i)];
      maxChar = str.charAt(i);
    }
  }
  return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }
