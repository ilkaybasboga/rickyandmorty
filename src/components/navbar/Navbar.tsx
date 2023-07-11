import "./Navbar.scss";
import randm from "../../asset/58f37720a4fa116215a9240f.png";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <img src={randm} alt="R&M" />
    </div>
  );
};

export default Navbar;