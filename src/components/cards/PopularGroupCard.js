import React from "react";
import icon1 from "../../assets/images/icons/user-female-icon.png";
import icon2 from "../../assets/images/icons/list-1-icon.png";
import icon3 from "../../assets/images/icons/dialogue-1-icon.png";
import Image from "../general/Image";

const PopularGroupCard = ({ image, title, desc }) => {
  return (
    <div className="popular-group-card">
      <Image src={image} className="popular-group-image" />
      <p className="h1">{title}</p>
      <div className="popular-group-icons">
        <a href="#">
          <img src={icon1} alt="" />
        </a>
        <a href="#">
          <img src={icon2} alt="" />
        </a>
        <a href="#">
          <img src={icon3} alt="" />
        </a>
      </div>
      <p className="popular-group-desc">{desc}</p>
    </div>
  );
};

export default PopularGroupCard;
