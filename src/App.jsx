import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import ErrorPage from "./ErrorPage"
import Navbar from "./Navbar";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;