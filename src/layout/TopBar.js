import React from "react";
import NavBar from "../components/topbar/NavBar";
import SearhBar from "../components/topbar/SearchBar";

const TopBar = () => {
  return (
    <div className="topbar">
      <SearhBar />
      <NavBar />
    </div>
  );
};

export default TopBar;
