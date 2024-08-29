// @ts-nocheck
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import { ReactFlowProvider } from "@xyflow/react";
import "./tailwind.css";
import "./global.scss";

/* This will be part of the charts/viz standard lib in 23.1 */
const slashCleanup = /(\/)+/g;
function prefixedDownloadUrl(root, path) {
  return `${root}/${path}`.replace(slashCleanup, "/");
}

window.bundleEntries = window.bundleEntries || {};
window.bundleEntries.load = function (options) {
  const dataset = options.dataset;
  const settings = options.chart.settings;
  const explorer = settings.get("explorer");
  const url =
    window.location.origin +
    prefixedDownloadUrl(
      options.root,
      "/api/datasets/" + dataset.id + "/content"
    );
  const root = createRoot(document.getElementById(options.target));
    root.render(
      <React.StrictMode>
        <ReactFlowProvider>
          <App />
        </ReactFlowProvider>
      </React.StrictMode>
    );
  options.chart.state("ok", "Chart drawn.");
  options.process.resolve();
};



