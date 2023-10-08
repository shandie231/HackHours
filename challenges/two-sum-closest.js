/*

Given an array nums of n integers and an integer target, find two integers in
nums such that the sum is closest to target. Return the sum of the two
integers. You may assume that each input would have exactly one solution, and
that the array will have at least two elements.

Example:

Given array nums [2, -2, 1] and target = 4.
The sum that is closet to the target is 3. (2 + 1 = 3).

Given array nums = [2, -3, -6, 7, 4] and target = 3.
The sum that is closest to the target is 4. (-3 + 7 = 4).

Given array nums = [3, 1, 4, 3] and target = 6.
The sum that is closest to the target is 6. (3 + 3 = 6).

Solve this problem using any strategy you would like: a naive solution is fine.

Extension:
The naive solution for this problem has O(n^2) time complexity. Can you come up
with a different solution with better time complexity? Hint: first sort the
array, which is O(n*log(n)) time, and see if you can post-process the array in
O(n) time.

*/

// const twoSumClosest = (nums, target) => {
  
// };

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


//module.exports = {twoSumClosest};

