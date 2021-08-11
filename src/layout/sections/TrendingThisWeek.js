import React from "react";
import ProductCard from "../../components/cards/ProductCard";
import Carousel from "../../components/general/Carousel";
import Section from "../../components/general/Section";

const TrendingThisWeek = () => {
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
    <Section
      title="Trending This Week"
      subtitle="See our weekly most reviewed products"
    >
      <div className="flex-between">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            desc={product.desc}
          />
        ))}
      </div>
      <Carousel />
    </Section>
  );
};

export default TrendingThisWeek;
