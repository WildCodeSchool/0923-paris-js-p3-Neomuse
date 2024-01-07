import { Carousel } from "react-responsive-carousel";
import { Icon } from "@iconify/react";
import useAllDataContext from "../../contexts/AllDataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./carousel.css";

function Slider() {
  const { artworks } = useAllDataContext();
  return (
    <div className="content">
      <div className="container">
        <Carousel
          autoPlay
          interval={6000}
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          transitionTime={1000}
        >
          {artworks.map((artwork) => (
            <div key={artwork.id}>
              <img
                src={artwork.thumbnail}
                srcSet={artwork.thumbnail}
                loading="lazy"
                className="img_event"
                alt=""
              />
              <div className="overlay">
                <h2 className="overlay_title">{artwork.title}</h2>
                <div className="overlay_text">
                  <Icon
                    icon="simple-icons:googlemaps"
                    color="white"
                    height="20"
                    className="place"
                  />
                  <p className="">{artwork.artwork_technique}</p>
                </div>
                <div className="overlay_text">
                  <Icon
                    icon="uiw:date"
                    color="white"
                    height="20"
                    className="date"
                  />
                  <p className="">{artwork.date_creation}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
