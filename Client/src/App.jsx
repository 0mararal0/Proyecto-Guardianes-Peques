import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/Home";
import { NavbarApp } from "./components/NavbarApp/NavbarApp";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
