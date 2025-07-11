import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import "./App.css";
import { TaskProvider } from "./Contexts/TaskContext";
import Blogs from "./pages/Blogs";
const App = () => {
  function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/tasks" className="nav-link">
          Tasks
        </Link>
        <Link to="/blogs" className="nav-link">
          Blogs
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
    );
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default App;
