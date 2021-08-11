import React from "react";
import logo from "../../assets/images/female-daily/female-daily-logo.png";
import search from "../../assets/images/icons/search-icon.png";
import user from "../../assets/images/icons/user-icon.png";
import menu from "../../assets/images/icons/menu-1-icon.png";
import { connect } from "react-redux";
import { toggleLeftMenu } from "../../redux/leftMenu/actions";

const SearchBar = ({ toggleLeftMenu }) => {
  return (
    <div className="search-bar">
      <div className="container">
        <button className="left-menu-button" onClick={toggleLeftMenu}>
          <img src={menu} alt="" />
        </button>
        <img src={logo} alt="" className="logo" />
        <div className="search-input">
          <img src={search} alt="" />
          <input placeholder="Seach products, articles, topics, brands, etc" />
        </div>
        <button className="btn-pink login">
          <img src={user} alt="" />
          Login / Signup
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { toggleLeftMenu: () => dispatch(toggleLeftMenu()) };
};

export default connect(null, mapDispatchToProps)(SearchBar);
