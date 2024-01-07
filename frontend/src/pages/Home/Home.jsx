import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import "./home.css";

function Home() {
  return (
    <div>
      <Carousel />

      <div className="slide_artist">
        <h2>Des artistes uniques</h2>
        <Button text="Voir tous les artistes" />
      </div>
      <div className="slide_oeuvre">
        <h2>Des artistes uniques</h2>
        <Button text="Voir toutes les oeuvres" />
      </div>
    </div>
  );
}

export default Home;
