/*Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
ex1:            3
              /   \
            9     20
                /    \
                15    7
output: [[3],[9,20],[15,7]]
        




*/

function bst(val){
  this.head = val;
  this.left = null;
  this.right = null;
}


const levelOrder = (root) => {
  // const outputArray = [];
  // if(!root) return outputArray;
  // else outputArray.push([root.head])
  // console.log(outputArray);

  // const rightSide = () => {
  //   while(root.left !== null && root.right !== null){
  //     console.log(outputArray);
  //     outputArray.push([root.left.head, root.right.head]);
  //     root.left = root.right.left;
  //     root.right = root.right.right;
  //   }
  // }
  // rightSide();
  // let r = [root];
  // let outputArray = [];
  // console.log(r);

  // while(r[0]){
  //   let rootLength = r.length;
  //   console.log(rootLength);
  //   let row = [];
  //   for(let i = 0; i <rootLength; i++){
  //     let curr = r.shift();
  //     console.log(curr);
  //     row.push(curr.head);
  //     if(curr.left) r.push(curr.left);
  //     if(curr.right) r.push(curr.right);
  //   }
  //   outputArray.push(row);
  // }

  const r = [root];
  const outputArray = [];

  while(r[0]){
    let length = r.length;
    let row = [];
    for(let i = 0; i<length; i++){
      
      let curr = r.shift();
      console.log(curr);
      row.push(curr.head);
      if(curr.left) r.push(curr.left);
      if(curr.right) r.push(curr.right);
    }
    outputArray.push(row);
    


  }



return outputArray;
}

const newTree = new bst(3);
newTree.left = new bst(9)
newTree.right = new bst(20);
newTree.left.left = new bst(10);
newTree.left.right = new bst(12);
newTree.right.left = new bst(15);
newTree.right.right = new bst(7);
console.log(newTree);
console.log(levelOrder(newTree));