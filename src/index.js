import React from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import Path from "./Path";
import "./sass/style.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Path} />
);