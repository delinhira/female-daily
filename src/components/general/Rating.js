import React from "react";
import StarsRating from "stars-rating";

const Rating = ({ value = 4.5 }) => {
  return (
    <div className="rating">
      <p className="rating-value">{value}</p>
      <StarsRating
        count={5}
        value={value}
        size={22}
        color1={"#9b9b9b"}
        color2={"#db284e"}
        edit={false}
        half={false}
      />
      <p className="rating-count">({Math.ceil(value)})</p>
    </div>
  );
};

export default Rating;
