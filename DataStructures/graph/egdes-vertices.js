// edges list + vertices list

const vertices = ["A", "B", "C", "D", "E"];

const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

const findAdjacentNodes = (node) => {
  const adjacentNodes = [];

  for (let edge of edges) {
    const nodeIndex = edge.indexOf(node);
    if (nodeIndex > -1) {
      const adjacentNode = nodeIndex === 0 ? edge[1] : edge[0];
      adjacentNodes.push(adjacentNode);
    }
  }

  return adjacentNodes;
};

const isConnected = (node1, node2) => {
  return edges.some((edge) => {
    return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
  });
};

console.log(isConnected("A", "E"));

for (let vertex of vertices) {
  const nodes = findAdjacentNodes(vertex);
  console.log(vertex + " => " + nodes);
}
