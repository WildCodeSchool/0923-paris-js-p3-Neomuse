import { useNavigate } from "react-router-dom";
import useAllDataContext from "../../contexts/AllDataContext";
import Carousel from "../../components/Carousel/Carousel";
import "./home.css";
import SliderArtist from "../../components/Slider/SliderArtist";
import SliderOeuvre from "../../components/Slider/SliderOeuvre";

function Home() {
  const navigate = useNavigate();
  const { artworks } = useAllDataContext();

  return (
    <div>
      <Carousel />
      <div className="box_titleHome">
        <h2 className="titre_Home">Des artistes uniques</h2>
        <button
          type="button"
          className="bouton_voir"
          onClick={() => navigate("/artists")}
        >
          Voir tous les artistes
        </button>
      </div>
      <SliderArtist />
      <div className="box_titleHome">
        <h2 className="titre_Home">Des oeuvres uniques</h2>
        <button
          type="button"
          className="bouton_voir"
          onClick={() => navigate("/artworks")}
        >
          Voir toutes les oeuvres
        </button>
      </div>
      <SliderOeuvre artworks={artworks} />
    </div>
  );
}

export default Home;
