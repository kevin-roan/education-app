import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";

function Header() {
  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/",
      display: "Services",
    },
    {
      path: "/",
      display: "Courses",
    },
    {
      path: "/",
      display: "About Us",
    },
  ];
  return (
    <header className="header">
      <div className="container">
        <div className="nav_container">
          <div className="logo">
            <div className="logo-img">
              <img src={logo} alt="" />
            </div>
            <h2>LudanEducations</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav_titles.map((item) => (
                <li className="nav_item">{item.display}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
