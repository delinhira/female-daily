import React from "react";
import Image from "../general/Image";

const ArticleCard = ({ title, author, image, published_at }) => {
  return (
    <div className="article-card">
      <a href="#">
        <Image src={image} className="article-image" />
      </a>
      <a href="#" className="article-title">
        {title}
      </a>
      <p className="author">
        {author} <span className="published-at">| {published_at}</span>
      </p>
    </div>
  );
};

export default ArticleCard;
