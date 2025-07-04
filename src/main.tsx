import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./Pages/Projects/ProjectDetail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  </StrictMode>
);
