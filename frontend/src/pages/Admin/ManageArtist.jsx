import { useNavigate } from "react-router-dom";
import DeleteArtist from "../../components/gestionArtist/DeleteArtist";
import "./pageAdmin.css";

function ManageArtist() {
  const navigate = useNavigate();
  return (
    <div className="admin-page">
      <div className="box_lien">
        <button
          type="button"
          className="boutonModifArtist"
          onClick={() => navigate("/users")}
        >
          Mon profil
        </button>
        <h1 className="h1Oeuvres">GERER LES ARTISTES</h1>
        <button
          type="button"
          className="boutonModifArtist"
          onClick={() => navigate("/adminModifOeuvre")}
        >
          GESTION DES OEUVRES
        </button>
      </div>
      <DeleteArtist />
    </div>
  );
}

export default ManageArtist;
