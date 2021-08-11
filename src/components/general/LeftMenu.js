import React from "react";
import { connect } from "react-redux";
import { closeLeftMenu } from "../../redux/leftMenu/actions";

const LeftMenu = ({ leftMenuIsOpen, closeLeftMenu }) => {
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
    <div className={`left-menu ${!leftMenuIsOpen ? "open" : ""}`}>
      <button className="collapse-left-menu" onClick={closeLeftMenu}>
        &#10094;
      </button>
      <ul className="navbar-menu-list">
        {menus.map((menu, index) => (
          <li key={index} className="menu">
            <button href="#" className="link">
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { leftMenuIsOpen: state.leftMenuIsOpen };
};

const mapDispatchToProps = (dispatch) => {
  return { closeLeftMenu: () => dispatch(closeLeftMenu()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
