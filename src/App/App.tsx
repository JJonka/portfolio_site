import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Work from "../pages/Work/Work";
import "./App.css";

const App = () => (
  <div>
    <div className="mainBackground" />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default App;
