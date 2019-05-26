// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const queue = [root, 'level end'];
  const countArr = [0];
  while (queue.length > 1) {
    const curr = queue.shift();
    if (curr === 'level end') {
      countArr.push(0);
      queue.push('level end');
    } else {
      countArr[countArr.length - 1]++;
      queue.push(...curr.children);
    }
  }
  return countArr;
}

module.exports = levelWidth;
