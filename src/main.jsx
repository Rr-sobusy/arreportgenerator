import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Form from "./Form.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/app" />
        <Route element={<Form />} path="*" />
        <Route element={<Form />} path="/inputform" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
