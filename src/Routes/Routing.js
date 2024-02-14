import React from "react";
import { Route, Routes } from "react-router-dom";
import ImageGenerator from "../Tools/ImageGenerator/ImageGenerator ";
import PxToRemConverter from "../Tools/PxToRemConverter/PxToRemConverter";

export const Routing = () => {
  return (
    
      <Routes>
        <Route path="/" element={<PxToRemConverter/>} />
        <Route path="/features" element={<ImageGenerator/>} />
      </Routes>
  );
};
