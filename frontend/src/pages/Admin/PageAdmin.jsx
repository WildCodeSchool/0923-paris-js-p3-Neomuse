import AddOeuvre from "../../components/getionOeuvre/AddOeuvre";
import DeleteOeuvre from "../../components/getionOeuvre/DeleteOeuvre";
import "./pageAdmin.css";

function PageAdmin() {
  return (
    <div>
      <h1 className="titreAdmin">TABLEAU DE BORD</h1>
      <AddOeuvre />
      <DeleteOeuvre />
    </div>
  );
}

export default PageAdmin;
