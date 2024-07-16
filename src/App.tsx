import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";



const App = () => {
  return (
    // <div className="">
      <div className="xl:container xl:mx-auto ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
