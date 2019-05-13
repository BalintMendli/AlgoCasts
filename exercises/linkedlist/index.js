// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let currNode = this.head;
    while (currNode) {
      count++;
      currNode = currNode.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let currNode = this.head;
    if (!currNode) return;
    if (!currNode.next) {
      this.head = null;
      return;
    }
    while (currNode.next) {
      if (!currNode.next.next) {
        currNode.next = null;
        return;
      }
      currNode = currNode.next;
    }
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    let last = this.getLast();
    last.next = new Node(data);
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let counter = 0;
    while (counter !== index) {
      if (!currNode.next) {
        return null;
      }
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const node = this.getAt(index - 1);
    if (node && node.next) {
      node.next = node.next.next;
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const prev = this.getAt(index - 1);
    if (prev) {
      prev.next = new Node(data, prev.next);
    } else {
      this.insertLast(data);
    }
  }

  forEach(func) {
    let counter = 0;
    let currNode = this.head;
    while (currNode) {
      func(currNode, counter);
      currNode = currNode.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
