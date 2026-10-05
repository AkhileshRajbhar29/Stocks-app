import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import TopNav from "./components/TopNav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <div style={{ flexShrink: 0 }}>
      <TopNav />
    </div>

    <div style={{ flex: 1, minWidth: 0 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);
