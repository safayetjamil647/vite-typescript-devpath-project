
import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";
function Navbar() {

    const [isActive, setActive] = useState("");
    const[isHover,setHover]=useState("");
    const toggleMenu = () => {
        setActive(isActive === "" ? "active" : "");
        setHover(isHover=== ""? "block":"")
      }
  return (
    <section className="navigation">
    <div className="nav-container">
      <div className="brand">
        <Link to="/">🍀 Dev Path</Link>
      </div>
      <nav>
    <div className="nav-mobile">
      <a id="nav-toggle" onClick={toggleMenu} className={`${isActive}`} ><span></span></a>
    </div>
    <ul className={`nav-list ${isHover}` }>
      <li><Link to="/">Home</Link></li>
      <li><a href="/generate">Generate</a></li>
      <li>
        <a href="#!">Services</a>
        <ul className="nav-dropdown">
          <li><a href="#!">Web Design</a></li>
          <li><a href="#!">Web Development</a></li>
          <li><a href="#!">Graphic Design</a></li>
        </ul>
      </li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
      </div>
  </section>
  );
}

export default Navbar;