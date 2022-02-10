import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CovidDex from "./pages/CovidDex";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CovidDex" element={<CovidDex />} />
    </Routes>
  </Router>
)

export default App
