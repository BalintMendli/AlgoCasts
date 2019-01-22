// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  countA = {};
  countB = {};
  for (const char of stringA.toLowerCase()) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      countA[char] ? countA[char]++ : (countA[char] = 1);
    }
  }
  for (const char of stringB.toLowerCase()) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      countB[char] ? countB[char]++ : (countB[char] = 1);
    }
  }
  if (Object.keys(countA).length !== Object.keys(countB).length) {
    return false;
  } else {
    for (const char in countA) {
      if (countA[char] !== countB[char]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }
//
// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }
