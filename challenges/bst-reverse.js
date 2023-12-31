function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:df

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

const bstReverse = root => {
  if(!root) return;

  const leftHolder = root.left
  const rightHolder = root.right;


  root.right = leftHolder;
  root.left = rightHolder;
  bstReverse(root.left);
  bstReverse(root.right);
  
  return root;


  
};

const newTree = new BinarySearchTree(4);
//left side
newTree.left = new BinarySearchTree(2);
newTree.left.left = new BinarySearchTree(1);
newTree.left.right = new BinarySearchTree(3);
//right side
newTree.right = new BinarySearchTree(7);
newTree.right.right = new BinarySearchTree(9);
newTree.right.right.left = new BinarySearchTree(8);
console.log(newTree);
console.log(bstReverse(newTree));
/*


Extension:

Given an array where elements are sorted in ascending order, convert it to a
height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in
which the depth of the two subtrees of every node never differ by more than 1.

Ex:

Given the sorted array: [0, 3, 4, 6, 8, 9], the output is:

     6 
   /   \
  3     9
 / \   /
0   4 8

Whenever you have two elements in the middle like [1, 4, 7, 8], always
prioritize the rightmost value to place at the top of the tree/subtree,
giving us:

    7
   / \
  4   8
 /
1

(i.e. choose the 7 over the 4 to place at the top of the entire tree, and then
the 4 over the 1 to place at the top of the left subtree. Hint: look up the
Math.ceil function)

*/

const sortedArrayToBST = arr => {

  if(!arr.length) return null;
  //make a tree constructor
  function diyBST(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
  const middleVal = Math.ceil((arr.length-1)/2);
  const rightArrLength = (Math.ceil((arr.length)/2));
  const rightArray = arr.splice(Math.ceil(middleVal, rightArrLength));
  const newRoot = rightArray.splice(0, 1);
  const outputTree = new diyBST(newRoot[0]);

  outputTree.left = sortedArrayToBST(arr);
  outputTree.right = sortedArrayToBST(rightArray);
  //pass down left arry 

  return outputTree;

    //split array in two for left and right side and center element(if two length.ceil to get greater element)
    //set resursive call passing in left array, and second passing in right array
    //return the treesdf

  

  
};


console.log(sortedArrayToBST([0, 3, 4, 6, 8, 9]));
console.log(sortedArrayToBST([1, 4, 7, 8]));
module.exports = {BinarySearchTree, bstReverse, sortedArrayToBST};
