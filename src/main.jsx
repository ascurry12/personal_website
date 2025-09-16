import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import NotFound from "../src/Routes/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<App />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
);
