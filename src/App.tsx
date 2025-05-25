import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";



const App = () => {
  return (

    <div className="bg-[#09090B]">
      <div className="max-w-[750px] mx-auto px-4 min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>


  );
};

export default App;
