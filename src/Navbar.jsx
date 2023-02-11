import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar--container">
          <Link to="/" className="navbar--logo">
            Joshua Edo
          </Link>
          <Link to="/stacks" className="">
            Stacks
          </Link>
          <Link to="/projects" className="">
            Projects
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
