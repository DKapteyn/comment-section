import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainContextProvider } from "./mainContext";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </StrictMode>
);
