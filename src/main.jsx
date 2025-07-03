import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./Contexts/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <TaskProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TaskProvider>
);
