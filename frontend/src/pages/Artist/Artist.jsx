import { useLoaderData } from "react-router-dom";
import "./artist.css";
import Grid from "@mui/joy/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Oeuvre from "../../components/Oeuvre";

function Artist() {
  const { products } = useLoaderData();

  return (
    <>
      <img
        src="https://i.ibb.co/YLj3Rw8/mr-jones-artwork3.jpg"
        alt="mr-jones-artwork3"
        className="art-imgtop-desk"
      />
      <img
        src="https://i.ibb.co/PMgHS6z/mr-jones.png"
        alt="mr-jonesthumb"
        className="art-imgtop"
      />
      <h3 className="art-name">
        <p>{products.name}</p>
      </h3>
      <div className="art-bio-container">
        <img
          src="https://i.ibb.co/PMgHS6z/mr-jones.png"
          alt="mr-jonesthumb"
          className="art-thumb-desk"
        />
        <p className="art-biography">
          Explorez le monde captivant de l'expression artistique avec ECKR!, un
          talentueux artiste qui fusionne la magie du dessin avec la puissance
          du graphisme. Avec une passion débordante pour l'art visuel, ECKR!
          crée des œuvres captivantes qui transcendent les frontières entre la
          réalité et l'imagination. ECKR! maîtrise l'art du dessin avec une
          précision exquise. Chaque trait, chaque ombrage raconte une histoire,
          capturant l'essence même de son imagination débordante. Les œuvres de
          dessin d'ECKR! transportent les spectateurs dans des mondes
          fantastiques, où la créativité prend vie.
          <button className="art-bio-seemore" type="button">
            Voir plus
          </button>
        </p>
      </div>
      <h3 className="art-title">Oeuvres de l'artiste</h3>
      <Grid
        container
        spacing={{ xs: 3, md: 10 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        {products.map((product) => (
          <Grid xs={2} sm={4} md={4} key={product.id}>
            <Oeuvre product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Artist;
