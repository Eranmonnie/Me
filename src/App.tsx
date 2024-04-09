import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Details from "./pages/Details";

const App = () => {
  return (
    <div className=" p-[0.80rem] md:px-[3rem] md:py-[2rem]">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<Details />} />
      </Routes>
    
    </div>
  );
};

export default App;
