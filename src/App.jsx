import React from "react";
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

import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />}></Route>
        <Route exact path="/categories" element={<Categories />}></Route>
        <Route path="/educational" element={<Educational />}></Route>
        <Route path="/recreational" element={<Recreational />}></Route>
        <Route path="/social" element={<Social />}></Route>
        <Route path="/diy" element={<DIY />}></Route>
        <Route path="/charity" element={<Charitable />}></Route>
        <Route path="/cooking" element={<Cooking />}></Route>
        <Route path="/relaxation" element={<Relaxation />}></Route>
        <Route path="/music" element={<Musical />}></Route>
        <Route path="/busywork" element={<Busywork />}></Route>
      </Routes>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>
    </Router>
  );
}

export default App;
