

# Pipeline Builder Application

This project is a pipeline builder application built using React, Vite, Tailwind CSS, and ReactFlow. The application allows users to create, connect, and manage nodes representing sources and destinations in a visually interactive manner.

## Features

- **Add Nodes:** Users can add two types of nodes: Source nodes on the left and Destination nodes on the right.
- **Connect Nodes:** Users can connect Source nodes to Destination nodes by dragging from one node to another.
- **Connection Restrictions:** The application restricts connections such that two Source nodes or two Destination nodes cannot be connected to each other.
- **Delete Connections:** Users can click on a connection between two nodes to delete the connection.
- **Draggable Nodes:** Nodes can be dragged and repositioned anywhere on the screen.
- **Randomized Node Positioning:** New nodes are added at random Y-coordinates for varied placement.
- **Modular Code:** The code is organized into reusable components to ensure maintainability and scalability.
- **Standard Folder Structure:** The project follows a standard folder structure, enhancing clarity and organization.

## Installation

To run the application locally, follow these steps:

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/thekiranmahajan/ctrlb-pipeline-builder
   
   cd ./ctrlb-pipeline-builder
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Start the Development Server:**
   ```sh
   npm run dev
   ```

4. **Open in Browser:**
   Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast development build tool for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.
- **ReactFlow:** A library for building node-based applications and diagrams.

## Project Structure

The project follows a standard folder structure as outlined below:

```
/src
  /assets          # Images and other static assets
    arrow.svg
    cross.svg
  /components      # Reusable React components
    AddNodesMenu.jsx
    CustomEdge.jsx
    DestinationNode.jsx
    index.js
    SourceNode.jsx
  /utils           # Utility functions and constants
    constants.js
  App.jsx          # Main application component
  index.css        # Global styles
  main.jsx         # Entry point for React application
.gitignore
.eslintrc.cjs
index.html
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
```

## Additional Notes

- **Modular Code:** Each component is designed to be modular, making it easy to maintain and extend.
- **Reusability:** The components and utilities are designed with reusability in mind.
- **Tech Stack:** The project leverages modern web technologies such as React, Vite, Tailwind CSS, and ReactFlow to provide a seamless development experience and a performant application.

## Made with Love for React 💖

This application was crafted with a passion for React, leveraging modern development tools and best practices to deliver a smooth and intuitive user experience.

---

Feel free to contribute to this project or provide feedback to help improve it further!

**Note:** This project is part of an assignment and aims to demonstrate proficiency in React, Tailwind CSS, and related technologies.