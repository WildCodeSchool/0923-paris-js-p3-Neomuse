import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderArtist.css";
import ArtistlistHome from "../ArtistListHome";
import useAllDataContext from "../../contexts/AllDataContext";

function SliderArtist() {
  const { artists } = useAllDataContext();
  return (
    <div className="container-artists">
      <div className="contain-artists">
        <Slider
          dots="true"
          infinite="true"
          speed="500"
          slidesToShow={3}
          slidesToScroll={3}
          autoplay="true"
          autoplaySpeed={3000}
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
          {artists.map((artist) => (
            <div key={artist?.id}>
              <ArtistlistHome artist={artist} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderArtist;
