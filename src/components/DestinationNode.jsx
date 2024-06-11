import React from "react";
import arrowImg from "../assets/arrow.svg";
import { Handle, Position } from "reactflow";

const DestinationNode = ({ data: { title } }) => {
  return (
    <div className="h-20 w-44 border border-black rounded-md p-1 flex gap-2">
      <div className="flex flex-col flex-grow">
        <h3 className="-mt-1 self-end font-bold">{title}</h3>
        <h5 className="mt-auto mr-auto">Destination</h5>
      </div>
      <div className="bg-gray-300 h-full w-5 rounded-sm flex items-center justify-center ">
        <img
          className="h-4 w-10 rotate-180"
          src={arrowImg}
          alt="arrow-to-right"
        />
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="bg-lime-400 -left-[0.4rem] h-8 w-1 rounded-none outline-none border-none"
      />
    </div>
  );
};

export default DestinationNode;
