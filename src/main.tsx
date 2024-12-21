import { StrictMode } from "react";
import App from "./App";
import { Provider } from "./components/ui/provider";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
