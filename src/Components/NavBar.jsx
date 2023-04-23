import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="site-title" to="/">
        Yuval Kamani
      </Link>
      <ul>
        <li>
          <Link to="/">home</Link>
          <Link to="/projects">projects</Link>
          <Link to="/experience">experience</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
