import { Tree } from "./BinarySearchTree.js";

function printValue(node) {
    console.log(node.val);
}

const nums = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const myTree = new Tree(nums);
myTree.prettyPrint(myTree.root);

// test insertion
// console.log("--------------------------------------------------");
// console.log("Add new node 31:\n");
// myTree.insert(myTree.root, 31);
// myTree.prettyPrint(myTree.root);

//test deletion
// console.log("--------------------------------------------------");
// console.log("Delete node 8:\n");
// myTree.deleteNode(myTree.root, 8);
// myTree.prettyPrint(myTree.root);

//test search
// console.log("--------------------------------------------------");
// console.log("Find node 67:\n");
// myTree.prettyPrint(myTree.find(myTree.root, 67));

//test levelOrderForeach
// console.log("--------------------------------------------------");
// console.log("Print value of every node (level order):\n");
// myTree.levelOrderForEach(myTree.root, printValue);

//test inOrderForeach
// console.log("--------------------------------------------------");
// console.log("Print value of every node (inorder):\n");
// myTree.inOrderForEach(myTree.root, printValue);

//test preOrderForeach
// console.log("--------------------------------------------------");
// console.log("Print value of every node (preorder):\n");
// myTree.preOrderForEach(myTree.root, printValue);

//test preOrderForeach
// console.log("--------------------------------------------------");
// console.log("Print value of every node (postorder):\n");
// myTree.postOrderForEach(myTree.root, printValue);

//test height
console.log("--------------------------------------------------");
console.log(`Height of binary tree: ${myTree.height(myTree.root.val)}`);