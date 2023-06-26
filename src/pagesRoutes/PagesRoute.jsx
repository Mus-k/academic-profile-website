import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Research } from "../components/routes/Research";
import { Teaching } from "../components/routes/Teaching";
import { AnimatePresence } from "framer-motion";
import Intro from "../components/home/Intro";
export const Pages = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Intro />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
