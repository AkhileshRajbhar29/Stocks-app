import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import TopNav from "./components/TopNav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>

    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
      <div style={{ flexShrink: 0 }}>
        <TopNav />
      </div>

      <div style={{ flex: 1, minHeight: 0, overflow: "auto", position: "relative" }}>
        <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      </div>
    </div>
  </>
);
