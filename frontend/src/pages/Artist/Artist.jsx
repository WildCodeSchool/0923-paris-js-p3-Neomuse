import { useParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import "./artist.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderOeuvre from "../../components/Slider/SliderOeuvre";

function Artist() {
  const { id } = useParams();
  const artworks = useLoaderData();
  const [artists, setArtists] = useState([]);
  const [randomArtworkIndex, setRandomArtworkIndex] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/artists/${id}`,
          {
            method: "GET",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setArtists(data);
          // Générer un index aléatoire entre 0 et la longueur du tableau d'œuvres - 1
          const randomIndex = Math.floor(Math.random() * artworks.length);
          setRandomArtworkIndex(randomIndex);
        } else {
          console.error("Pas d'artiste trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtists();
  }, [id, artworks]);

  return (
    <>
      <img
        src={artists.thumbnail}
        alt="mr-jones-artwork3"
        className="art-imgtop-desk"
      />
      {randomArtworkIndex !== null && (
        <img
          src={artworks[randomArtworkIndex].thumbnail}
          alt={`random-artwork-${randomArtworkIndex}`}
          className="art-imgtop"
        />
      )}

      <h3 className="art-name">Artiste : {artists?.artist_name}</h3>
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
      <SliderOeuvre artworks={artworks} />
    </>
  );
}

export default Artist;
