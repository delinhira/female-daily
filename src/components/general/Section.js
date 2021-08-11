import React from "react";

const Section = ({ title, subtitle, children, seeMore, black }) => {
  return (
    <div className="section">
      <h1 className="section-title">{title}</h1>
      <div className="section-header">
        {subtitle && (
          <h2 className={`section-subtitle ${black ? "black" : ""}`}>
            {subtitle.split("<br />")}
          </h2>
        )}
        {seeMore && (
          <a href="#" className="see-more">
            See more &gt;
          </a>
        )}
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default Section;
