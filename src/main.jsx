import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Handle client-side routing for GitHub Pages
// If the URL has a query parameter starting with /, use it as the path
const path = window.location.search.slice(1);
if (path && path.startsWith("/")) {
  window.history.replaceState(null, "", path);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
