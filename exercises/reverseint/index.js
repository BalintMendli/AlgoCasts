// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let nStr;
  if (n < 0) {
    nStr = n.toString();
    const nStrSl = nStr.slice(1);
    return Number(
      '-' +
        nStrSl
          .split('')
          .reverse()
          .join('')
    );
  } else if (n === 0) {
    return 0;
  } else {
    return Number(
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }
}

module.exports = reverseInt;

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');

//   return parseInt(reversed) * Math.sign(n);
// }
