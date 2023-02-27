import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Pdf from "./components/Pdf";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/pdf" element={<Pdf />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
