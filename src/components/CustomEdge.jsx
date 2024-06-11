import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import crossImg from "../assets/cross.svg";

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  targetPosition,
  sourcePosition,
}) => {
  const { setEdges } = useReactFlow();
  const handleEdgeDelete = () => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge?.id !== id));
  };
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
    sourcePosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />

      <EdgeLabelRenderer>
        <button
          className="h-8 w-8 absolute opacity-30 scale-95 hover:opacity-100 hover:scale-100 transition-transform"
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          onClick={handleEdgeDelete}
        >
          <img
            className="h-full w-full object-contain"
            src={crossImg}
            alt="cross-image"
          />
        </button>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
