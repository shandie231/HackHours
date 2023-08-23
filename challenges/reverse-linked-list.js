function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

const reverseLinkedList = head => {
  let temp = head;
  let current = head;
  const valHolder = [];

  while(temp.next !== null){
    valHolder.push(current.value);
    temp = current;
    current = current.next;
  }
    temp = head;
    current = head;
  for(let i = 0; i<valHolder.length; i++){
    console.log(temp)
    temp.val = valHolder[i];
    temp.next = current.next;
  }
  

};
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reverseLinkedList(a));

module.exports = { Node, reverseLinkedList }
