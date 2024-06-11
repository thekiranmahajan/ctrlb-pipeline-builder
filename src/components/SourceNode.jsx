import React from "react";
import arrowImg from "../assets/arrow.svg";
const SourceNode = ({ data: { title } }) => {
  return (
    <div className="h-20 w-44 border border-black rounded-md p-1 flex gap-2">
      <div className="bg-gray-300 h-full w-5 rounded-sm flex items-center justify-center ">
        <img className="h-4 w-10" src={arrowImg} alt="arrow-to-right" />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="-mt-1 font-bold">{title}</h3>
        <h5 className="mt-auto ml-auto">Source</h5>
      </div>
    </div>
  );
};

export default SourceNode;
