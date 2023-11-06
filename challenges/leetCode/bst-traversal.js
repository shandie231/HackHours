/*Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
ex1:            1
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
  const outputArray = [];

  while(root.left !== null && root.right !== null){
    
  }


}

const newTree = new bst(3);
newTree.left = new bst(9)
newTree.right = new bst(20);
newTree.right.left = new bst(15);
newTree.right.right = new bst(7);
console.log(newTree);