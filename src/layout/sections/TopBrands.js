import React from "react";
import Section from "../../components/general/Section";
import logo1 from "../../assets/images/brands/nivea-logo.png";
import logo2 from "../../assets/images/brands/the-ordinary-logo.png";
import logo3 from "../../assets/images/brands/the-body-shop-logo.png";
import logo4 from "../../assets/images/brands/sk-ii-logo.jpg";
import logo5 from "../../assets/images/brands/maybelline-logo.png";
import logo6 from "../../assets/images/brands/innisfree-logo.png";

const TopBrands = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <Section title="Top Brands" subtitle="We all know and love" seeMore>
      <div className="top-brand">
        {logos.map((logo, index) => (
          <a key={index} href="#">
            <div className="brand-container">
              <img src={logo} alt={logo} className="brand-logo" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default TopBrands;
