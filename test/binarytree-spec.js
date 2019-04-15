const assert = require('assert'),
        BinaryTree = require('../src/binary-tree'),
        tree = new BinaryTree();

    describe('[function: BinaryTree]', () => {
        it("should be a function", () => {
            assert.strictEqual(typeof BinaryTree, 'function');
        });

        it('should return "Empty Tree" when remove() is called', () => {
            assert.strictEqual(tree.remove(0), "Empty Tree");
        });

        it('should return "-10" when findMin is called', () => {
            assert.strictEqual(tree.findMin(tree.root), "Empty Tree!");
        });

        it('should return "100" when findMax is called', () => {
            assert.strictEqual(tree.findMax(tree.root), "Empty Tree!");
        });

        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(0), 'object');
        });

        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(-1), 'object');
        });

        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(10), 'object');
        });

        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(-10), 'object');
        });

        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(-0.5), 'object');
        });

        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(5), 'object');
        });

        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(12), 'object');
        });

        it('should return "[ -10, -1, -0.5, 0, 5, 10, 12 ]" when inOrder is called', () => {
            assert.deepEqual(tree.inOrder(tree.root), [-10, -1, -0.5, 0, 5, 10, 12]);
        });

        it('should return "[ -10, -0.5, -1, 5, 12, 10, 0 ]" when postOrder is called', () => {
            assert.deepEqual(tree.postOrder(tree.root), [-10, -0.5, -1, 5, 12, 10, 0]);
        });

        it('should return "[ 0, -1, -10, -0.5, 10, 5, 12 ]" when preOrder is called', () => {
            assert.deepEqual(tree.preOrder(tree.root), [0, -1, -10, -0.5, 10, 5, 12]);
        });

        it('should return "-10" when findMin is called', () => {
            assert.strictEqual(tree.findMin(tree.root), -10);
        });

        it('should return "12" when findMax is called', () => {
            assert.strictEqual(tree.findMax(tree.root), 12);
        });

        it('should return "5" when remove is called', () => {
            assert.strictEqual(tree.remove(5, tree.root), 5);
        }); 
        
        it('should return "10" when remove is called', () => {
            assert.strictEqual(tree.remove(10, tree.root), 10);
        });  

        it('should return "-0.5" when remove is called', () => {
            assert.strictEqual(tree.remove(-0.5, tree.root), -0.5);
        });  

        it('should return "-1" when remove is called', () => {
            assert.strictEqual(tree.remove(-1, tree.root), -1);
        });  
        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(10), 'object');
        });
        
        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(6), 'object');
        });

        it('should return an object when insert is called', () => {
            assert.strictEqual(typeof tree.insert(11), 'object');
        });

        it('should return "10" when remove is called', () => {
            assert.strictEqual(tree.remove(10, tree.root), 10);
        });  
    });