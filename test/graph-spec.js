const assert = require('assert'),
    Graph = require('../src/graph'),
    sample = new Graph(5);

    describe('[Function: Graph]', () => {

        it('should be a function', () => {
            assert.strictEqual(typeof Graph, 'function');
        });
        
        it(`should return 'Empty Graph' when 'removeVertex()' is called`, () => {
            assert.strictEqual(sample.removeVertex('A'), 'Empty Graph');
        });
        
        it(`should return 'Empty Graph' when 'removeEdge()' is called`, () => {
            assert.strictEqual(sample.removeEdge('A', 'B'), 'Empty Graph');
        });
        
        it(`should return 'undefined' when 'sample.addVertex('A')' is called`, () => {
            assert.strictEqual(sample.addVertex('A'), undefined);
        });

        it(`should return 'undefined' when 'sample.addVertex('B')' is called`, () => {
            assert.strictEqual(sample.addVertex('B'), undefined);
        });

        it(`should return 'undefined' when 'sample.addVertex('C')' is called`, () => {
            assert.strictEqual(sample.addVertex('C'), undefined);
        });

        it(`should return 'undefined' when 'sample.addVertex('D')' is called`, () => {
            assert.strictEqual(sample.addVertex('D'), undefined);
        });
        
        it(`should return 'undefined' when 'sample.addVertex('E')' is called`, () => {
            assert.strictEqual(sample.addVertex('E'), undefined);
        });
        
        it(`should return 'undefined' when 'sample.addEdge('A', 'B')' is called`, () => {
            assert.strictEqual(sample.addEdge('A', 'B'), undefined);
        });

        it(`should return 'undefined' when 'sample.addEdge('D', 'E')' is called`, () => {
            assert.strictEqual(sample.addEdge('D', 'E'), undefined);
        });

        it(`should return 'undefined' when 'sample.addEdge('C', 'E')' is called`, () => {
            assert.strictEqual(sample.addEdge('C', 'E'), undefined);
        });

        it(`should return 'undefined' when 'sample.addEdge('A', 'D')' is called`, () => {
            assert.strictEqual(sample.addEdge('A', 'D'), undefined);
        });

        it(`should return 'undefined' when 'sample.addEdge('A', 'C')' is called`, () => {
            assert.strictEqual(sample.addEdge('A', 'C'), undefined);
        });

        it(`should return 'undefined' when 'sample.addEdge('E', 'B')' is called`, () => {
            assert.strictEqual(sample.addEdge('E', 'B'), undefined);
        });

        it(`should return 'undefined' when 'sample.addEdge('D', 'B')' is called`, () => {
            assert.strictEqual(sample.addEdge('D', 'B'), undefined);
        });
       
        it(`should return an 'object' when 'printGraph()' is called`, () => {
            assert.strictEqual(typeof sample.printGraph(), 'object');
        });
    
        it(`should return 'Vertex does not exist in the Graph' when 'removeEdge('Z', 1)' is called`, () => {
            assert.strictEqual(sample.removeEdge('Z', 1), 'Vertex does not exist in the Graph');
        });
        
        it(`should return 'Edge not found!' when 'removeEdge('B', 9)' is called`, () => {
            assert.strictEqual(sample.removeEdge('B', 9), 'Edge not found!');
        });

        it(`should return 'object' type when 'bfs('A')' is called`, () => {
            assert.strictEqual(typeof sample.bfs('A'), 'object');
        });

        it(`should return '[ 'A', 'B', 'D', 'C', 'E' ]' type when 'bfs('A')' is called`, () => {
            assert.deepEqual(sample.bfs('A'), ["A", "B", "D", "C", "E"]);
        });
        
        it(`should return 'Node doesn't exist in the Graph' when 'bfs('f')' is called`, () => {
            assert.deepEqual(sample.bfs('f'), 'Node doesn\'t exist in the Graph');
        });
        
        it(`should return 'D' when 'removeEdge('A', 'D')' is called`, () => {
            assert.strictEqual(sample.removeEdge('A', 'D'), 'D');
        });

        it(`should return 'true' when 'removeVertex(A)' is called`, () => {
            assert.strictEqual(sample.removeVertex('A'), true);
        });
    });