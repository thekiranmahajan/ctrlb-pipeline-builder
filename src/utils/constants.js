import { CustomEdge, DestinationNode, SourceNode } from "../components";

export const initialNodes = [
  {
    id: "1",
    position: { x: -1000, y: 100 },
    data: { title: "Source 1" },
    type: "source-node",
  },
  {
    id: "2",
    position: { x: -1000, y: 200 },
    data: { title: "Source 2" },
    type: "source-node",
  },
  {
    id: "3",
    position: { x: -1000, y: 300 },
    data: { title: "Source 3" },
    type: "source-node",
  },
  {
    id: "4",
    position: { x: 100, y: 100 },
    data: { title: "Destinaton 1" },
    type: "destination-node",
  },
  {
    id: "5",
    position: { x: 100, y: 400 },
    data: { title: "Destinaton 2" },
    type: "destination-node",
  },
];

export const initialEdges = [];

export const nodeTypes = {
  "source-node": SourceNode,
  "destination-node": DestinationNode,
};
export const edgeTypes = {
  "custom-edge": CustomEdge,
};
