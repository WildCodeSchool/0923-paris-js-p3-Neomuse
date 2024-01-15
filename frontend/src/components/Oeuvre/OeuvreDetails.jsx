import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/joy/Button";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import "./OeuvreDetail.css";
/* import SliderOeuvre from "../Slider/SliderOeuvre"; */

function Artwork() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <section>
      {product && (
        <div className="sectionOeuvreD">
          <figure className="boximgOeuvreDetail">
            <img src={product.images[0]} alt="" className="imgOeuvreDetail" />
          </figure>
          <div className="aside">
            <div className="enTeteOeuvreDetais">
              <div className="titreOeuvre">
                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>{product.price} €</p>
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
              <p className="descripOeuvre-1">{product.description}</p>
              <div className="descripOeuvre-2">
                <div>
                  <span className="dimensionimage">Dimensions:</span>{" "}
                  <span>{product.title}</span>{" "}
                </div>
                <div>
                  <span className="dimensionimage">Theme :</span>{" "}
                  <span>{product.title}</span>
                </div>
                <div>
                  <span className="dimensionimage">Technique :</span>{" "}
                  <span>{product.title}</span>
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
