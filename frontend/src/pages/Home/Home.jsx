import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import "./home.css";

function Home() {
  return (
    <div>
      <Carousel />
      <Button text="Voir tous les artistes" />
      <Carousel />
      <Button text="Voir toutes les oeuvres" />
    </div>
  );
}

export default Home;
