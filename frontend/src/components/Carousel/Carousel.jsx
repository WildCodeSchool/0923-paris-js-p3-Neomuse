import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
/* import useAllDataContext from "../../contexts/AllDataContext"; */
import "./carousel.css";

function Slider() {
  const [artworks, setArtworks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/artworks/${id}`,
          {
            method: "GET",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setArtworks(data);
        } else {
          console.error("Pas d'oeuvre par technique trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtworks();
  }, [id]);
  /* const { artworks } = useAllDataContext(); */
  return (
    <div className="content">
      <div className="container">
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          transitionTime={2000}
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
