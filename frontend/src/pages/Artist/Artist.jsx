import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
/* import useAllDataContext from "../../contexts/AllDataContext"; */
import "./artist.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderOeuvre from "../../components/Slider/SliderOeuvre";

function Artist() {
  const { id } = useParams();
  /* const { artists, artworks } = useAllDataContext(); */
  const [artists, setArtists] = useState([]);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const artistResponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/artists/${id}`,
          {
            method: "GET",
          }
        );
        if (artistResponse.status === 200) {
          const artistData = await artistResponse.json();
          setArtists([artistData]);
          /* console.log(artistData); */

          // Fetch artworks for the artist
          const artworksResponse = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/artworks?artistId=${id}`,
            {
              method: "GET",
            }
          );

          if (artworksResponse.status === 200) {
            const artworksData = await artworksResponse.json();
            setArtworks(artworksData);
          } else {
            console.error("Pas d'oeuvres d'art trouvées");
          }
        } else {
          console.error("Pas d'artiste trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtist();
  }, [id]);

  return (
    <>
      <img
        src={artists.thumbnail}
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
