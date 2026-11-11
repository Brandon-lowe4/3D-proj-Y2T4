import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage.jsx";
import DronePage from "./DronePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><a href="/#drone-experience">MENU</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drone" element={<DronePage />} />
      </Routes>
    </BrowserRouter>
  );
}