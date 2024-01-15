import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/joy/Button";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import "./OeuvreDetail.css";

function Artwork() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    const Id = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/artworks/${id}`,
          {
            method: "GET",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setArtwork(data);
        } else {
          console.error("Pas d'oeuvre par technique trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };
    Id();
  }, []);

  return (
    <section>
      <Link to="/artworks">Toute la collection</Link>
      {artwork && (
        <div className="sectionOeuvreD">
          <figure className="boximgOeuvreDetail">
            <img src={artwork.thumbnail} alt="" className="imgOeuvreDetail" />
          </figure>
          <div className="aside">
            <div className="enTeteOeuvreDetais">
              <div className="titreOeuvre">
                <p>{artwork.title}</p>
                <p>{artwork.category}</p>
                <p>{artwork.price} €</p>
                <p>
                  {artwork.dimension_height} x {artwork.dimension_width} cm
                </p>
              </div>
              <div className="boxboutton">
                <Button
                  startDecorator={<FavoriteBorder />}
                  sx={{
                    fontFamily: "Lobster",
                    fontWeight: "400",
                    fontSize: "  1rem",
                    bgcolor: "black",
                    color: "white",
                    margin: "0px",
                    "--Button-gap": "0px",
                  }}
                >
                  Ajouter en favoris{" "}
                </Button>
              </div>
            </div>
            <h2 className="descripOeuvreTitre">Description de l'œuvre</h2>
            <div className="descripOeuvre">
              <p className="descripOeuvre-1">{artwork.description}</p>
              <div className="descripOeuvre-2">
                <div>
                  <span className="dimensionimage">Dimensions:</span>{" "}
                  <span>
                    {artwork.dimension_height} x {artwork.dimension_width} cm
                  </span>{" "}
                </div>
                <div>
                  <span className="dimensionimage">Theme :</span>{" "}
                  <span>{artwork.art_theme}</span>
                </div>
                <div>
                  <span className="dimensionimage">Artiste :</span>{" "}
                  <span>{artwork.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <h1 className="Titreslid">Autres oeuvres du même artiste</h1>
    </section>
  );
}

export default Artwork;
