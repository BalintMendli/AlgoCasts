// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node) {
  if (!node) return true;
  if (max(node.left) > node.data || min(node.right) < node.data) return false;
  return validate(node.right) && validate(node.left);
}

function max(node) {
  if (!node) return -Infinity;
  return Math.max(max(node.left), max(node.right), node.data);
}

function min(node) {
  if (!node) return Infinity;
  return Math.min(min(node.left), min(node.right), node.data);
}

module.exports = validate;

// function validate(node, min = null, max = null) {
//   if (max !== null && node.data > max) {
//     return false;
//   }

//   if (min !== null && node.data < min) {
//     return false;
//   }

//   if (node.left && !validate(node.left, min, node.data)) {
//     return false;
//   }

//   if (node.right && !validate(node.right, node.data, max)) {
//     return false;
//   }

//   return true;
// }
