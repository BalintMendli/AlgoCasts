// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackForward = new Stack();
    this.stackBackward = new Stack();
    this.isBackwards = false;
  }

  add(n) {
    if (this.isBackwards) {
      while (this.stackBackward.peek()) {
        this.stackForward.push(this.stackBackward.pop());
      }
    }
    this.stackForward.push(n);
    this.isBackwards = false;
  }

  remove() {
    if (!this.isBackwards) {
      while (this.stackForward.peek()) {
        this.stackBackward.push(this.stackForward.pop());
      }
    }
    this.isBackwards = true;
    return this.stackBackward.pop();
  }

  peek() {
    if (this.isBackwards == false) {
      while (this.stackForward.peek()) {
        this.stackBackward.push(this.stackForward.pop());
      }
    }
    this.isBackwards = true;
    return this.stackBackward.peek();
  }
}

module.exports = Queue;

// class Queue {
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }

//   add(record) {
//     this.first.push(record);
//   }

//   remove() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.pop();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return record;
//   }

//   peek() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.peek();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return record;
//   }
// }
