import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/Home";
import { NavbarApp } from "./components/NavbarApp/NavbarApp";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/About/About";
import { Filter } from "./pages/Filter/Filter";
import { FilterClient } from "./pages/Filter/FilterClient";
import { FilterGuardian } from "./pages/Filter/FilterGuardian";

function App() {
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/filterClient" element={<FilterClient />} />
        <Route path="/filterGuardian" element={<FilterGuardian />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
