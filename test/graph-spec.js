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
        
        it(`should return 'object' when 'sample.addVertex('A')' is called`, () => {
            assert.strictEqual(typeof sample.addVertex('A'), 'object');
        });

        it(`should return 'object' when 'sample.addVertex('B')' is called`, () => {
            assert.strictEqual(typeof sample.addVertex('B'), 'object');
        });

        it(`should return 'object' when 'sample.addVertex('C')' is called`, () => {
            assert.strictEqual(typeof sample.addVertex('C'), 'object');
        });

        it(`should return 'object' when 'sample.addVertex('D')' is called`, () => {
            assert.strictEqual(typeof sample.addVertex('D'), 'object');
        });
        
        it(`should return 'object' when 'sample.addVertex('E')' is called`, () => {
            assert.strictEqual(typeof sample.addVertex('E'), 'object');
        });
        
        it(`should return 'number' when 'sample.addEdge('A', 'B')' is called`, () => {
            assert.strictEqual(typeof sample.addEdge('A', 'B'), 'number');
        });

        it(`should return 'number' when 'sample.addEdge('D', 'E')' is called`, () => {
            assert.strictEqual(typeof sample.addEdge('D', 'E'), 'number');
        });

        it(`should return 'number' when 'sample.addEdge('C', 'E')' is called`, () => {
            assert.strictEqual(typeof sample.addEdge('C', 'E'), 'number');
        });

        it(`should return 'number' when 'sample.addEdge('A', 'D')' is called`, () => {
            assert.strictEqual(typeof sample.addEdge('A', 'D'), 'number');
        });

        it(`should return 'number' when 'sample.addEdge('A', 'C')' is called`, () => {
            assert.strictEqual(typeof sample.addEdge('A', 'C'), 'number');
        });

        it(`should return 'number' when 'sample.addEdge('E', 'B')' is called`, () => {
            assert.strictEqual(typeof sample.addEdge('E', 'B'), 'number');
        });

        it(`should return 'number' when 'sample.addEdge('D', 'B')' is called`, () => {
            assert.strictEqual(typeof sample.addEdge('D', 'B'), 'number');
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

        it(`should return 'Node doesn't exist in the Graph' when 'dfs('f')' is called`, () => {
            assert.deepEqual(sample.dfs('f'), 'Node doesn\'t exist in the Graph');
        });
        
        it(`should return 'object' type when 'dfs('A')' is called`, () => {
            assert.strictEqual(typeof sample.dfs('A'), 'object');
        });

        it(`should return '[ 'A', 'B', 'D', 'C', 'E' ]' type when 'dfs('A')' is called`, () => {
            assert.deepEqual(sample.dfs('A'), ["A", "B", "D", "E", "C"]);
        });

        it(`should return 'D' when 'removeEdge('A', 'D')' is called`, () => {
            assert.strictEqual(sample.removeEdge('A', 'D'), 'D');
        });

        it(`should return 'true' when 'removeVertex(A)' is called`, () => {
            assert.strictEqual(sample.removeVertex('A'), true);
        });
    });