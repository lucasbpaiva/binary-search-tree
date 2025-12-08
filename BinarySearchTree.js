 class Node {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
 }

 export class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    // converts array to a height-balanced BST (binary search tree)
    buildTree(array) {
        const sortedUniqueArray = [...new Set(array)].sort((a, b) => a - b);
        return this.sortedArrayToBST(sortedUniqueArray);
    }

    // converts sorted array without duplicates to a height-balanced BST
    sortedArrayToBST(array) {
        if (array.length === 0) return null;
        
        let mid = Math.floor(array.length / 2);
        let result = new Node(array[mid]);

        result.left = this.sortedArrayToBST(array.slice(0, mid));
        result.right = this.sortedArrayToBST(array.slice(mid + 1));

        return result;
    }

    // insert a new node with given value in the BST
    insert(root, val) {
        if (root === null) {
            return new Node(val);
        }
        if (val < root.val) {
            root.left = this.insert(root.left, val);
        } else {
            root.right = this.insert(root.right, val);
        }
        return root;
    }

    // get inorder successor of a node (smallest in right subtree)
    getSuccessor(node) {
        node = node.right;
        while (node !== null && node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // delete the node with given value from the BST
    deleteNode(root, val) {
        // if val not in tree return null
        if (root === null) {
            return root;
        }

        if (val < root.val) {
            root.left = this.deleteNode(root.left, val);
        } else if (val > root.val) {
            root.right = this.deleteNode(root.right, val);
        } else {
            // node with 0 or 1 child
            if (root.left === null) {
                return root.right;
            }
            if (root.right === null) {
                return root.left;
            }

            // node with 2 children
            const successor = this.getSuccessor(root);
            root.val = successor.val;
            root.right = this.deleteNode(root.right, successor.val);
        }

        return root;
    }

    // returns the node with the given value or null if not found
    find(root, val) {
        if (root === null) {
            return null;
        }
        if (val < root.val) {
            return this.find(root.left, val);
        } 
        if (val > root.val) {
            return this.find(root.right, val);
        }
        return root;
    }

    // console.log the BST in a structured format
    prettyPrint(root, prefix = '', isLeft = true) {
        if (root === null) {
            return;
        }
        if (root.right !== null) {
            this.prettyPrint(root.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${root.val}`);
        if (root.left !== null) {
            this.prettyPrint(root.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };
 }