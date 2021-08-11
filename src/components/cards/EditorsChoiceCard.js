import React from "react";
import ProductCard from "./ProductCard";
import user from "../../assets/images/icons/user-3-icon.png";

const EditorsChoiceCard = ({ editor, role, product }) => {
  return (
    <div className="editors-choice-card">
      <div className="editor-info">
        <img src={user} alt="" className="editor-picture" />
        <div className="editor-data">
          <p className="editor-name">{editor}</p>
          <p className="editor-title">{role}</p>
        </div>
      </div>
      <ProductCard
        image={product.image}
        name={product.name}
        desc={product.description}
        star={product.rating}
        padding
        border
      />
    </div>
  );
};

export default EditorsChoiceCard;
