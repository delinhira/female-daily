import React from "react";
import Rating from "../general/Rating";

const ProductCard = ({
  image,
  star,
  name,
  desc,
  tone,
  recommendation,
  padding = false,
  border = false,
}) => {
  return (
    <div
      className={`product-card ${padding ? "padding" : ""} ${
        border ? "border" : ""
      }`}
    >
      <img src={image} alt={image} className="product-image" />
      {recommendation && (
        <a href="#" className="recommendation">
          Match Skin Type
        </a>
      )}
      <Rating value={star} />
      <a href="#" className="name">
        {name}
      </a>
      <p className="description">{desc}</p>
      {tone && <p className="tone">{tone}</p>}
    </div>
  );
};

export default ProductCard;
