import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";



const App = () => {
  return (

    <div className="bg-black w-full flex items-center justify-center">
      <div className="max-w-[754px] min-h-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>


  );
};

export default App;
