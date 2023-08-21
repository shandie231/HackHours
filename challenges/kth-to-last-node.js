/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 * 
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head){
  let count = 1;
  let current = head;
  let returnedVal = head.value;

  if(typeof k !== 'number' || typeof head !== 'object') return undefined;

  while(current.next !== null){
    current = current.next;

    count++;
  }
  current = head;

  if(k>count || k<=0){
    return undefined;
  }
  for(let i = 0; i<count - k; i++){
    current = current.next;
    returnedVal = current.value;
  }

  return returnedVal;

}

 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;

console.log(kthToLastNode(1, a));




//Do not delete! 
module.exports = {Node, kthToLastNode};