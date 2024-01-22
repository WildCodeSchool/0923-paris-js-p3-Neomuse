import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import "./home.css";

function Home() {
  const navigate = useNavigate();

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
      </div>
      <div className="slide_oeuvre">
        <h2>Des artistes uniques</h2>
        <button
          type="button"
          className="bouton_voir"
          onClick={() => navigate("/artworks")}
        >
          Voir toutes les oeuvres
        </button>
      </div>
    </div>
  );
}

export default Home;
