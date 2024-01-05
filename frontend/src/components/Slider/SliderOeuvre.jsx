import React from "react";
import Slider from "react-slick";
import Oeuvre from "../Oeuvre";
import "./sliderOeuvre.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderOeuvre({ products }) {
  return (
    <div className="containerSlider">
      <div className="containtSlider">
        <Slider
          infinite="true"
          slidesToShow={3}
          slidesToScroll={3}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              },
            },
          ]}
        >
          {products.map((product) => (
            <div key={product.id}>
              <Oeuvre product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderOeuvre;
