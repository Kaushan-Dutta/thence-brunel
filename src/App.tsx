import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Register from "./page/Register";

const App = () => {
  return (
    <div className="w-screen min-h-screen font-manrope md:px-[4rem] py-[1rem] px-[1rem] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
