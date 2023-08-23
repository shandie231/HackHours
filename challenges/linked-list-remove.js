/*
Write a function to delete the first instance of a node in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
And given a value, 'b', the linked list after calling your function should look like:

('a' -> 'c' -> 'b' -> 'd')

And the evaluated result would be the removed node with the value of 'b'.

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}


const linkedListRemove = (ll, val) => {

  let current = ll;
  let temp = ll;
  let deleteNode;
  console.log(ll);

  while(current.next){
    temp = current;
    current = current.next;
    if(current.val === val){
      deleteNode = current.val;
      temp.next = current.next;
      console.log(ll)
      return deleteNode;
    }
  }
  console.log()
  if(current.val === val){
    deleteNode = current.val;
    return deleteNode;
  }
  if(current.next === null){
    return undefined;
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
//console.log(linkedListRemove(a, 3));

/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {

  if(ll.val === val){
    ll = ll.next;
  }
  let temp = ll;
  let prev = null;

  while(temp.next !== null){
    prev = temp;
    temp = temp.next;
  };
  prev.next = temp.next;
  console.log(ll)
}

console.log(linkedListRemoveMultiple(a, 3));

module.exports = { LinkedList, Node, linkedListRemove, linkedListRemoveMultiple };
