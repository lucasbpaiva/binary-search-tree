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

    buildTree(array) {
        // converts array to a height-balanced BST (binary search tree)
        const sortedUniqueArray = [...new Set(array)].sort((a, b) => a - b);
        return this.sortedArrayToBST(sortedUniqueArray);
    }

    sortedArrayToBST(array) {
        // converts sorted array without duplicates to a height-balanced BST
        if (array.length === 0) return null;
        
        let mid = Math.floor(array.length / 2);
        let result = new Node(array[mid]);

        result.left = this.sortedArrayToBST(array.slice(0, mid));
        result.right = this.sortedArrayToBST(array.slice(mid + 1));

        return result;
    }

    insert(root, val) {
        // insert a new node with given value in the BST
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

    prettyPrint(root, prefix = '', isLeft = true) {
        // console.log the BST in a structured format
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