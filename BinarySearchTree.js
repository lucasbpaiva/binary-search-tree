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
    #getSuccessor(node) {
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
            const successor = this.#getSuccessor(root);
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

    // traverse the tree in breadth-first level order and call the callback on each node
    levelOrderForEach(root, callback) {
        if (typeof callback !== 'function') {
            throw new Error("No valid callback function provided.");
        }
        if (root === null) return;
        const q = [root];
        while (q.length > 0) {
            const current = q.shift();
            callback(current);
            if (current.left) q.push(current.left);
            if (current.right) q.push(current.right);
        }
    }

    // return array with the inorder traversal 
    #inOrderTraversal(root) {
        const result = [];
        this.#helperTraversal(root, result);
        return result;
    }

    #helperTraversal(root, result) {
        if (root !== null) {
            this.#helperTraversal(root.left, result);
            result.push(root.val);
            this.#helperTraversal(root.right, result);
        }
    }

    // traverse the tree inorder and call the callback on each node
    inOrderForEach(root, callback) {
        if (typeof callback !== 'function') {
            throw new Error("No valid callback function provided.");
        }
        if (root !== null) {
            this.inOrderForEach(root.left, callback);
            callback(root);
            this.inOrderForEach(root.right, callback);
        }
    }

    // traverse the tree preorder and call the callback on each node
    preOrderForEach(root, callback) {
        if (typeof callback !== 'function') {
            throw new Error("No valid callback function provided.");
        }
        if (root !== null) {
            callback(root);
            this.preOrderForEach(root.left, callback);
            this.preOrderForEach(root.right, callback);
        }
    }

    // traverse the tree postorder and call the callback on each node
    postOrderForEach(root, callback) {
        if (typeof callback !== 'function') {
            throw new Error("No valid callback function provided.");
        }
        if (root !== null) {
            this.postOrderForEach(root.left, callback);
            this.postOrderForEach(root.right, callback);
            callback(root);
        }
    }

    // (Private) given the root of a binary tree, return its maximum depth
    #maxHeight(root) {
        if (root === null) {
            return -1;
        }
        return 1 + Math.max(this.#maxHeight(root.left), this.#maxHeight(root.right));
    }

    // returns the height of the node containing the given value
    height(val) {
        let node = this.find(this.root, val);
        if (node === null) return null;
        return this.#maxHeight(node);
    }

    // (Private) returns depth of node with given value, node must exist in the tree
    #findNodeDepth(root, val) {
        let depth = -1;
        if (root === null) return -1;
        if (root.val === val) return depth + 1;
        if (val < root.val) return 1 + this.#findNodeDepth(root.left, val);
        if (val > root.val) return 1 + this.#findNodeDepth(root.right, val);
    }

    // returns the depth of the node containing the given value
    depth(val) {
        let node = this.find(this.root, val);
        if (node === null) return null;
        return this.#findNodeDepth(this.root, val);
    }

    // determine if the tree is height-balanced
    isBalanced(root) {
        if (root === null) return true;
        const diff = this.#maxHeight(root.left) - this.#maxHeight(root.right);
        return Math.abs(diff) > 1 ? false : this.isBalanced(root.left) && this.isBalanced(root.right);
    };

    // rebalance BST with the same node values
    rebalance() {
        if (this.isBalanced(this.root)) {
            return this.root;
        }
        const sortedArray = this.#inOrderTraversal(this.root);
        this.root = this.sortedArrayToBST(sortedArray);
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