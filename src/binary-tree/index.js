class Node{
    constructor(data){
        this.data = data;
        this.rightChild = null;
        this.leftChild = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
        return newNode;
    }

    insertNode(parent, node){
        if(node.data < parent.data){
            if(parent.leftChild === null){
                parent.leftChild = node;
            }
            else{
                this.insertNode(parent.leftChild, node);
            }
        }
        else{
            if(parent.rightChild === null){
                parent.rightChild = node;
            }
            else{
                this.insertNode(parent.rightChild, node);
            }
        }
    }

    remove(data){
        if(this.root === null){
            return "Empty Tree";
        }
        this.root = this.removeNode(this.root, data);
        return data;
    }

    removeNode(node, data){
    
        if(data < node.data){
            node.leftChild = this.removeNode(node.leftChild, data);
            return node;
        }
        else if(data > node.data){
            node.rightChild = this.removeNode(node.rightChild, data);
            return node;
        }
        else{
            if(node.leftChild === null && node.rightChild === null){
                node = null;
                return node;
            }

            else if(node.leftChild === null){
                node = node.rightChild;
                return node;
            }

            else if(node.rightChild === null){
                node = node.leftChild;
                return node;
            }

            else{
                let smallestReplacement = this.findMin(node.rightChild);
                node.data = smallestReplacement.data;
                
                node.rightChild = this.removeNode(node.rightChild, smallestReplacement.data);
                return node;
            }
        }
    }

    //Recursively find the smallest element in the tree
    findMin(node){
        if(node === null){
            return "Empty Tree!";
        }
        
        else if(node.leftChild === null){
            return node.data;
        }

        else{
            return this.findMin(node.leftChild);
        }
    }

    //Recursively find the largest element in the tree
    findMax(node){
        if(node === null){
            return "Empty Tree!";
        }

        else if(node.rightChild === null){
            return node.data;
        }

        else{
            return this.findMax(node.rightChild);
        }
    }

    //Traversals
    inOrder(node){
        let traversal = [];
        this.inOrderTraverse(node, traversal);
        return traversal;
    }

    inOrderTraverse(node, traversal){
       if(node !== null){
            this.inOrderTraverse(node.leftChild, traversal);
            traversal.push(node.data);
            this.inOrderTraverse(node.rightChild, traversal);
       }
    }

    preOrder(node){
        let traversal = [];
        this.preOrderTraverse(node, traversal);
        return traversal;
    }
    
    preOrderTraverse(node, traversal){
        if(node !== null){
            traversal.push(node.data);
            this.preOrderTraverse(node.leftChild, traversal);
            this.preOrderTraverse(node.rightChild, traversal);
        }
    }

    postOrder(node){
        let traversal = [];
        this.postOrderTraverse(node, traversal);
        return traversal;
    }
    
    postOrderTraverse(node, traversal){
        if(node !== null){
            this.postOrderTraverse(node.leftChild, traversal);
            this.postOrderTraverse(node.rightChild, traversal);
            traversal.push(node.data);
        }
    }
}

module.exports = BinaryTree;