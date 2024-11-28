import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";

createRoot(document.querySelector("#root") ?? new Element()).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
