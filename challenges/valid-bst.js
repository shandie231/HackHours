/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/


function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}




  function maxValue(bst){
    if(bst === null) return Number.MIN_VALUE;

    let value = bst.value;
    let leftMax = maxValue(bst.left);
    let rightMax = maxValue(bst.right);

    return Math.max(value, Math.max(leftMax, rightMax));
  }

  function minValue(bst){
    if(bst === null) return Number.MAX_VALUE;

    let value = bst.value;
    let leftMax = minValue(bst.left);
    let rightMax = minValue(bst.right);

    return Math.min(value, Math.min(leftMax, rightMax));
  }

  function validBST(tree){
    if(tree === null) {
      isValid = true;
      return isValid;
    }
    if(tree.left !== null & maxValue(tree.left) > tree.value){
      isValid = false;
      return isValid;
    }
    if(tree.right !== null && minValue(tree.right) < tree.value){
      isValid = false;
      return isValid;
    }

    if(!validBST(tree.left) || !validBST(tree.right)){
      isValid = false;
      return isValid;
    }

    isValid = true;
    return isValid;
  }

  


const bst = new BinaryTree(4);
bst.left = new BinaryTree(2);
bst.left.left = new BinaryTree(1);
bst.left.right = new BinaryTree(3);
bst.right = new BinaryTree(5);
console.log(bst);

console.log(validBST(bst));

module.exports = { BinaryTree, validBST };
