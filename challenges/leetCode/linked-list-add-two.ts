
//   //Definition for singly-linked list.
//   class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
//   }
 

// function addTwoNumbers(listOne: ListNode | null, listTwo: ListNode | null): ListNode | null {
//   if(listOne === null && listTwo === null) return null;
  

//     let oneCurr: ListNode | null = listOne;
//     let twoCurr: ListNode | null = listTwo;
//     let oneNext: ListNode | null = listOne.next;
//     let twoNext: ListNode | null = listTwo.next;
//     let total1 = oneCurr.val.toString();
//     let total2 = twoCurr.val.toString();
    
//     while(oneCurr.next !== null && twoCurr.next !== null){
//       if(oneCurr.next !== null){
//         oneCurr = oneNext;
//         oneNext = oneCurr.next;
//         total1 = oneCurr.val.toString().concat(total1);
//         total1;
//       }
//       if(twoCurr.next !== null){
//         twoCurr = twoNext;
//         twoNext = twoCurr.next;
//         total2 = twoCurr.val.toString().concat(total2);
//       }
//     }
//     let sum = Number(total1) + Number(total2);
//     let sumString = sum.toString();
//     console.log(sumString);
//     console.log(sum);
//     console.log(typeof sumString);
//     console.log(typeof sum);

//     for(let i = sumString.length - 1; i >= 0; i--){
//       let currentVal = new ListNode(Number(sumString[i]));
//       console.log(currentVal);

//     }


//     console.log(total1);
//     console.log(total2);




//   return;
// };

// const buildLL = (val) => {
//   const linkedList = new ListNode(val);
// }

// const linkedList1A = new ListNode(2);
// linkedList1A.next = new ListNode(4);
// linkedList1A.next.next = new ListNode(3);

// const linkedList1B = new ListNode(5);
// linkedList1B.next = new ListNode(6);
// linkedList1B.next.next = new ListNode(4);
// console.log(addTwoNumbers(linkedList1A, linkedList1B));


// const linkedList2A = new ListNode(0);
// const linkedList2B = new ListNode(0);
// // console.log(addTwoNumbers(linkedList2A, linkedList2B));




// const a = new ListNode(9);
// const b = new ListNode(9);
// a.next = b;
// const c = new ListNode(9);
// b.next = c;
// const d = new ListNode(9);
// c.next = d;
// const e = new ListNode(9);
// d.next = e;
// const f = new ListNode(9);
// e.next = f;
// const g = new ListNode(9);
// f.next = g;

// const a1 = new ListNode(9);
// const b1 = new ListNode(9);
// a1.next = b1;
// const c1 = new ListNode(9);
// b1.next = c1;
// const d1 = new ListNode(9);
// c1.next = d1

// // console.log(addTwoNumbers(a, a1));

