// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  const tempStack = new Stack()
  const uniqueValues = new Set()
  while(!stack.isEmpty()) {
    tempStack.push(stack.pop())
  }
  while(!tempStack.isEmpty()) {
    const num = tempStack.pop()
    uniqueValues.add(num)
  }
  for (const value of uniqueValues) {
    stack.push(value)
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [5, 2, 1, 3]