import { DestinationNode, SourceNode } from "../components";

export const initialNodes = [
  {
    id: "1",
    position: { x: -100, y: 100 },
    data: { label: "source" },
    type: "source",
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "Destinaton" },
    type: "destination",
  },
];

export const initialEdges = [];

export const nodeTypes = {
  sourceNode: SourceNode,
  destinationNode: DestinationNode,
};
