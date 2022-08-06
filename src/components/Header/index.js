import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Welcome</Link>
      <Link to="/Survery">Questions</Link>
      <Link to="/Freelancers">Freelancers</Link>
    </nav>
  );
}

export default Header;
