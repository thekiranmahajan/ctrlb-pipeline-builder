import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  { id: "1", data: { label: "source" }, position: { x: -400, y: 50 } },
  { id: "2", data: { label: "destination" }, position: { x: 400, y: 50 } },
];

const edges = [{ id: "1-2", source: "1", target: "2" }];

const App = () => {
  return (
    <div className="h-screen w-screen ">
      <ReactFlow nodes={nodes} edges={edges}>
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default App;
