import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Images from "./Images";

function Carousel() {
  return (
    <div className="content">
      <h1 className="header">Car Gallery</h1>
      <div className="container">
        <Slider
          dots="true"
          infinite="true"
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay="true"
          autoplaySpeed={1000}
        >
          {Images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
