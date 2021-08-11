import React from "react";
import brush from "../../assets/images/others/brush.gif";

export const NoData = () => {
  return <p className="no-data">No Data</p>;
};

export const Loading = () => {
  return <img className="loading" src={brush} alt="" />;
};
