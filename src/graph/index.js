class Graph{
    constructor(vertices){
        this.noOfVertices = vertices;
        this.Adjlist = new Map();
    }

    addVertex(vertexData){
        return this.Adjlist.set(vertexData, []);
    }

    addEdge(source, destination){
        return this.Adjlist.get(source).push(destination);
    }

    printGraph(){
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

            for(let i = 0; i < getList.length; i++){

                let neighbour = getList[i];

                if(!visited[neighbour]){

                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            }
        }
        return output;
    }


dfs(startNode)
{

	if(!Array.from(this.Adjlist.keys()).includes(startNode))
	{
            return "Node doesn't exist in the Graph";
	}
	let visited = [];
	let output = [];

	for (let i = 0; i < this.noOfVertices; i++){
		visited.push(false);
	}

	this.dfsRec(startNode, visited, output);

	return output;
}

dfsRec(vert, visited, output)
{
	visited[vert] = true;
	output.push(vert);

	var getNeighbours = this.Adjlist.get(vert);

	if(getNeighbours.length > 0)
	{

		for (let i=0; i<getNeighbours.length; i++) {
		var getElem = getNeighbours[i];
		if (!visited[getElem]){
			this.dfsRec(getElem, visited, output);
		}

	}
	}

}


}

module.exports = Graph;
