import React from "react";

const Ads = ({ type, children }) => {
  return <div className={`ads-${type}`}>{children}</div>;
};

export default Ads;
