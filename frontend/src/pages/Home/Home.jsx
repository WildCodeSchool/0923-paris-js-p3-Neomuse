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
      <div className="slide_artist">
        <h2>Des artistes uniques</h2>
        <button
          type="button"
          className="bouton_voir"
          onClick={() => navigate("/artists")}
        >
          Voir tous les artistes
        </button>
        <SliderArtist />
      </div>
      <div className="slide_oeuvre">
        <h2>Des oeuvres uniques</h2>
        <button
          type="button"
          className="bouton_voir"
          onClick={() => navigate("/artworks")}
        >
          Voir toutes les oeuvres
        </button>

        <SliderOeuvre artworks={artworks} />
      </div>
    </div>
  );
}

export default Home;
