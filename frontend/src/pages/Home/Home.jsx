import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAllDataContext from "../../contexts/AllDataContext";
import Carousel from "../../components/Carousel/Carousel";
import "./home.css";
import "react-toastify/dist/ReactToastify.css";
import SliderArtist from "../../components/Slider/SliderArtist";
import SliderOeuvre from "../../components/Slider/SliderOeuvre";

function Home() {
  const navigate = useNavigate();
  const { artworks } = useAllDataContext();
  const showToastMessage = () => {
    toast("Success Notification !");
  };
  return (
    <div>
      <Carousel />
      <div className="slide_artist">
        <h2 className="home-title-1">Des artistes uniques</h2>
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
        <h2 className="home-title-2">Des oeuvres uniques</h2>
        <button
          type="button"
          className="bouton_voir"
          onClick={() => navigate("/artworks")}
        >
          Voir toutes les oeuvres
        </button>

        <SliderOeuvre artworks={artworks} />
      </div>
      <div className="button_toastify">
        <button type="button" onClick={showToastMessage}>
          Notify
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Home;
