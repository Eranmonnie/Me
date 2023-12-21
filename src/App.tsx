import React from "react";
import { Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
