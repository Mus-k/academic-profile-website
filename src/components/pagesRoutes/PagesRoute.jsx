import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../home/Home";
import { Teaching } from "../routes/Teaching";
import { Research } from "../routes/Research";
import { AnimatePresence } from "framer-motion";
export const Pages = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
