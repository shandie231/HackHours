/*
give a binary search tree, return an array of the perimeter of the tree. Perimeter should start at the root and tranverse couter-clockwise. 
Input:
                    4
                  /   \
                3       8
              /   \    /  \
            7      6  5   11
          /  \    /      /   \
         2    9  1     10     12

Output: [4,3,7,2,9,1,5,10,12,11,8]
*/
function bst(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

const outsideLeaf = (tree) => {

  const output = [];
  let leftHolder = tree.left;
  const leftSide =(tree) => {
    if(!tree) return;

    if(tree.left === null) return output;
    output.push(tree.value);
    leftSide(tree.left);
  }
  const rightSide = (tree) => {
    const rightNums = [];
    if(!tree) return;
  
    if(tree.right === null) return output;
    
    rightSide(tree.right);
    if(tree.left !== leftHolder) output.push(tree.value);
  };
  
  const bottomRow = (tree) => {
    if(!tree) return;
    if(tree.left === null && tree.right === null) {
      output.push(tree.value);
      return output;
    }

    bottomRow(tree.left);
    bottomRow(tree.right);
  }

  leftSide(tree);
  bottomRow(tree);
  rightSide(tree);


  return output;
}


const treeOne = new bst(4);
treeOne.left = new bst(3);
treeOne.left.left = new bst(7);
treeOne.left.left.left = new bst(2);
treeOne.left.left.right = new bst(9);
treeOne.left.right = new bst(6);
treeOne.left.right.left = new bst(1);

treeOne.right = new bst(8);
treeOne.right.left = new bst(5);
treeOne.right.right = new bst(11);
treeOne.right.right.left = new bst(10);
treeOne.right.right.right = new bst(12);

console.log(outsideLeaf(treeOne));