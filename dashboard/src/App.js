import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";
import "./App.css";

export default function App() {
  return (
    <>
      <div
        style={{
          margin: "5px",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "black"
        }}
      >
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/dashboard"> Dashboard </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
