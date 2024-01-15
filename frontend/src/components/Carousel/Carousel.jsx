import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import ArtistlistHome from "../ArtistListHome";
import useAllDataContext from "../../contexts/AllDataContext";

function Carousel() {
  const [artists] = useAllDataContext();
  return (
    <div className="content">
      <h1 className="header">Des artistes uniques</h1>
      <div className="container">
        <Slider
          dots="true"
          infinite="true"
          speed="500"
          slidesToShow={1}
          slidesToScroll={1}
          autoplay="true"
          autoplaySpeed={3000}
        >
          {artists?.map((artist) => (
            <div key={artist?.id}>
              <ArtistlistHome artist={artist} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
