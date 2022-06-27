import React from "react";
import Homepage from "./components/Homepage";
import Keyboards from "./components/Keyboards";
import Headphones from "./components/Headphones";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Homepage /> */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/Keyboards" element={<Keyboards />} />
        <Route exact path="/Headphones" element={<Headphones />} />
      </Routes>
    </>
  );
}

export default App;
