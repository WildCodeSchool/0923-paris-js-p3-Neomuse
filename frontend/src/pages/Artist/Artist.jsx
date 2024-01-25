import React from "react";
import useAllDataContext from "../../contexts/AllDataContext";
import "./artist.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderOeuvre from "../../components/Slider/SliderOeuvre";

function Artist() {
  const { artists, artworks } = useAllDataContext();

  return (
    <>
      <img
        src={artists?.thumbnail}
        alt="mr-jones-artwork3"
        className="art-imgtop-desk"
      />
      <img
        src={artworks?.thumbnail}
        alt="mr-jonesthumb"
        className="art-imgtop"
      />
      <h3 className="art-name">{artists?.artist_name}</h3>
      <div className="art-bio-container">
        <img
          src={artists?.thumbnail}
          alt="mr-jonesthumb"
          className="art-thumb-desk"
        />
        <p className="art-biography">
          {artists?.biography}
          <button className="art-bio-seemore" type="button">
            Voir plus
          </button>
        </p>
      </div>
      <h3 className="art-title">Oeuvres de l'artiste</h3>
      <SliderOeuvre />
    </>
  );
}

export default Artist;
