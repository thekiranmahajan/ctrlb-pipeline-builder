import React from "react";

const AddNodesMenu = ({ setNodes }) => {
  const getRandomX = (base, variance) => {
    return base + Math.floor(Math.random() * variance * 2) - variance;
  };
  const getRandomY = () => Math.floor(Math.random() * 500);

  const addSourceNode = () => {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        position: { x: getRandomX(-600, 50), y: getRandomY() },
        data: { title: `Source ${prevNodes.length + 1}` },
        type: "source-node",
      },
    ]);
  };

  const addDestinationNode = () => {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        position: { x: getRandomX(600, 50), y: getRandomY() },
        data: { title: `Destination ${prevNodes.length + 1}` },
        type: "destination-node",
      },
    ]);
  };
  return (
    <div className="fixed z-10 flex w-full items-center justify-center gap-4 p-2">
      <button
        onClick={addSourceNode}
        className="bg-slate-700 h-10 w-36 text-white rounded-lg flex items-center justify-center gap-3 active:scale-95 hover:bg-slate-900 transition-all duration-200"
      >
        <span className="font-semibold text-2xl">+</span>Add Source
      </button>
      <button
        onClick={addDestinationNode}
        className="bg-slate-700 h-10 w-44 text-white rounded-lg flex items-center justify-center gap-3 active:scale-95 hover:bg-slate-900 transition-all duration-200"
      >
        <span className="font-semibold text-2xl">+</span>Add Destination
      </button>
    </div>
  );
};

export default AddNodesMenu;
