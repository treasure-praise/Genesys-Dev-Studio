import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <img src="https://i.ibb.co/ZJ84BRV/Genesys-Logo.png" alt="genesys logo" />
      <ul>
        <li>
          {" "}
          <a href="#">LEARNABLE </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">AGORA </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#"> STARTZONE</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">ABOUT </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">CONTACT </a>{" "}
        </li>
      </ul>
      <p>
        build a product with <span>Devstudio</span>{" "}
      </p>
    </div>
  );
};

export default Navbar;
