import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactFlowProvider } from "@xyflow/react";
import "./tailwind.css";
import "./global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  </React.StrictMode>
);
