import React from "react";

const Carousel = ({
  totalItem = 3,
  itemsPerPage = 2,
  activePage = 1,
  setActivePage = () => {},
}) => {
  const totalPage = Math.ceil(totalItem / itemsPerPage);
  const pages = new Array(totalPage).fill(0);

  const nextPage = () => {
    setActivePage((prevState) => (prevState === totalPage ? 1 : prevState + 1));
  };
  const prevPage = () => {
    setActivePage((prevState) => (prevState === 1 ? totalPage : prevState - 1));
  };
  const goToPage = (page) => {
    setActivePage(page);
  };

  return (
    <div className="carousel">
      <span
        className={`carousel-nav ${activePage === 1 ? "" : "active"}`}
        onClick={prevPage}
      >
        &#10094;
      </span>
      {pages.map((page, index) => (
        <span
          key={index}
          className={`carousel-nav bullet ${
            activePage === index + 1 ? "active" : ""
          }`}
          onClick={() => goToPage(index + 1)}
        ></span>
      ))}
      <span
        className={`carousel-nav ${activePage === totalPage ? "" : "active"}`}
        onClick={nextPage}
      >
        &#10095;
      </span>
    </div>
  );
};

export default Carousel;
