import { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink,  useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage.jsx";
import DronePage from "./DronePage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><NavLink to="/">LOSS OF COLOR</NavLink></li>
          <li><NavLink to="/drone">DRONE EXPERIENCE</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drone" element={<DronePage />} />
      </Routes>
    </BrowserRouter>
  );
}