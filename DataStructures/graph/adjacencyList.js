class Node {
  constructor(id, condition) {
    this.id = id;
    this.connectedTo = [];
    this.condition = condition;
    this.value = "";
  }

  connectNode(node) {
    this.connectedTo.push(node.id);
  }
  changeValue(value) {
    this.value = value;
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addNode(node) {
    this.nodes.push(node);
  }
}

const nodeA = new Node("A");
const nodeB = new Node("B", "Avalue1");
const nodeC = new Node("C", "Avalue2");
const nodeD = new Node("D", "Bvalue3");
const nodeE = new Node("E", "Cvalue4");

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);
nodeA.connectNode(nodeB);
nodeA.connectNode(nodeC);
nodeB.connectNode(nodeD);
nodeC.connectNode(nodeE);

nodeA.changeValue("Avalue1");
nodeB.changeValue("Bvalue3");

console.log("Node : ", nodeA);
console.log("Graph : ", JSON.stringify(graph, null, 4));
