import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Categories from "./components/categories";
import {
  Educational,
  Recreational,
  Social,
  DIY,
  Charitable,
  Cooking,
  Relaxation,
  Musical,
  Busywork
} from "./categoryPages/index";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/activity-generator/" element={<Header />}></Route>
        <Route path="/activity-generator/categories" element={<Categories />}></Route>
        <Route path="/activity-generator/categories/educational" element={<Educational />}></Route>
        <Route path="/activity-generator/categories/recreational" element={<Recreational />}></Route>
        <Route path="/activity-generator/categories/social" element={<Social />}></Route>
        <Route path="/activity-generator/categories/diy" element={<DIY />}></Route>
        <Route path="/activity-generator/categories/charity" element={<Charitable />}></Route>
        <Route path="/activity-generator/categories/cooking" element={<Cooking />}></Route>
        <Route path="/activity-generator/categories/relaxation" element={<Relaxation />}></Route>
        <Route path="/activity-generator/categories/music" element={<Musical />}></Route>
        <Route path="/activity-generator/categories/busywork" element={<Busywork />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
