# Graph
The `M.Graph()` function returns an object upon which various Graph-based operations can be performed. This implementation uses a **adjacency matrix** representation to store the the graph. This is a **unweighted directed graph**. 

The implementation involves adding all the involved edges, with their names being __strings__. Then the edges can be added as per requirement, while remembering that this graph is **directed**.

### Syntax
> new M.Graph(noOfVertices)

### Argument
> Number

### Return
> Object

### Examples
```js
const g = new M.Graph(6);
console.log(g);   // Graph { noOfVertices: 6, Adjlist: Map {} }
```

### Info
> Implemented using JavaScript's built-in `class`

### Methods
- **addVertex** - This method adds the vertex as key to the Adjacent List and initializes its values with an array.  
- **addEdge** - This adds an edge between the source and destination.  
- **printGraph** - This method returns vertices and its adjacency list.  
- **removeVertex** - This method removes the vertex passed as argument. If list is empty, returns `Empty Graph`.
- **removeEdge** - This method removes the edge between the source and destination. If list is empty, returns `Empty Graph`. Returns `Vertex does not exist in the Graph` if vertex name is not found. Returns `Edge not found!` if edge does not exist between source and destination.
- **bfs** -  This method performs Breadth First Search from the given starting node.
- **dfs** -  This method performs recursive Depth First Search from the given starting node.

------

###### Syntax
> g.addVertex(vertex)

###### Argument
> String

###### Return
> Object

###### Examples
```js
const M=require('mathball');
const g=new M.Graph(1);
console.log(g.addVertex('A'));   // Graph { noOfVertices: 1, Adjlist: Map { 'A' => [] } }

const g1=new M.Graph(3);
const vertices = [ 'A', 'B', 'C' ];
for (var i = 0; i < vertices.length; i++) { 
    g1.addVertex(vertices[i]); 
} 
console.log(g1);   // Graph { noOfVertices: 3, Adjlist: Map { 'A' => [], 'B' => [], 'C' => [] } }

const g2=new M.Graph(4);
const vertices1 = [ 1,2,3,4];
for (var i = 0; i < vertices1.length; i++) { 
    g2.addVertex(vertices1[i]); 
} 
console.log(g2);   //  // Graph { noOfVertices: 4, Adjlist: Map { 1 => [], 2 => [], 3 => [], 4 => [] } }
```

###### Info
Implemented using JavaScript's built-in `set` function.

------

###### Syntax
> g.addEdge(source, destination)

###### Arguments
> String

###### Return
> Number

###### Examples
```js
const g=new M.Graph(3);
const vertices = [ 'A', 'B', 'C' ];
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
g.addEdge('A', 'B'); 
g.addEdge('B', 'C'); 
g.addEdge('C', 'A'); 
console.log(g);   //  Graph { noOfVertices: 3, Adjlist: Map { 'A' => [ 'B' ], 'B' => [ 'C' ], 'C' => [ 'A' ] } }
```

###### Info
Implemented using JavaScript's built-in `get` and `push` functions.

------

###### Syntax
> g.printGraph()

###### Arguments
> None

###### Return
> Object

###### Examples
```js
const g=new M.Graph(3);
const vertices = [ 'A', 'B', 'C' ];
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
g.addEdge('A', 'B'); 
g.addEdge('B', 'C'); 
g.addEdge('C', 'A'); 
console.log(g.printGraph());   //  Map { 'A' => [ 'B' ], 'B' => [ 'C' ], 'C' => [ 'A' ] }
```

------

###### Syntax
> g.removeVertex(vertex)

###### Argument
> String

###### Return
> Boolean

###### Examples
```js
const g=new M.Graph(4);
const vertices = [ 'A', 'B', 'C', 'D' ];
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
g.addEdge('A', 'B'); 
g.addEdge('B', 'C'); 
g.addEdge('C', 'D'); 
console.log(g.printGraph());   //  Map { 'A' => [ 'B' ], 'B' => [ 'C' ], 'C' => [ 'D' ], 'D' => [] }
console.log(g.removeVertex('A'));   //  true
g.removeVertex('B');
console.log(g.printGraph());   //  Map { 'C' => [ 'D' ], 'D' => [] }


const g=new M.Graph(3);
console.log(g.removeVertex('A'));   // Empty Graph
```

###### Info
Implemented using JavaScript's built-in `delete` function.

------

###### Syntax
> g.removeEdge(vertexName, edgeName)

###### Arguments
> String

###### Return
> String

###### Examples
```js
const g=new M.Graph(4);
const vertices = [ 'A', 'B', 'C', 'D' ];
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
g.addEdge('A', 'B'); 
g.addEdge('B', 'C'); 
g.addEdge('C', 'D'); 
g.addEdge('D', 'A'); 
console.log(g.printGraph());   //  Map { 'A' => [ 'B' ], 'B' => [ 'C' ], 'C' => [ 'D' ], 'D' => [ 'A' ] }
console.log(g.removeEdge('A', 'B'));   //  B
g.removeVertex('A');
console.log(g.printGraph());   //  Map { 'B' => [ 'C' ], 'C' => [ 'D' ], 'D' => [ 'A' ] }

console.log(g.removeEdge('E', 'B'));   //  Vertex does not exist in the Graph
console.log(g.removeEdge('E', 1));   //  Vertex does not exist in the Graph
console.log(g.removeEdge('B', 'D'));   //  Edge not found!
console.log(g.removeEdge('B', 9));   //  Edge not found!
```

###### Info
Implemented using JavaScript's built-in `get`, `indexOf`, `toString` and `splice` function.

------

###### Syntax
> g.bfs(startNode)

###### Arguments
> String

###### Return
> Object

###### Examples
```js
const g=new M.Graph(4);
const vertices = [ 'A', 'B', 'C', 'D' ];
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
g.addEdge('A', 'B'); 
g.addEdge('B', 'C'); 
g.addEdge('C', 'D'); 
g.addEdge('D', 'A'); 
console.log(g.printGraph());   //  Map { 'A' => [ 'B' ], 'B' => [ 'C' ], 'C' => [ 'D' ], 'D' => [ 'A' ] }
console.log(g.bfs('A'));   //  [ 'A', 'B', 'C', 'D' ]
console.log(g.bfs('B'));   //  [ 'B', 'C', 'D', 'A' ]
console.log(g.bfs('D'));   //  [ 'D', 'A', 'B', 'C' ]
console.log(g.bfs('E'));   //  Node doesn't exist in the Graph
```
###### Info
Implemented using JavaScript's built-in `from`, `keys`, `includes`, `push`,  and `shift` function.


###### Syntax
> g.dfs(startNode)

###### Arguments
> String

###### Return
> Object

###### Examples
```js
const g=new M.Graph(4);
const vertices = [ 'A', 'B', 'C', 'D' ];
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
g.addEdge('A', 'B'); 
g.addEdge('B', 'C'); 
g.addEdge('C', 'D'); 
g.addEdge('D', 'A'); 
console.log(g.printGraph());   //  Map { 'A' => [ 'B' ], 'B' => [ 'C' ], 'C' => [ 'D' ], 'D' => [ 'A' ] }
console.log(g.dfs('A'));   //  [ 'A', 'B', 'C', 'D' ]
console.log(g.dfs('B'));   //  [ 'B', 'C', 'D', 'A' ]
console.log(g.dfs('D'));   //  [ 'D', 'A', 'B', 'C' ]
console.log(g.dfs('E'));   //  Node doesn't exist in the Graph
```
###### Info
Implemented using JavaScript's built-in `from`, `keys`, `includes`, `push`,  and `shift` function.

------
