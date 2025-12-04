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
        // converts array to a height-balanced binary search tree
        const sortedUniqueArray = [...new Set(array)].sort((a, b) => a - b);
        return this.sortedArrayToBST(sortedUniqueArray);
    }

    sortedArrayToBST(array) {
        // converts sorted array without duplicates to a height-balanced binary search tree
        if (array.length === 0) return null;
        
        let mid = Math.floor(array.length / 2);
        let result = new Node(array[mid]);

        result.left = this.sortedArrayToBST(array.slice(0, mid));
        result.right = this.sortedArrayToBST(array.slice(mid + 1));

        return result;
    }

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