import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import "./OeuvreDetail.css";
import Oeuvre from "../Oeuvre";

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
  }, [id]);

  return (
    <section>
      <Link to="/artworks">Toute la collection</Link>
      {artwork && (
        <div className="sectionOeuvreD">
          <figure className="boximgOeuvreDetail">
            <img
              src={artwork.artworkUnique?.thumbnail}
              alt=""
              className="imgOeuvreDetail"
            />
          </figure>
          <div className="aside">
            <div className="enTeteOeuvreDetais">
              <div className="titreOeuvre">
                <p>{artwork.artworkUnique?.title}</p>
                <p>{artwork.artworkUnique?.category}</p>
                <p>{artwork.artworkUnique?.price} €</p>
                <p>
                  {artwork.artworkUnique?.dimension_height} x{" "}
                  {artwork.artworkUnique?.dimension_width} cm
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
              <p className="descripOeuvre-1">
                {artwork.artworkUnique?.description}
              </p>
              <div className="descripOeuvre-2">
                <div>
                  <span className="dimensionimage">Dimensions:</span>{" "}
                  <span>
                    {artwork.artworkUnique?.dimension_height} x{" "}
                    {artwork.artworkUnique?.dimension_width} cm
                  </span>{" "}
                </div>
                <div>
                  <span className="dimensionimage">Theme :</span>{" "}
                  <span>{artwork.artworkUnique?.art_theme}</span>
                </div>
                <div>
                  <span className="dimensionimage">Technique :</span>{" "}
                  <span>{artwork.artworkUnique?.technique_name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <h1 className="Titreslid">
        Autres oeuvres de la catégories {artwork.artworkUnique?.technique_name}{" "}
      </h1>
      <div className="gridcontainer">
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 15 }}
          sx={{ flexGrow: 1 }}
        >
          {artwork.artworkList?.map((oeuvre) => (
            <Grid xs={2} sm={4} md={4.6} key={oeuvre.artworks_id}>
              <Link
                className="LinkOeuvreId"
                to={`/artworks/${oeuvre.artworks_id}`}
              >
                <Oeuvre artwork={oeuvre} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}

export default Artwork;
