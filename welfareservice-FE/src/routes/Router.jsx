import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FacilityList from "../pages/FacilityList";
import NotFound404 from "../pages/NotFound404";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/FacilityList" element={<FacilityList />} />
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}