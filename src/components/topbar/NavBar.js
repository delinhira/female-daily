import React from "react";

const NavBar = () => {
  const menus = [
    "Skincare",
    "Make up",
    "Body",
    "Hair",
    "Fragrance",
    "Nails",
    "Tools",
    "Brands",
  ];

  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu-list">
          {menus.map((menu, index) => (
            <li key={index} className="menu">
              <a href="#" className="link">
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
