import AddOeuvre from "../../components/getionOeuvre/AddOeuvre";
import AddArtiste from "../../components/gestionArtiste/AddArtiste";
import "./pageAdmin.css";

function PageAdmin() {
  return (
    <div>
      <h1 className="titreAdmin">TABLEAU DE BORD</h1>
      <AddArtiste />
      <AddOeuvre />
    </div>
  );
}

export default PageAdmin;
