# Binary Search Tree

This project is a practical implementation of a Binary Search Tree (BST) built purely in JavaScript. I created this repository primarily as a way to deeply internalize foundational Computer Science concepts and build a stronger portfolio. My main goal was to practice and demonstrate proficiency in:

* **Object-Oriented JavaScript:** Structuring the code using Node and Tree classes.
* **Recursion:** Implementing complex operations like delete and traversal methods.
* **Core DSA concepts:** Understanding how BSTs work and implementing algorithms for insertion, deletion, traversal, etc.

## What is a Binary Search Tree (BST)?

A **Binary Search Tree** is a node-based data structure used for searching, sorting, and inserting data efficiently. It adheres to three main properties:

**Binary Property:** Each node has at most two children (a left and a right child).

**Ordering Properties:**

* All values in the left subtree of a node are less than the node's value.

* All values in the right subtree of a node are greater than the node's value.

This specific ordering allows for rapid searching, making it an essential data structure in many applications, including implementing dynamic sets and lookup tables.

## Key Features & Implementation

This implementation includes all the fundamental operations required for a fully functional Binary Search Tree:

| Operation | Description |
|:----------|:------------|
| `buildTree(array)` | convert array of numbers to a height-balanced BST | 
| `prettyPrint(root)` | console.log the BST in a structured format | 
| `insert(root, val)` | insert a new node with given value in the BST | 
| `deleteNode(root, val)` | delete the node with given value from the BST | 
| `find(root, val)` | return the node with the given value or null if not found | 
| `levelOrderForEach(root, callback)` | traverse the tree in breadth-first level order and call the callback on each node | 
| `inOrderForEach(root, callback)` | traverse the tree inorder and call the callback on each node | 
| `preOrderForEach(root, callback)` | traverse the tree preorder and call the callback on each node | 
| `postOrderForEach(root, callback)` | traverse the tree postorder and call the callback on each node | 
| `height(val)` | return the height of the node containing the given value | 
| `depth(val)` | return the depth of the node containing the given value | 
| `isBalanced(root)` | determine if the tree is height-balanced | 
| `rebalance()` | rebalance BST with the same node values | 