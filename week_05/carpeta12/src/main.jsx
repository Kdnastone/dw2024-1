import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/global.scss";

import Home from "../Home";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
//Ok