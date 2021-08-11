import React from "react";
import Image from "../general/Image";
import Rating from "../general/Rating";

const ReviewCard = ({ user, userImage, profile, product, star, comment }) => {
  return (
    <div className="review-card">
      <div className="product-detail">
        <div className="product-info">
          <img src={product.image} alt="" className="product-image" />
          <div className="product-data">
            <p className="product-name">{product.name}</p>
            <p className="product-desc">{product.desc}</p>
          </div>
        </div>
        <Rating value={star} />
        <p className="comment">
          {comment}{" "}
          <a href="#" className="read-more">
            Read More
          </a>
        </p>
      </div>
      <div className="user-info">
        {/* <img src={userImage} alt="" className="user-picture" /> */}
        <Image src={userImage} className="user-picture" />
        <p className="user-name">{user}</p>
        <p className="user-profile">{profile.join(", ")}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
