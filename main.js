import { Tree } from "./BinarySearchTree.js";

const nums = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const myTree = new Tree(nums);
myTree.prettyPrint(myTree.root);

// test insertion
console.log("--------------------------------------------------");
console.log("Add new node 31:\n");
myTree.insert(myTree.root, 31);
myTree.prettyPrint(myTree.root);

//test deletion
console.log("--------------------------------------------------");
console.log("Delete node 8:\n");
myTree.deleteNode(myTree.root, 8);
myTree.prettyPrint(myTree.root);