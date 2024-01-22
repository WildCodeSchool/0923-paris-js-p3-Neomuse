import AddOeuvre from "../../components/getionOeuvre/AddOeuvre";
import "./pageAdmin.css";

function PageAdmin() {
  return (
    <div>
      <h1 className="titreAdmin">TABLEAU DE BORD</h1>
      <AddOeuvre />
    </div>
  );
}

export default PageAdmin;
