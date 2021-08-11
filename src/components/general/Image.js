import React, { useEffect, useState } from "react";
import FemaleDaily from "../../assets/images/female-daily/female-daily-logo.png";

const Image = ({ src, position, size, className, children }) => {
  const [validImage, setValidImage] = useState(false);

  useEffect(() => {
    checkImage(src);
  }, [src]);

  const checkImage = async (image) => {
    fetch(image)
      .then((res) => {
        if (res.status === 200) return setValidImage(true);
        setValidImage(false);
      })
      .catch(() => setValidImage(false));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${validImage ? src : FemaleDaily} )`,
        backgroundPosition: position ? position : "center",
        backgroundSize: !validImage ? "auto" : size ? size : "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`${className}`}
    >
      {children}
    </div>
  );
};

export default Image;
