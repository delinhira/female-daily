import React from "react";
import banner from "../../assets/images/banner/recommendation-banner.png";
import ProductCard from "../../components/cards/ProductCard";
import Image from "../../components/general/Image";
import Section from "../../components/general/Section";

const Recommendation = () => {
  const products = [
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      name: "Y.O.U Makeups",
      desc: "Rouge Velvet Matte Lip Cream",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      name: "Y.O.U Makeups",
      desc: "Rouge Velvet Matte Lip Cream",
    },
    {
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      name: "Y.O.U Makeups",
      desc: "Rouge Velvet Matte Lip Cream",
    },
  ];

  return (
    <Image src={banner} className="recommendation-section">
      <Section>
        <div className="recommendation-container">
          <div className="recommendation-text">
            <h1>Looking for products that are just simply perfect for you?</h1>
            <h2 className="black">
              Here are some products that we believe match your skin, hair, and
              body! Have we mentioned that they solve your concerns too?
            </h2>
            <button className="btn-pink rounded">See My Matches</button>
          </div>
          {products.map((product, index) => (
            <ProductCard
              padding
              recommendation
              key={index}
              image={product.image}
              name={product.name}
              desc={product.desc}
              tone="Roisy Beige"
            />
          ))}
        </div>
      </Section>
    </Image>
  );
};

export default Recommendation;
