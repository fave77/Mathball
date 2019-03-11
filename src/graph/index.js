class Graph{
    constructor(vertices){
        this.noOfVertices = vertices;
        this.Adjlist = new Map();
    }

    addVertex(vertexData){
        this.Adjlist.set(vertexData, []);
    }

    addEdge(source, destination){
        this.Adjlist.get(source).push(destination);
    }

    printGraph(){
        let keys = this.Adjlist.keys();

        for(let i of keys)
        {
            let values = this.Adjlist.get(i);
            let conc = "";

            for(let j of values){
                conc += j + " ";
            }
            console.log(i + " -> " + conc);
        }
        return this.Adjlist;
    }

    removeVertex(vertexName){
        if(this.Adjlist.size === 0)
        {
            return "Empty Graph";
        }
        else{
            return this.Adjlist.delete(vertexName);
        }
    }

    removeEdge(vertexName, edgeName){
        
        if(this.Adjlist.size === 0)
        {
            return "Empty Graph";
        }
        
        if(!this.Adjlist.get(vertexName))
        {
            return "Vertex does not exist in the Graph";
        }
        
        let location = this.Adjlist.get(vertexName).indexOf(edgeName);

        if(location === -1){
            return "Edge not found!";
        }
        else{
            return this.Adjlist.get(vertexName).splice(location, 1).toString();
        }
        
    }

    bfs(startNode){
        
        if(!Array.from(this.Adjlist.keys()).includes(startNode)){
            return "Node doesn't exist in the Graph";
        }
        let visited = [];
        let output = new Array();

        for(let i = 0; i < this.noOfVertices; i++){
            visited.push(false);
        }
        let queue = [];

        visited[startNode] = true;
        queue.push(startNode);

        while(queue.length > 0){
            let getQueueElement = queue.shift();
            output.push(getQueueElement);
            
            let getList =  this.Adjlist.get(getQueueElement);

            for(let i in getList){
                
                let neighbour = getList[i];
                
                if(!visited[neighbour]){
                    
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            }
        }
        return output;
    }
}

module.exports = Graph;