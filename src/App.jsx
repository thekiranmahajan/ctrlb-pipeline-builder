import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  initialNodes,
  initialEdges,
  nodeTypes,
  edgeTypes,
} from "./utils/constants";

const App = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((prevNodes) => applyNodeChanges(changes, prevNodes)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((prevEdges) => applyEdgeChanges(changes, prevEdges)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length + 1}`,
        type: "customEdge",
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [setEdges]
  );

  return (
    <div className="h-screen w-full font-spaceGrotesk">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default App;
