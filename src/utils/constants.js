import { DestinationNode, SourceNode } from "../components";

export const initialNodes = [
  {
    id: "1",
    position: { x: -1000, y: 100 },
    data: { title: "Source 1" },
    type: "sourceNode",
  },
  {
    id: "3",
    position: { x: -1000, y: 500 },
    data: { title: "Source 2" },
    type: "sourceNode",
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { title: "Destinaton 1" },
    type: "destinationNode",
  },
];

export const initialEdges = [];

export const nodeTypes = {
  sourceNode: SourceNode,
  destinationNode: DestinationNode,
};
