import React from "react";
import { BrowserRouter as RouterProvider, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FacilityList from "../pages/FacilityList";
import NotFound404 from "../pages/NotFound404";

export default function Router() {
  return (
    <RouterProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility/:title" element={<FacilityList />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </RouterProvider>
  );
}